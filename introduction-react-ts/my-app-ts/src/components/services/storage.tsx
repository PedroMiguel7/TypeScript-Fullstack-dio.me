export const getItemLocalStorage = (key: string): any => {
  return localStorage.getItem(key);
};

export const creaateLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const changeLocalStorage = (key: string, value: any) => {
  getItemLocalStorage(key) && creaateLocalStorage(key, value);
};
