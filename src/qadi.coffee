d3 = require('./d3-qadi-min.js')
qadiCookies = require('./qadiCookies')
difference = require('./difference')

states = ['untested','pass','fail']

ignoreChanges = false

toggleTestState = (d) ->
    ignoreChanges = true
    element = d3.select(this)
    newStateIndex = (states.indexOf(d.state) + 1) % 3
    element.classed(d.state, false)
    d.state = states[newStateIndex]
    element.classed(d.state, true)
    qadiCookies.set(d.name, d.state)
    setTimeout((-> ignoreChanges = false), 100)


getSection = (url) ->
    return url.split('/').pop().split('.').shift()

section = getSection(document.location.href)

testName = (text) ->
    text = text.replace(/[\.\,\(\)\r\n]/g,'')
    text = text.replace(/\ +/g,'_')
    text = encodeURIComponent(text)
    return section + '.' + text


# find any LI elements inside the qadi section, and make them into links
# which can be clicked to toggle the state of the test
setUpTests = ->
    # find any LI items in
    tests = d3.selectAll('#qadi li')

    all = qadiCookies.getAll(section = section)

    # make the text into the data for it
    tests.datum(-> {
        name : testName(this.innerHTML)
    })

    data = if tests.length > 0 then tests.data() else []

    liNames = data.map((d) -> d.name)
    cookieNames = Object.keys(all)

    newlyFound = difference(liNames, cookieNames)
    forRemoval = difference(cookieNames, liNames)

    for name in forRemoval
        qadiCookies.remove(name)

    for test in data
        if test.name in newlyFound
            test.state = 'untested'
            qadiCookies.set(test.name, test.state)
        else
            test.state = qadiCookies.get(test.name)

    tests.each (d) ->
        d3.select(this).classed(d.state, true)

    tests.on('click', toggleTestState)

    qadiCookies.onChange ->
        if ignoreChanges then return
        tests.each (d) ->
            d3.select(this).classed(d.state, false)
            d.state = qadiCookies.get(d.name)
            d3.select(this).classed(d.state, true)


sectionHtml = (d) ->
    results = qadiCookies.getResultsForSection(d.name)
    types = ['untested','pass','fail'].filter((part) ->
        results[part] > 0
    ).map((part) ->
        "<span class=#{part}>#{results[part]}</span>"
    )
    return "&nbsp;&nbsp;(#{types.join(',')})"


setUpSections = ->
    sections = d3.selectAll('#qadi a')
    sections.datum(-> 
        return {
            name : getSection(this.href),
        })

    if sections.data().length
        spans = sections.append('span').html(sectionHtml)
        qadiCookies.onChange -> 
            spans.html(sectionHtml)
        d3.selectAll('#qadi')
            .append('div')
            .attr('class','clearButton')
            .html('clear all tests')
            .on 'click', ->
                qadiCookies.resetAllTests()
                spans.html(sectionHtml)


d3.select(window).on 'load.qadi', ->
    setUpTests()
    setUpSections()