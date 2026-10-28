type IconProps = { className?: string };

export function DropIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 6c8 10 14 18.5 14 26a14 14 0 1 1-28 0c0-7.5 6-16 14-26Z" />
    </svg>
  );
}

export function HeartHandIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 32c-6-5-12-10.5-12-17a7 7 0 0 1 12-4.8A7 7 0 0 1 36 15c0 6.5-6 12-12 17Z" />
      <path d="M8 40c4-3 9-4 16-4s12 1 16 4" />
    </svg>
  );
}

export function BandageIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="19" width="30" height="10" rx="5" transform="rotate(-35 24 24)" />
      <circle cx="19" cy="19" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="29" cy="29" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ShieldSparkleIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 6l14 5v11c0 9.5-6 16.5-14 20-8-3.5-14-10.5-14-20V11Z" />
      <path d="M24 18l1.6 3.4L29 23l-3.4 1.6L24 28l-1.6-3.4L19 23l3.4-1.6L24 18Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor">
      <path d="M16.004 3C9.377 3 4 8.373 4 15.002c0 2.3.63 4.47 1.823 6.37L4 29l7.79-1.78a12.9 12.9 0 0 0 4.214.7h.001c6.627 0 12.004-5.373 12.004-12.002C28.009 8.373 22.631 3 16.004 3Zm0 21.86h-.001a10.8 10.8 0 0 1-5.5-1.51l-.395-.235-4.62 1.056 1.08-4.5-.258-.46a10.74 10.74 0 0 1-1.65-5.715c0-5.96 4.85-10.81 10.845-10.81 2.896 0 5.617 1.13 7.664 3.18a10.73 10.73 0 0 1 3.178 7.643c0 5.96-4.85 10.81-10.344 10.351Zm5.938-8.1c-.325-.163-1.922-.95-2.22-1.058-.298-.108-.515-.163-.732.163-.217.325-.84 1.058-1.03 1.276-.19.217-.38.244-.705.081-.325-.163-1.372-.506-2.613-1.613-.966-.862-1.619-1.927-1.809-2.252-.19-.325-.02-.5.143-.662.147-.146.325-.38.488-.57.163-.19.217-.325.325-.542.108-.217.054-.407-.027-.57-.081-.163-.732-1.764-1.003-2.417-.264-.635-.533-.549-.732-.56-.19-.009-.407-.011-.624-.011s-.57.081-.868.407c-.298.325-1.138 1.112-1.138 2.713s1.165 3.148 1.328 3.365c.163.217 2.293 3.5 5.555 4.91.776.335 1.382.535 1.854.685.779.248 1.488.213 2.049.129.625-.093 1.922-.786 2.193-1.546.27-.76.27-1.412.19-1.546-.081-.136-.298-.217-.624-.38Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LeafLogo({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <circle cx="24" cy="24" r="23" fill="#1f4d3a" />
      <path
        d="M24 13c7 4.5 10.5 9.6 10.5 15A10.5 10.5 0 0 1 13.5 28c0-5.4 3.5-10.5 10.5-15Z"
        fill="#f6efdd"
      />
      <path d="M24 16v19" stroke="#1f4d3a" strokeWidth="1.5" />
    </svg>
  );
}

export function TruckIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="14" width="22" height="16" rx="2" />
      <path d="M26 20h10l6 6v4h-16Z" />
      <circle cx="13" cy="34" r="3.4" />
      <circle cx="33" cy="34" r="3.4" />
    </svg>
  );
}

export function CoinIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="16" />
      <path d="M24 16v16M19 19.5c0-2 2.2-3.5 5-3.5s5 1.5 5 3.5-2.2 3-5 3-5 1-5 3.5 2.2 3.5 5 3.5 5-1.5 5-3.5" />
    </svg>
  );
}
