"use client";

import dynamic from "next/dynamic";

const KioskoFlow3D = dynamic(() => import("./KioskoFlow3D"), {
  ssr: false,
  loading: () => (
    <div className="h-[420px] w-full animate-pulse rounded-2xl bg-iris-50" />
  ),
});

export default function KioskoFlow3DClient({ height }: { height?: number }) {
  return <KioskoFlow3D height={height} />;
}
