import type { DataMockup } from "@/mock/Data";

export type IconContainerProps = {
  data: DataMockup;
  setDataShow?: (data: DataMockup) => void;
};
