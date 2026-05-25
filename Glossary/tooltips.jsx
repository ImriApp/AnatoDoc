import glossary from "./glossary";

export default function TooltipTerm({ term }) {
  const definition = glossary[term.toLowerCase()];

  return (
    <span
      title={definition}
      style={{
        textDecoration: "underline dotted",
        cursor: "help",
      }}
    >
      {term}
    </span>
  );
}