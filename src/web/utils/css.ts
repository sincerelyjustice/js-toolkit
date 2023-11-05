export const gatherClasses = (...classNames: string[]): string => {
  const trueNames = classNames.filter((className) => !!className);
  return trueNames.join(' ');
};

export const optionalClass = (className: string, condition: boolean): string => {
  return condition ? className : '';
};

export const choiceClass = (class1: string, class2: string, choice: boolean): string => {
  return choice ? class1 : class2;
};