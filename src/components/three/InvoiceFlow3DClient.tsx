"use client";

import dynamic from "next/dynamic";

const InvoiceFlow3D = dynamic(() => import("./InvoiceFlow3D"), {
  ssr: false,
  loading: () => (
    <div className="h-[420px] w-full animate-pulse rounded-2xl bg-iris-50" />
  ),
});

export default function InvoiceFlow3DClient({ height }: { height?: number }) {
  return <InvoiceFlow3D height={height} />;
}
