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

const getGamesAndCombinations = async (input: string) => {
  const lines = await getLines(input);
  const games = [];

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

    games.push({
      gameId,
      combinations,
    });
  }

  return games;
};

export async function partOne(input: string) {
  const games = await getGamesAndCombinations(input);
  let sum = 0;

  for (const game of games) {
    let isValid = true;

    // Validations
    for (const combination of game.combinations) {
      for (const cube of combination) {
        if (cube.total > GAME_RULES[cube.color]) {
          isValid = false;
          break;
        }
      }
    }

    if (isValid) {
      sum += Number(game.gameId);
    }
  }

  return sum;
}

export const partTwo = async (input: string) => {
  const games = await getGamesAndCombinations(input);
  let sum = 0;

  for (const game of games) {
    let red = 0;
    let green = 0;
    let blue = 0;

    for (const combination of game.combinations) {
      const currentRed =
        combination.find((cube) => cube.color === "red")?.total || 0;
      const currentGreen =
        combination.find((cube) => cube.color === "green")?.total || 0;
      const currentBlue =
        combination.find((cube) => cube.color === "blue")?.total || 0;

      red = Math.max(red, currentRed);
      blue = Math.max(blue, currentBlue);
      green = Math.max(green, currentGreen);
    }

    const power = red * blue * green;
    sum += power;
  }

  return sum;
};
