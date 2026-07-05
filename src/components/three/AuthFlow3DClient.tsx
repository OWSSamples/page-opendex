"use client";

import dynamic from "next/dynamic";

const AuthFlow3D = dynamic(() => import("./AuthFlow3D"), {
  ssr: false,
  loading: () => <div className="opx-json-card opx-json-3d-loader" />,
});

export default function AuthFlow3DClient({ height }: { height?: number }) {
  return <AuthFlow3D height={height} />;
}
