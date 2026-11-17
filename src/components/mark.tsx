import { cn } from "@/lib/utils";
import { AnokhyaMarkGraphic } from "@/components/anokhya-mark-graphic";

/** Anokhya 3.0 chip mark — vector badge used across the site and social previews. */
export function Mark({ size = 36, className }: { size?: number; className?: string }) {
  return <AnokhyaMarkGraphic size={size} className={cn(className)} />;
}