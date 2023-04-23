// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy

import { Asteroid } from "../data/data";
import { maxBy } from "./e17";

type YearCount = {
  year: number;
  count: number;
};

export function getGreatestDiscoveryYear(asteroids: Asteroid[]) {
  const yearCounts = new Map<number, number>();

  for (const ast of asteroids) {
    const curCountForYear = yearCounts.get(ast.discoveryYear);
    const newCountForYear = curCountForYear ? curCountForYear + 1 : 1;
    yearCounts.set(ast.discoveryYear, newCountForYear);
  }

  const entries: YearCount[] = Array.from(yearCounts.entries()).map((pair) => ({
    year: pair[0],
    count: pair[1],
  }));
  const bestCount = maxBy<YearCount>(entries, (entry) => entry.count);

  return bestCount && bestCount.year;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
