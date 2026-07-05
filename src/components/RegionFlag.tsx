import type { ImgHTMLAttributes } from "react";
import { getRegionFlag, type RegionFlagCode } from "@/lib/regionFlags";

type RegionFlagProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "alt" | "src"> & {
  code: RegionFlagCode;
  decorative?: boolean;
};

export default function RegionFlag({
  code,
  decorative = false,
  className = "",
  loading = "lazy",
  decoding = "async",
  ...props
}: RegionFlagProps) {
  const flag = getRegionFlag(code);

  return (
    <img
      {...props}
      src={flag.src}
      alt={decorative ? "" : flag.alt}
      loading={loading}
      decoding={decoding}
      className={`opx-region-flag ${className}`.trim()}
    />
  );
}
