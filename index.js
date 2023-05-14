// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1
 
// which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: In some languages r must be without duplicates.

const inArray = (a1, a2) => {
    let arr = []

    for(let i = 0; i < a1.length; i++){
        for(let j = 0; j < a2.length; j++){
            if(a2[j].indexOf(a1[i]) !== -1){
                arr.push(a1[i])
                break
            }
        }
    }

    return arr.sort()
}

inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"])

//Solution 2

const inArray = (a1, a2) => {
    const str = a2.join(" ")
    return a1.filter((el) => str.includes(el)).sort()
}

inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"])