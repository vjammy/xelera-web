import Image from "next/image";
import Link from "next/link";

type BrandLockupProps = {
  compact?: boolean;
  href?: string;
  onClick?: () => void;
  inverted?: boolean;
};

export function BrandLockup({
  compact = false,
  href = "/",
  onClick,
  inverted = false,
}: BrandLockupProps) {
  return (
    <Link href={href} className="flex items-center gap-3" onClick={onClick}>
      <Image
        src="/logo.png"
        alt="Xelera.ai logo"
        width={compact ? 30 : 34}
        height={compact ? 30 : 34}
        className="h-7 w-7 sm:h-8 sm:w-8"
        priority
      />
      <div
        className={
          compact
            ? `text-[1.35rem] font-semibold tracking-[-0.05em] ${inverted ? "text-white" : "text-slate-950"}`
            : `text-[1.6rem] font-semibold tracking-[-0.05em] ${inverted ? "text-white" : "text-slate-950"}`
        }
      >
        Xelera.ai
      </div>
    </Link>
  );
}
