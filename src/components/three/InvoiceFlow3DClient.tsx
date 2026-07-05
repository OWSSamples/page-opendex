"use client";

import dynamic from "next/dynamic";

const InvoiceFlow3D = dynamic(() => import("./InvoiceFlow3D"), {
  ssr: false,
  loading: () => <div className="opx-json-card opx-json-3d-loader" />,
});

export default function InvoiceFlow3DClient({ height }: { height?: number }) {
  return <InvoiceFlow3D height={height} />;
}
