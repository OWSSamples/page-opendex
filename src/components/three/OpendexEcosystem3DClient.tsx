"use client";

import dynamic from "next/dynamic";

const OpendexEcosystem3D = dynamic(() => import("./OpendexEcosystem3D"), {
  ssr: false,
  loading: () => (
    <div className="h-[360px] w-full animate-pulse rounded-2xl border border-[#e7e4dc] bg-[#fffaf3]" />
  ),
});

export default function OpendexEcosystem3DClient(props: { height?: number }) {
  return <OpendexEcosystem3D {...props} />;
}
