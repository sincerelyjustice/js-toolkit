export const getCalendarDate = (date: string | Date) => {
  return new Date(date).toLocaleDateString('en-GB');
};
