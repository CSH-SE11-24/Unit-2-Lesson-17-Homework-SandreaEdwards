const prompt = require('prompt-sync')()
// Create an object that represents your favorite restaurant with the keys name (string), cuisine (string), and rating (number)

let favResturant = {
  name: "Red Lobster",
  cuisine: "Seafood",
  rating: 4
}
console.log(favResturant)
// Console log the restaurant's name using the object
console.log(favResturant.name)


// Add a new key called location and add the restaurant's location
favResturant.location = "Times Square"


// Change the rating of the restaurant to increase it by one
favResturant.rating++


// Add a new key called test and set the value to null
favResturant.test = null


// Delete the test key
delete favResturant.test


// Console log the object to see if the test key is gone
console.log(favResturant)



// Loop through the object and print every key and element.
// It should look like: 
// name is Ugly Baby
// cuisine is thai
// rating is 10
// location is 407 Smith St, Brooklyn

console.log(`My favorite resturaunt is ${favResturant.name}, the cuisine is ${favResturant.cuisine}, the rating is ${favResturant.rating}, and the location is ${favResturant.location}`)


