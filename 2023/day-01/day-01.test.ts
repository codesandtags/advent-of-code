import { describe, expect, test } from "bun:test";
import { solution } from "./day-01";

describe("day-01", () => {
  test("Should find calibration for example", async () => {
    const input = "/test.txt";
    const result = await solution(input);

    expect(result).toBe(142);
  });

  test("Should find calibration for input", async () => {
    const input = "/input.txt";
    const result = await solution(input);

    expect(result).toBe(54331);
  });
});
