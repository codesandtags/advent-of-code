import { describe, test, expect } from "bun:test";
import { partOne } from "./day-02";

describe("day-02: part one", () => {
  test("Should return the right answer for test", async () => {
    const answer = await partOne("/day-02/test.txt");

    expect(answer).toBe(8);
  });

  test("Should return the right answer for input", async () => {
    const answer = await partOne("/day-02/input.txt");

    expect(answer).toBe(2317);
  });
});
