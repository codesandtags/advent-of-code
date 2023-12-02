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
    const digits = line.split("").filter((character) => !isNaN(character));
    // 3. Obtener primero y último digito concatenado
    const first = digits.at(0);
    const last = digits.at(-1);
    // 4. Sumar todos los números concatenados
    sum += Number(first + last);
  }

  // 5. Esa es la respuesta
  return sum;
}
