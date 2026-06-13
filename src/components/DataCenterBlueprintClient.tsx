"use client";

import dynamic from "next/dynamic";

const DataCenterBlueprint = dynamic(() => import("./DataCenterBlueprint"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 h-full w-full opacity-0" aria-hidden />,
});

export default function DataCenterBlueprintClient() {
  return <DataCenterBlueprint />;
}
