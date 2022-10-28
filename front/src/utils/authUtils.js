export function isUser() {
  return JSON.parse(localStorage.getItem("id")) !== null;
}
