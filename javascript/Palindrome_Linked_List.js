/*
Given the head of a singly linked list, return true if it is a palindrome.

 

Example 1:
{
  "val": 1,
  "next": {
      "val": 2,
      "next": {
          "val": 2,
          "next": {
              "val": 1,
              "next": null
          }
      }
  }
}
Input: head = [1,2,2,1]
Output: true
Example 2:


{
   "val": 1,
   "next": {
       "val": 2,
       "next": null
   }
 }

Input: head = [1,2]
Output: false
 

Constraints:

The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9
 

Follow up: Could you do it in O(n) time and O(1) space?
*/ 

var isPalindrome = function(head) {
  let arr = []
  const recursiveFunc = (head) =>{
    arr.push(head.val)
    if (head.hasOwnProperty('next') && head.next !== null) {
      recursiveFunc(head.next)
    }
  }

  recursiveFunc(head)
  let reverseHead =[...arr];

  if (arr.toString() === reverseHead.reverse().toString()) {
    console.log("yes")
    return true;
  }
  console.log("no")
  return false;
};



let head = {
  "val": 1,
  "next": {
      "val": 2,
      "next": null
  }
}


// let head = {
//   "val": 1,
//   "next": {
//       "val": 2,
//       "next": {
//           "val": 2,
//           "next": {
//               "val": 1,
//               "next": null
//           }
//       }
//   }
// }

isPalindrome(head);