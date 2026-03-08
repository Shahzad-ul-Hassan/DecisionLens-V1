import React from "react";

export type KeyValueItem = {
  id: string;
  label: string;
  value: string;
};

export function KeyValueList({ items }: { items: KeyValueItem[] }) {
  return (
    <dl className="space-y-2 text-xs">
      {items.map((item) => (
        <div key={item.id} className="flex items-center justify-between gap-4 rounded-xl bg-white/[0.03] px-3 py-2">
          <dt className="text-slate-300/80">{item.label}</dt>
          <dd className="truncate text-slate-100">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

