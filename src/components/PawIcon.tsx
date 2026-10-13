interface PawIconProps {
  className?: string;
}

/** 渲染统一风格的猫爪图标。 */
export function PawIcon({ className = '' }: PawIconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <ellipse cx="24" cy="31" rx="11" ry="9" fill="currentColor" />
      <ellipse cx="9" cy="22" rx="5" ry="7" transform="rotate(-24 9 22)" fill="currentColor" />
      <ellipse cx="18" cy="12" rx="5" ry="7" transform="rotate(-8 18 12)" fill="currentColor" />
      <ellipse cx="30" cy="12" rx="5" ry="7" transform="rotate(8 30 12)" fill="currentColor" />
      <ellipse cx="39" cy="22" rx="5" ry="7" transform="rotate(24 39 22)" fill="currentColor" />
    </svg>
  );
}
