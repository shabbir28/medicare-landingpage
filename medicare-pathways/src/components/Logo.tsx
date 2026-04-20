export function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Medicare Pathways logo"
    >
      <path
        d="M32 6c10 6 20 7 20 7v20c0 14.5-9.2 21.9-20 25-10.8-3.1-20-10.5-20-25V13s10-1 20-7Z"
        fill="#0B3C5D"
      />
      <path
        d="M20 34c5.2-8.3 11.2-12.5 18-12.5 4.1 0 7.8 1.5 11 4.5"
        stroke="#C9A227"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M22 44c6.2-4.8 12.2-7.2 18-7.2 3.3 0 6.5.7 9.6 2.1"
        stroke="#FFFFFF"
        strokeOpacity="0.9"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="20" cy="34" r="2.2" fill="#C9A227" />
      <circle cx="22" cy="44" r="2.2" fill="#FFFFFF" fillOpacity="0.9" />
    </svg>
  )
}

