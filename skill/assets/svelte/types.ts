export type VariantComponent = () => any;

export type VariantMap = Record<string, VariantComponent>;

export interface VariantPickerProps {
  variants: VariantMap;
  slot: string;
  defaultVariant?: string;
}
