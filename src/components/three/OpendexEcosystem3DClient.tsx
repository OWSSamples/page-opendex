"use client";

import dynamic from "next/dynamic";

const OpendexEcosystem3D = dynamic(() => import("./OpendexEcosystem3D"), {
  ssr: false,
  loading: () => <div className="opx-json-card opx-json-3d-loader opx-json-3d-loader-compact" />,
});

export default function OpendexEcosystem3DClient(props: { height?: number }) {
  return <OpendexEcosystem3D {...props} />;
}
