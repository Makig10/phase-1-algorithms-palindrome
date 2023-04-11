function isPalindrome(word) {
    /*
    Check if a string is a palindrome.
    
    Argument:
        word(string): The input string.
    
    Returns:
        boolean: true if the string is a palindrome, false if not.
    */
    // Convert the input string to lowercase and remove spaces
     = word.toLowerCase().replace(/\s+/g, '');
    
    // Loop through the string and compare each character
    // from the beginning and the end of the string
    for (let i = 0; i < Math.floor(word.length / 2); i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            return false;
        }
    }
    
    return true;
}
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
