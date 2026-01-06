/** Format Date */
export const getFormattedDate = (date: string | Date) => {
  if (!date) return "";
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
};
