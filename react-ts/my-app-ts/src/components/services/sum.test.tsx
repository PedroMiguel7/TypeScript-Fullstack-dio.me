import { multiply, sum } from "./sum";

describe("sum", () => {
  it("should add one to the number given", () => {
    const value = sum(3);
    expect(value).toBe(4);
  });

  it("should muiltiply the number given by 2", () => {
    const value = multiply(3, 2);
    expect(value).toBe(6);
  });

  it("should muiltiply the number given by 3", () => {
    const value = multiply(2, 3);
    expect(value).toBe(6);
  });

  it("should report an error, with a multiplier other than 2 or 3", () => {
    const value = multiply(2, 4);
    expect(value).toBe("Multiplicador inválido");
  });
});
