"use client";

import dynamic from "next/dynamic";

const KioskoFlow3D = dynamic(() => import("./KioskoFlow3D"), {
  ssr: false,
  loading: () => <div className="opx-json-card opx-json-3d-loader" />,
});

export default function KioskoFlow3DClient({ height }: { height?: number }) {
  return <KioskoFlow3D height={height} />;
}
