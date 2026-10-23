export type Item = string | { text: string; items: Item[] }

// Nested bullet list for help guide cards. `top` = the first-level list under a card heading,
// `plain` = a first-level list inside flowing content (no rule above it).
export function List({ items, top, plain }: { items: Item[]; top?: boolean; plain?: boolean }) {
  return (
    <ul
      className={`grid gap-2 pl-5 marker:text-h-accent ${top ? "mt-5 list-disc border-t border-h-line pt-5" : plain ? "list-disc" : "mt-2 list-[circle]"}`}
    >
      {items.map((n) =>
        typeof n === "string" ? (
          <li key={n}>{n}</li>
        ) : (
          <li key={n.text}>
            {n.text}
            <List items={n.items} />
          </li>
        ),
      )}
    </ul>
  )
}
