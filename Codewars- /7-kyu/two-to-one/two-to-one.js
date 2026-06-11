function longest(s1, s2) {
  // your code
  return Array.from(new Set(s1 + s2)).sort().join("");
}