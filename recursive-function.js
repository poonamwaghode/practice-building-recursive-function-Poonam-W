function reverseString(str) {
    // Base case: if the string has only one character or is empty, return it
    if (str.length <= 1) {
        return str;
    }

    // Recursive case: reverse the rest of the string and add the last character
    return str[str.length - 1] + reverseString(str.slice(0, -1));
}

// Test the function with various string inputs
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("world")); // Output: "dlrow"
console.log(reverseString("a"));     // Output: "a" (base case)
console.log(reverseString(""));      // Output: "" (base case)
console.log(reverseString("racecar")); // Output: "racecar"