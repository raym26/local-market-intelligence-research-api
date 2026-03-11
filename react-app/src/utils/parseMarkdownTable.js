/**
 * parseMarkdownTable
 *
 * Converts a GitHub-flavored pipe-table string into { headers, rows }.
 *
 * Example input:
 *   | Rank | Name  | Rating |
 *   |------|-------|--------|
 *   | 1    | Foo   | 5.0    |
 *
 * Returns:
 *   { headers: ["Rank", "Name", "Rating"], rows: [["1", "Foo", "5.0"]] }
 */
export function parseMarkdownTable(tableString) {
  if (!tableString || typeof tableString !== "string") {
    return { headers: [], rows: [] };
  }

  const lines = tableString
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  const dataLines = lines.filter(
    (line) => line.startsWith("|") && !/^[|\s\-:]+$/.test(line)
  );

  if (dataLines.length === 0) {
    return { headers: [], rows: [] };
  }

  const parseLine = (line) =>
    line
      .split("|")
      .slice(1, -1)
      .map((cell) => cell.trim());

  const [headerLine, ...rowLines] = dataLines;

  return {
    headers: parseLine(headerLine),
    rows: rowLines.map(parseLine),
  };
}
