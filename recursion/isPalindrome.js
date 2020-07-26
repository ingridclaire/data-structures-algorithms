//

const isPalindrome = (string) => {
  let palindrome = '';
  const recurse = (input) => {
    if (input.length === 0) return;
    palindrome += input[input.length - 1];
    return recurse(input.slice(0, input.length - 1));
  }
  recurse(string);
  return string === palindrome;
}

// TESTING
console.log(isPalindrome('aaaaaaab'));