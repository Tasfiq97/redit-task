export function getIdFromUrl(url) {
  return url?.split('/').filter(Boolean).pop();
}
