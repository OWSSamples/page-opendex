"use client";

import dynamic from "next/dynamic";

const CoreScene3D = dynamic(() => import("./CoreScene3D"), {
  ssr: false,
  loading: () => (
    <div className="h-[480px] w-full animate-pulse rounded-2xl bg-iris-50" />
  ),
});

export default function CoreScene3DClient(props: { height?: number }) {
  return <CoreScene3D {...props} />;
}
