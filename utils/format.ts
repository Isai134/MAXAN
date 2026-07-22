export function formatDate(value: string) {
  const date = new Date(`${value}T12:00:00`);
  return new Intl.DateTimeFormat('es-MX', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export function stripMarkdown(value: string) {
  return value
    .replace(/\*\*/g, '')
    .replace(/#{1,6}\s/g, '')
    .trim();
}
