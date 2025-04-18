import type { IntRange } from "@/shared/types";
import type { CheckOption } from "@/shared/UI/Forms/VCheckbox";
import type { RadioOption } from "@/shared/UI/Forms/VRadio";
import type { SelectItem } from "@/shared/UI/Forms/VSelect";

type SelectList = "land" | "multi" | "store";

export interface SelectOptionCalc extends SelectItem {
  name: SelectList;
}

export type PriceTypesList = "anim" | "regular";
export interface RadioOptionPrice extends RadioOption {
  val: PriceTypesList;
}

export interface PriceCheckBox extends CheckOption {
  val: PriceTypesList;
}

export type PricePercentRange = IntRange<70, 200>
