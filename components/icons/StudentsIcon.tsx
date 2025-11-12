export default function StudentsIcon({ className }: { className?: string }) {
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
        opacity="0.6"
        d="M12.2222 5.3335L22 9.3335L18.8889 10.6668L12.2222 13.7779L5.55556 10.8794L2 9.3335L12.2222 5.3335Z"
        fill="var(--primary-blue)"
      />
      <path
        d="M22 14.6668C22 14.3113 22 14.2224 22 13.7779M22 12.0002V9.3335L12.2222 5.3335L2 9.3335L5.55556 10.8794M5.55556 10.8794L12.2222 13.7779L18.8889 10.6668V14.6668C18.8889 16.876 17.098 18.6668 14.8889 18.6668H9.55555C7.34641 18.6668 5.55556 16.876 5.55556 14.6668V10.8794Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
