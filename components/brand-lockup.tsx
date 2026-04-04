import Image from "next/image";
import Link from "next/link";

type BrandLockupProps = {
  compact?: boolean;
  href?: string;
  onClick?: () => void;
};

export function BrandLockup({ compact = false, href = "/", onClick }: BrandLockupProps) {
  return (
    <Link href={href} className="flex items-center gap-3" onClick={onClick}>
      <Image
        src="/logo.png"
        alt="Xelera.ai logo"
        width={compact ? 36 : 42}
        height={compact ? 36 : 42}
        className="h-9 w-9 sm:h-10 sm:w-10"
        priority
      />
      <div>
        <div
          className={
            compact
              ? "text-[1.5rem] font-semibold tracking-[-0.05em] text-slate-950"
              : "text-[1.85rem] font-semibold tracking-[-0.05em] text-slate-950"
          }
        >
          Xelera.ai
        </div>
        {!compact ? (
          <div className="-mt-0.5 text-sm text-slate-600">
            AI systems for growth and operational clarity
          </div>
        ) : null}
      </div>
    </Link>
  );
}
