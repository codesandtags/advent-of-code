/**
 * Advent of code 2023
 * Day 1: Trebuchet?
 *
 * https://adventofcode.com/2023/day/1
 */

import { getLines } from "../utils/read-input";

export async function solution(input: string) {
  const lines = await getLines(input);
  let sum = 0;
  // 1. Leer cada línea
  for (const line of lines) {
    // 2. Por cada línea devolver un arreglo
    // de numeros
    const digits = line
      .split("")
      .filter((character) => !Number.isNaN(parseInt(character)));
    // 3. Obtener primero y último digito concatenado
    const first = digits[0];
    const last = digits.at(-1);
    // 4. Sumar todos los números concatenados
    sum += Number(first + last);
  }

  // 5. Esa es la respuesta
  return sum;
}

// Word map for numbers from one to nine
const wordMap = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

export async function solution2(input: string) {
  const lines = await getLines(input);
  let sum = 0;

  for (const line of lines) {
    const digits = [];
    let position = 0;

    for (const character of line) {
      if (!Number.isNaN(parseInt(character))) {
        digits.push(character);
      }

      for (const [key, value] of Object.entries(wordMap)) {
        if (line.startsWith(key, position)) {
          digits.push(value);
        }
      }
      position++;
    }

    const first = digits[0];
    const last = digits.at(-1);
    sum += Number(first + last);
  }

  return sum;
}
