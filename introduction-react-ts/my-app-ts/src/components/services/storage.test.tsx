import { creaateLocalStorage, getAllLocalStorage } from "./storage";

describe("storage", () => {
  const getItem = jest.spyOn(Storage.prototype, "getItem");
  const setItem = jest.spyOn(Storage.prototype, "setItem");

  it("should set and get item", () => {
    getAllLocalStorage("");
    expect(getItem).toHaveBeenCalled();
  });

  it("should create item in localStorage", () => {
    const key = "key";
    const value = "value";
    creaateLocalStorage(key, value);
    expect(setItem).toHaveBeenCalledWith(key, JSON.stringify(value));
  });
});
