import React from "react";
import { parseMarkdownTable } from "../utils/parseMarkdownTable";

export default function CompetitorTable({ markdownTable }) {
  const { headers, rows } = parseMarkdownTable(markdownTable);

  if (!headers.length) {
    return <p className="no-data">No competitor data available.</p>;
  }

  return (
    <div className="competitor-table-wrapper">
      <table className="competitor-table">
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
