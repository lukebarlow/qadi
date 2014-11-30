d3 = require('./d3-qadi-min.js')

# finds the items which are in list1 but not list2
module.exports = (list1, list2) ->
    s1 = d3.set(list1)
    for item in list2
        s1.remove(item)
    return s1.values()