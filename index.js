const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

//   * `findMatching`- This function takes an array of drivers' names and a `string`
//   as arguments, and returns the matching list of drivers. The function should be
//   case insensitive.

// * `fuzzyMatch` - This function takes an array of drivers' names and a `string`
//   as arguments for querying the array, and returns all drivers whose names begin
//   with the provided letters.

// * `matchName` - This function takes an array of `driver` objects and a `string`
//   as arguments. Each `driver` object has two properties: `name` and `hometown`.
//   The function should return each element whose `name` property matches the
//   provided `string` argument.


function findMatching(drivers, newName) {
  let matches = drivers.filter(function(element) {
    return (element.toLowerCase() === newName.toLowerCase())
  })
  return matches;
}

//function findMatching(arr, string) {
  // return arrayContaining.filter(name => name.toUpperCase() === stringContaining.toUpperCase())
// }

function fuzzyMatch(drivers, newName) {
  let fuzzyMatches = drivers.filter(element => {
    return (element.startsWith(newName))
  })
  return fuzzyMatches;
}


function matchName(drivers, newName) {
  let matchedName = (drivers).filter(function(object) {
    return (object.name.toLowerCase() === newName.toLowerCase())
  })
  return matchedName;
}


