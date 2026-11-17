import Image from "next/image";
import { cn } from "@/lib/utils";

/** The Anokhya 3.0 chip mark — cropped from the official brand artwork. */
export function Mark({ size = 36, className }: { size?: number; className?: string }) {
  return (
    <Image
      src="/brand/mark-512.png"
      alt=""
      width={size}
      height={size}
      priority
      className={cn("shrink-0", className)}
    />
  );
}
