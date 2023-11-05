export const getCalendarDate = (date: string | Date): string => {
  return new Date(date).toLocaleDateString('en-GB');
};
