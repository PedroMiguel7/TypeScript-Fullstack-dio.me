export const sum = (num: number): number => {
  return num + 1;
};

export const multiply = (num: number, muilt: number): number | string => {
  if (muilt === 2 || muilt === 3) {
    return num * muilt;
  }
  return "Multiplicador inválido";
};
