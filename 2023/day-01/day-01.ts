/**
 * Advent of code 2023
 * Day 1: Trebuchet?
 *
 * https://adventofcode.com/2023/day/1
 */
export async function getLines(filePath: string) {
  const path = import.meta.dir + filePath;
  const file = Bun.file(path, { type: "utf-8" });
  const lines = await file.text();

  return lines.split("\n");
}

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
const allNumbers = new RegExp(/one|two|three|four|five|six|seven|eight|nine/gi);
const wordMap = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

export async function solution2(input: string) {
  const lines = await getLines(input);
  let sum = 0;

  for (const line of lines) {
    const matches = line.match(allNumbers) || [];
    let replacedNumbers = line;

    for (const match of matches) {
      replacedNumbers = match
        ? replacedNumbers.replace(match, wordMap[match])
        : replacedNumbers;
    }

    const digits = replacedNumbers
      .split("")
      .filter((character) => !Number.isNaN(parseInt(character)));
    const first = digits[0];
    const last = digits.at(-1);
    sum += Number(first + last);
  }

  return sum;
}
