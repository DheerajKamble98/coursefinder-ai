export default function WalletIcon({ className }: { className?: string }) {
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
        d="M22 3H4C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21H18H22V3Z"
        fill="white"
      />
      <path
        d="M22 3H20.4983H19.5531M18 21H4C2.89543 21 2 20.1046 2 19V5C2 3.89543 2.89543 3 4 3H16.4686"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M22 10.5V10C22 8.89543 21.1046 8 20 8H2V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V18.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        opacity="0.6"
        d="M16 14.5C16 13.1193 17.1193 12 18.5 12H22V17H18.5C17.1193 17 16 15.8807 16 14.5Z"
        fill="var(--primary-blue)"
      />
    </svg>
  );
}
