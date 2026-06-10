// components/Tooltip.jsx
import glossary from './glossary.json';
import styles from './Tooltip.module.css';

export default function Tooltip({ term, children }) {
  const entry = glossary[term];
  if (!entry) return <span>{children ?? term}</span>;

  return (
    <span className={styles.wrapper}>
      <span className={styles.trigger}>
        {children ?? term}
      </span>
      <span className={styles.popup} role="tooltip">
        <strong>{term}</strong>
        <span>{entry.description}</span>
        {entry.link && <a href={entry.link}>Learn more →</a>}
      </span>
    </span>
  );
}