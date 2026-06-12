"use client";

import dynamic from "next/dynamic";

const AuthFlow3D = dynamic(() => import("./AuthFlow3D"), {
  ssr: false,
  loading: () => (
    <div className="h-[420px] w-full animate-pulse rounded-2xl bg-iris-50" />
  ),
});

export default function AuthFlow3DClient({ height }: { height?: number }) {
  return <AuthFlow3D height={height} />;
}
