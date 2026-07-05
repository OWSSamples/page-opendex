"use client";

import dynamic from "next/dynamic";

const SecurityEnterprise3D = dynamic(() => import("./SecurityEnterprise3D"), {
  ssr: false,
  loading: () => <div className="opx-security-enterprise-3d opx-security-enterprise-3d-loading" />,
});

export default function SecurityEnterprise3DClient({ height }: { height?: number }) {
  return <SecurityEnterprise3D height={height} />;
}
