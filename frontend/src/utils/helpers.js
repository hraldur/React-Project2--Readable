export function setTime(timestamp) {
  const date = new Date(timestamp);
  return date.toDateString();
}
