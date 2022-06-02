/**

Given two strings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
 */

var canConstruct = function(ransomNote, magazine) {
    let magArr = magazine.split('');
    let ranArr = ransomNote.split('');

    for (let i = 0; i < ranArr.length; i++) {
      if(magArr.includes(ranArr[i])){
        const magIndex = magArr.indexOf(ranArr[i]);
        if (magIndex > -1) {
          magArr.splice(magIndex, 1); // 2nd parameter means remove one item only
        }
      }else{
        return false;
      }
    }
    return true;
};


let ransomNote = "sshal";
let magazine = "bishal";

canConstruct(ransomNote, magazine)