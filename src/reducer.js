function upperCase(string) {
  let words = string.split(' ');
  let newArr = arr.map(function (word) {
    return word.toUpperCase();
  })
  let result = newArr.join(' ');
  return result;
}

function lowerCase(string) {
  let words = string.split(' ');
  let newArr = arr.map(function (word) {
    return word.toLowerCase();
  })
  let result = newArr.join(' ');
  return result;
}
const toCapitalize = string => {
  const words = string.split(" ");
  return words.map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
}
function reducer(input, action) {
  switch (action) {
    case "upperCase":
      return upperCase(input)
      break
    case "capitalize":
      return toCapitalize(input)
      break
    case "lowerCase":
      return lowerCase(input)
      break
  }
  
}

module.exports = reducer;
