// eslint-disable-next-line @skylib/only-export-name
export interface VirtualScrollDetails {
  readonly direction: "decrease" | "increase";
  readonly from: number;
  readonly index: number;
  readonly to: number;
}
