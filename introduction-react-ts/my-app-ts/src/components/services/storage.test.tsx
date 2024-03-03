import {
  changeLocalStorage,
  creaateLocalStorage,
  getItemLocalStorage,
} from "./storage";

describe("storage", () => {
  const getItem = jest.spyOn(Storage.prototype, "getItem");
  const setItem = jest.spyOn(Storage.prototype, "setItem");

  it("should set and get item", () => {
    getItemLocalStorage("");
    expect(getItem).toHaveBeenCalled();
  });

  it("should create item in localStorage", () => {
    const key = "key";
    const value = "value";
    creaateLocalStorage(key, value);
    expect(setItem).toHaveBeenCalledWith(key, JSON.stringify(value));
  });

  it("should change item in localStorage", () => {
    const key = "key";
    const value = "value";
    creaateLocalStorage(key, value);
    changeLocalStorage(key, value);
    expect(getItem).toHaveBeenCalledWith(key);
    expect(setItem).toHaveBeenCalledWith(key, JSON.stringify(value));
  });
});
