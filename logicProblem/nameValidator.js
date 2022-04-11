/** 
1. A term is either an initials or word.
2. initials = 1 character
3. words = 2+ characters (no dots allowed)

validName(“A. Kesya”) ➞ true

validName(“A. K. Putri) ➞ true

validName(“Angelina K. Putri”) ➞ true

validName(“Angelina”) ➞ false
// Must be 2 or 3 words

validName(“a. Kesya”) ➞ false
// Incorrect capitalization

validName(“A Kesya”) ➞ false
// Missing dot after initial

validName(“A. Kesya Putri”) ➞ false
// Cannot have: initial first name + word middle name

validName(“A. Kesya P.”) ➞ false
// Last name cannot be initial

validName(“Angelina. Kesya Putri”) ➞ false
// Words cannot end with a dot (only initials can) */

function validName(name){
    let upperCaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let isFirstNameChar = false
    let result = true
    let splitName = name.split(' ')
    // console.log(splitName,'----splited name')
    if (splitName.length >= 2){
        let i = 0
        while (i < splitName.length && result){
            if (splitName[i].length ==1 ){
                result = false
                // console.log('line 40')
            } else {
                //check is first name word ?
                if (i==0 && splitName[i].length == 2 && upperCaseChar.indexOf(splitName[i][0]) >= 0 && splitName[i][1]=='.'){
                    isFirstNameChar = true
                }

                if (i==splitName.length-1){
                    if (splitName[i].length == 2){
                        if (upperCaseChar.indexOf(splitName[i][0]) >= 0 && splitName[i][1]=='.'){
                            result = false
                            // console.log('line 46')
                        }
                    }
                } else {
                    if (splitName[i].length == 2){
                        if (upperCaseChar.indexOf(splitName[i][0]) < 0 || splitName[i][1]!='.'){
                            result = false
                            // console.log('line 49')
                        }
                    } else {
                        if (isFirstNameChar){
                            result = false
                        } else {
                            let lastChar = splitName[i][splitName[i].length-1]
                            if (lastChar == '.'){
                                result = false
                                // console.log('line 55')
                            }
                        }
                    }
                }
            }
            i++
        }
    } else {
        result = false
        // console.log('line 64')
    }

    return result
}

let testName = ''

testName = 'A. Kesya'
console.log(`expected validName(“A. Kesya”) ➞ true | result = `,validName(testName))

testName = 'A. K. Putri'
console.log(`expected validName(“A. K. Putri”) ➞ true | result = `,validName(testName))

testName = 'Angelina K. Putri'
console.log(`expected validName(“Angelina K. Putri”) ➞ true | result = `,validName(testName))

testName = 'Angelina'
console.log(`expected validName(“Angelina”) ➞ false | result = `,validName(testName))

testName = 'a. Kesya'
console.log(`expected validName(“a. Kesya”) ➞ false | result = `,validName(testName))

testName = 'A Kesya'
console.log(`expected validName(“A Kesya”) ➞ false | result = `,validName(testName))

testName = 'A. Kesya Putri'
console.log(`expected validName(“A. Kesya Putri”) ➞ false | result = `,validName(testName))

testName = 'A. Kesya P.'
console.log(`expected validName(“A. Kesya P.”) ➞ false | result = `,validName(testName))

testName = 'Angelina. Kesya Putri'
console.log(`expected validName(“Angelina. Kesya Putri”) ➞ false | result = `,validName(testName))