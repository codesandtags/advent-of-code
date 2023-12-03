/**
 * Advent of code 2023
 * Day 2: Cube Conundrum
 *
 * https://adventofcode.com/2023/day/2
 */

import { getLines } from "../utils/read-input";

const GAME_RULES = {
  red: 12,
  green: 13,
  blue: 14,
};

export async function partOne(input: string) {
  const lines = await getLines(input);
  let sum = 0;

  for (const line of lines) {
    const sections = line.split(": ");
    const gameId = sections[0].split(" ")[1];
    const bag = sections[1].split(";");
    const combinations = bag.map((combination) => {
      return combination.split(",").map((c) => {
        const [total, color] = c.trim().split(" ");
        return { total, color };
      });
    });
    let isValid = true;

    // Validations
    for (const combination of combinations) {
      for (const cube of combination) {
        if (cube.total > GAME_RULES[cube.color]) {
          isValid = false;
          break;
        }
      }
    }

    if (isValid) {
      sum += Number(gameId);
    }
  }

  return sum;
}
