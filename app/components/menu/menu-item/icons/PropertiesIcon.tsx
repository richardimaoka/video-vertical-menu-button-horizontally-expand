import styles from "./Icon.module.css";

type Props = {};

export function PropertiesIcon(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* <!-- Background circle --> */}
      <circle cx="12" cy="12" r="11" fill="none" />

      {/* <!-- Property lines --> */}
      <g>
        {/* <!-- Property line 1 --> */}
        <line x1="6" y1="7" x2="10" y2="7" />
        <circle cx="13" cy="7" r="1.5" fill="#333" />
        <line x1="15" y1="7" x2="18" y2="7" />

        {/* <!-- Property line 2 --> */}
        <line x1="6" y1="12" x2="9" y2="12" />
        <circle cx="12" cy="12" r="1.5" fill="#333" />
        <line x1="14" y1="12" x2="18" y2="12" />

        {/* <!-- Property line 3 --> */}
        <line x1="6" y1="17" x2="11" y2="17" />
        <circle cx="14" cy="17" r="1.5" fill="#333" />
        <line x1="16" y1="17" x2="18" y2="17" />
      </g>
    </svg>
  );
}
