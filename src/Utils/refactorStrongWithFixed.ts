export const refactorStrongWithFixed = (stringToRefactor: string, numberToDiscard: number) => {
  return parseFloat(stringToRefactor).toFixed(numberToDiscard);
};
