// SPACE DATA EXERCISE 8
// Return a Planet by a given moon name

import { Planet } from "../data/data";

//  must have destructured parameters
type Params = {
  planets: Planet[];
  moonName: string;
};

export function findPlanetByMoon({ planets, moonName }: Params) {
  return planets.find((planet) =>
    planet.moons?.find((moon) => moon.toLowerCase() === moonName.toLowerCase())
  );
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
