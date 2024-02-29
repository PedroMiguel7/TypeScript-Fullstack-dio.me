import { sum } from "./sum";

describe("sum", () => {
  it("should add one to the number given", () => {
    const value = sum(3);
    expect(value).toBe(4);
  });
});
