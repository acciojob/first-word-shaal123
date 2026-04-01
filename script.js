function firstWord(s) {
  // Remove leading and trailing spaces
  s = s.trim();

  // Find index of first space
  const index = s.indexOf(' ');

  // If no space found, return whole string
  if (index === -1) {
    return s;
  }

  // Return substring from start to first space
  return s.slice(0, index);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));