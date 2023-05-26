import { mdiChevronUp, mdiChevronDown } from "@mdi/js";

export const iconChevron = (flag: boolean) => {
  return flag ? mdiChevronUp : mdiChevronDown;
};
