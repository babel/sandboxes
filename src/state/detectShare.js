/**
 * isShareLink returns true iff the pathname contains the text `share`
 * @returns {boolean}
 */
function isShareLink() {
  const path = window.location.pathname;
  const shareIndicator = "share";
  return path.includes(shareIndicator);
}

function extractID() {

  // Attempt to capture :key from http://example.com/share/:key/
  const pathParts = window.location.pathname.split('/');
  if (pathParts[1] == 'share' && pathParts[2]) {
    return pathParts[2];
  } else {
    throw new Error("Trying to extract ID from a share link that doesn't have one.")
  }
}

export { isShareLink, extractID };
