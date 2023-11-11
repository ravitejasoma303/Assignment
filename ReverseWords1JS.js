function reverseWords(sentence) {
  // Split the sentence into words
  const words = sentence.split(' ');

  // Reverse each word and store them in an array
  const reversedWords = words.map(word => {
    // Use array methods to reverse the characters in each word
    const reversedWord = word.split('').reverse().join('');
    return reversedWord;
  });

  // Join the reversed words back into a sentence
  const reversedSentence = reversedWords.join(' ');

  return reversedSentence;
}

// Example :
const inputSentence = "This is a sunny day";
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence); // Output: "shiT si a ynnus yad"