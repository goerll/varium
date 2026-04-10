import type { JSX } from "react";

export type VariantComponent = () => JSX.Element;

export type VariantMap = Record<string, VariantComponent>;

export interface VariantPickerProps {
  variants: VariantMap;
  slot: string;
  defaultVariant?: string;
}
