import { describe, expect, test } from "bun:test";
import { solution, solution2 } from "./day-01";

describe.skip("day-01: part 1", () => {
  test("Should find calibration for example", async () => {
    const input = "/day-01/test.txt";
    const result = await solution(input);

    expect(result).toBe(142);
  });

  test("Should find calibration for input", async () => {
    const input = "/day-01/input.txt";
    const result = await solution(input);

    expect(result).toBe(54331);
  });
});

describe.skip("day-01: part 2", () => {
  test("Should find calibration for example", async () => {
    const input = "/day-01/test-2.txt";
    const result = await solution2(input);

    expect(result).toBe(281);
  });

  test("Should find calibration for part 2", async () => {
    const input = "/day-01/input.txt";
    const result = await solution2(input);

    expect(result).toBe(54518);
  });
});
