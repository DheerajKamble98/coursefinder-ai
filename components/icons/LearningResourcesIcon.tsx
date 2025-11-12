export default function LearningResourcesIcon({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
      focusable="false"
    >
      <path
        d="M17.3484 3.54896C17.2279 3.47254 17.1057 3.39864 16.9818 3.32731C16.8887 3.2737 16.7946 3.22154 16.6996 3.17087C16.6159 3.12625 16.5316 3.08278 16.4465 3.04049C16.3561 2.99555 16.265 2.95193 16.1731 2.90967C16.0868 2.86999 15.9998 2.8315 15.9122 2.79422C15.8214 2.75558 15.7299 2.71825 15.6377 2.68224C15.573 2.65696 15.508 2.63233 15.4426 2.60836M12.6324 2.01967C12.4233 2.00662 12.2124 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.43916 21.0374 7.10315 19.4543 5.33405"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.6"
        d="M12 16V12"
        stroke="var(--primary-blue)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.6"
        d="M12 8H12.01"
        stroke="var(--primary-blue)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
