// SPACE DATA EXERCISE 2
// Return an array of all Asteroids' names
// Return example: ['name1', 'name2', ... , 'nameN']

import { Asteroid } from "../data/data";

export function getAsteroidNames(asteroids: Asteroid[]) {
  return asteroids.map((ast) => ast.name);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-2"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
