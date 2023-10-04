var smallerStringA1 = 'abcd'
var smallerStringB1 = 'efg'
var expected = 'efgabcd'

var smallerStringA2 = 'sunnyside up eggs'
var smallerStringB2 = 'biscuits and gravy'
var expected = 'sunnyside up eggsbiscuits and gravy'

/**
 * Combine two given strings together with the smaller string being added
 * in the front. If they are the same length, the first string will be
 * added to the front.
 * NOTE: How do we get the length of a string?
 * @returns {string} The combined strings.
 */
function combineSmallerStringFirst(s1, s2) {
    if (s1.length < s2.length) {
        if (s2.length > s1.length) {
        }
    }
    
}


console.log(combineSmallerStringFirst(smallerStringA1, smallerStringB1))
console.log(combineSmallerStringFirst(smallerStringA2, smallerStringB2))