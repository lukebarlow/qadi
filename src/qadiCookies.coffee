# the data storage layer for qadi. Uses cookies
d3 = require('./d3-qadi-min.js')
docCookies = require('./docCookies.js')
difference = require('./difference')

dispatch = d3.dispatch('change')


trim = (s) -> s.replace(/^\s+|\s+$/g, '')


getAll = (section = null) ->
    result = {}
    cookies = document.cookie.split(';').map (cookie) ->
        [key, value] = cookie.split('=')
        key = trim(key)
        if not( section != null and key.split('.')[1] != section)
            result[key] = value
    return result


allKeys = ->
    return Object.keys(getAll()).map(trim)


lastSeenCookies = getAll()

getChangedKeys = ->
    currentCookies = getAll()
    changed = []
    for key of currentCookies
        if currentCookies[key] != lastSeenCookies[key]
            changed.push(key)

    newKeys = Object.keys(currentCookies)
    oldKeys = Object.keys(lastSeenCookies)

    changed = changed.concat(difference(newKeys, oldKeys))
    changed = changed.concat(difference(oldKeys, newKeys))

    lastSeenCookies = currentCookies
    return changed

fireOnChange = ->
    changedKeys = getChangedKeys()
    if changedKeys.length
        dispatch.change(changedKeys)


set = (test, result) ->
    if test.slice(0,5) != 'qadi.'
        test = 'qadi.' + test
    docCookies.setItem(test, result, Infinity)


setInterval(fireOnChange, 100)

module.exports = {

    # set the result for a test
    set : set,


    # get the result for a test
    get : (test) ->
        return docCookies.getItem('qadi.' + test)


    remove : (test) ->
        return docCookies.removeItem('qadi.' + test)


    getAll : (section) ->
        all = getAll(section = section)
        ret = {}
        for key of all
            ret[key.replace('qadi.','')] = all[key]
        return ret


    getResultsForSection : (section) ->
        results = getAll(section = section)
        ret = {
            pass : 0,
            fail : 0,
            untested : 0
        }
        for result of results
            ret[results[result]]++
        return ret


    resetAllTests : ->
        all = Object.keys(getAll())
        for test in all
            set(test, 'untested')


    # set up a handler, which is called when the named test changes
    onChange : (handler) ->
        dispatch.on('change', handler)

}


