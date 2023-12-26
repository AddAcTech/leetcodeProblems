var isValid = function (s) {
  const brackets = [];

  for (let c of s) {
    if (c === "(" || c === "{" || c === "[") {
      brackets.push(c);
    } else {
      if (brackets.length === 0) {
        return false; // There's no matching open bracket.
      }

      const openBracket = brackets.pop();

      if (
        (c === ")" && openBracket !== "(") ||
        (c === "}" && openBracket !== "{") ||
        (c === "]" && openBracket !== "[")
      ) {
        return false; // Mismatched closing bracket.
      }
    }
  }

  return brackets.length === 0; // All open brackets should be closed.
};
