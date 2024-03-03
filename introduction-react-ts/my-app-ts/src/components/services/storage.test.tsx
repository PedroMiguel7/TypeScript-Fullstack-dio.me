import { getAllLocalStorage } from "./storage";

describe("storage", () => {
  const getItem = jest.spyOn(Storage.prototype, "getItem");

  it("should set and get item", () => {
    getAllLocalStorage();
    expect(getItem).toHaveBeenCalled();
  });
});
