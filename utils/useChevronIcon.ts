import { mdiChevronUp, mdiChevronDown } from "@mdi/js";

export const useChevronIcon = (flag: boolean) => {
  return flag ? mdiChevronUp : mdiChevronDown;
};
