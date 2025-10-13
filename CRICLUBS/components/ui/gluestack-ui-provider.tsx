import React from "react";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

export default function UIProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <GluestackUIProvider config={config}>{children}</GluestackUIProvider>;
}
