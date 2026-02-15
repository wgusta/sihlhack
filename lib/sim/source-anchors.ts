export function findLineByMatch(content: string, matchString: string): number {
  if (!matchString) {
    return 1
  }
  const idx = content.indexOf(matchString)
  if (idx === -1) {
    return 1
  }
  const before = content.slice(0, idx)
  return before.split('\n').length
}
