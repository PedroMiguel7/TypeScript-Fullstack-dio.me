export const getAllLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

export const creaateLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};
