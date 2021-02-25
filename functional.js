let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
//   Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return "https://example.com/" +  string.toLowerCase().split(/\s+/).join("-");
}

// urls: Functional version
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

function functionalIncludes(elements) {
    return elements.filter(element => element.includes("Dakota"));
}
console.log(functionalIncludes(states));

function functionalLength(elements) {
    return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(functionalLength(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function functionalMul(elements) {
    return elements.reduce((prod, n) => {return prod *= n; });
}
console.log(functionalMul(numbers));

// lengths: Functional solution
function functionalLengths(elements) {
    return elements.reduce((lengths, element) => {lengths[element] = element.length; return lengths; }, {});
}
console.log(functionalLengths(states));
