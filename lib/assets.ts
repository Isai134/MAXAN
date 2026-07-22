export function localAsset(url?: string | null) {
  if (!url) return '/images/pages/certificado-lg.d832908.jpg';
  const filename = url.split('/').pop();
  if (!filename) return '/images/pages/certificado-lg.d832908.jpg';
  return /\.(pdf|docx?)$/i.test(filename)
    ? `/documents/archive/${filename}`
    : `/images/archive/${filename}`;
}
