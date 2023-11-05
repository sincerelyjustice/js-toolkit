export const getSelectedValue = (selectElement: HTMLSelectElement): string => {
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  return selectedOption.value;
};
