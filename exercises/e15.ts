// SPACE DATA EXERCISE 15
// Return an array of Planets' without moons

import { Planet } from "../data/data";

export function getPlanetsWithNoMoons(planets: Planet[]) {
  return planets.filter((planet) => planet.moons === undefined);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-15"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
