import React from "react";

export type Column<T> = {
  id: string;
  header: string;
  accessor: (row: T) => React.ReactNode;
  align?: "left" | "right";
};

export function DataTable<T>({ columns, rows }: { columns: Column<T>[]; rows: T[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      <table className="min-w-full border-collapse text-sm">
        <thead className="bg-white/[0.03] text-xs uppercase tracking-wide text-slate-300/80">
          <tr>
            {columns.map((col) => (
              <th
                key={col.id}
                className={[
                  "border-b border-white/10 px-3 py-2",
                  col.align === "right" ? "text-right" : "text-left"
                ].join(" ")}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className="border-b border-white/5 last:border-b-0">
              {columns.map((col) => (
                <td
                  key={col.id}
                  className={[
                    "px-3 py-2 text-xs text-slate-100/90",
                    col.align === "right" ? "text-right" : "text-left"
                  ].join(" ")}
                >
                  {col.accessor(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

