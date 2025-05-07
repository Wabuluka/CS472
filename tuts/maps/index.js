/**
 * Map is a collection of keyed data items.
 * Maps allow keys of any type, an object, string and number. It is also maintains it unlike objects that convert to string
 * new Map() - creates the map
 * map.get(key, value) - returns the value by the key, undefined if key doesn't exist in map
 * map.has(key) - return true if key exists
 * map.delete(key) - removes the element by the key
 * map.clear() - removes everything from the map
 * map.size - returns the current element count
 */

let map = new Map();
map.set("1", "str");
map.set(1, "num1");
map.set(true, "boo1");

console.log(map.get(1));
console.log(map.get("1"));
console.log(map);
