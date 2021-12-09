export const strTrim = (str, length, delim, appendix) => {
  if (str.length <= length) return str

  var trimmedStr = str.substr(0, length + delim.length)

  var lastDelimIndex = trimmedStr.lastIndexOf(delim)
  if (lastDelimIndex >= 0) trimmedStr = trimmedStr.substr(0, lastDelimIndex)

  if (trimmedStr) trimmedStr += appendix
  return trimmedStr
}

export const isActiveLink = (href, currentPathname) => {
  if (href === '/championship/drivers-team/') {
    return href === currentPathname
  }
  return currentPathname.endsWith(href)
}
