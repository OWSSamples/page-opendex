"use client";

import dynamic from "next/dynamic";

const CoreScene3D = dynamic(() => import("./CoreScene3D"), {
  ssr: false,
  loading: () => <div className="opx-json-card opx-json-3d-loader opx-json-3d-loader-large" />,
});

export default function CoreScene3DClient(props: { height?: number }) {
  return <CoreScene3D {...props} />;
}
