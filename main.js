/**
 * 
 Example input:
  items = [“red”, “blue”, “red”, “green”, “blue”] // Length = n
  order = [“blue”, “red”, “black”] // Length = k
 Expected output:
  [“blue”, “blue”, “red”, “red”]
 */

const orderItems = (items, order) => {
  if (items && order) {
    const results = []; // constant => O(1)
    const hashMap = {}; // constant => O(1)

    for (const item of items) {
      // n times =>  => O(n)
      if (hashMap[item]) {
        hashMap[item] = hashMap[item] + 1; // constant => O(1)
      } else {
        hashMap[item] = 1; // constant => O(1)
      }
    }

    for (const item of order) {
      // k times => O(k)
      if (hashMap[item]) {
        let count = hashMap[item];
        while (count > 0) {
          // count times =>  => O(count)
          results.push(item);
          count--;
        }
      }
    }
    return results;
  }

  return "Invalid input...";
};

module.exports = orderItems;

/**
 * Time Complexity
 *
 * All the operaqtions like variable declarations or accessing these variables
 * and the hashmap will take a constant time, so the the complexity for these will be O(1)
 *
 * 1st For loop
 * Here we are looping through the items array of length 'n' and adding the items in the
 * hashmap, so the complexity will be as follows:-
 * c1 = O(1) for accessing and updating hashmap
 * T = n * c1 for updating the hashmap n times
 * T = O(n) // ignoring the constants, we are left with n
 *
 * 2nd For loop
 * Here we are looping through the order array of length 'k' and adding the items in the
 * hashmap based on the number of times a string repeats in the items array, so the complexity will be as follows:-
 * c2 = O(1) for updating the results array
 * T = k * (count * c2) for the while loop
 * T = O(k * n) // ignoring the constants, we are left with k * n
 *
 * so Total time complexity for this method will be
 * T = O(n) + O(k * n)
 * T = O(k * n)
 */

/**
 * Space complexity
 * Since we are creating a new array 'results' and
 * as it depends on the length of the input array 'items', the space complexity will be O(n)
 *
 * We are also creating a hashmap which will also depend on the input array 'items',  the space complexity will be O(n)
 *
 * We are creating a 'count' variable as well which is not depended on the input, so the space complexity will be O(1)
 *
 * so total space complexity will be
 * T = O(n) + O(n) + O(1)
 * T = O(n)
 */
