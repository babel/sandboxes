/* 
Keyword highlighting is done by checking for the cursor position in the code 
editor and finding the nodes that contain that position. If both the start and
end values for the row or column are zero, all rows or columns are included.
If a component is toggled, that component will not be highlighted unless the
tree is at the lowest depth, indicated by a value property.
*/
export function isBound(cursor, bounds) {
  if (bounds === undefined) return false;

  const { line, ch } = cursor;
  const { start, end } = bounds;

  if (line === 0 && ch === 0) return false;

  const cols = start.column + end.column === 0;

  if (line === start.line && ch >= start.column) return true;
  if (line === end.line && (ch <= start.column || cols)) return true;
  if (start.line < line && line < end.line) return true;

  return false;
}

// Location for AST is off by one for line.
export function fixLoc(loc) {
  return {
    head: { line: loc.start.line, ch: loc.start.column },
    anchor: { line: loc.end.line, ch: loc.end.column },
  };
}

// AST sorting by objects, arrays, empty objects, empty arrays, and primitives.
export const sortByCompositeness = (former, latter) => {
  const formerIsNull = former === null || former === undefined;
  const latterIsNull = latter === null || former === undefined;
  const formerIsObject = typeof former === "object" && !formerIsNull;
  const latterIsObject = typeof latter === "object" && !latterIsNull;

  if (!formerIsObject && latterIsObject) {
    return 1;
  }

  if (!latterIsObject && formerIsObject) {
    return -1;
  }

  const formerIsArray = Array.isArray(former);
  const latterIsArray = Array.isArray(latter);

  if (formerIsArray && !latterIsArray) {
    return 1;
  }

  if (latterIsArray && !formerIsArray) {
    return -1;
  }

  if (formerIsNull && !latterIsNull) {
    return 1;
  }

  if (latterIsNull && !formerIsNull) {
    return -1;
  }

  if (latterIsNull && formerIsNull) {
    return 0;
  }

  const formerIsEmpty = formerIsArray
    ? !former.length
    : !Object.keys(former).length;
  const latterIsEmpty = latterIsArray
    ? !latter.length
    : !Object.keys(latter).length;

  if (formerIsEmpty && !latterIsEmpty) {
    return 1;
  }

  if (latterIsEmpty && !formerIsEmpty) {
    return -1;
  }

  return 0;
};
