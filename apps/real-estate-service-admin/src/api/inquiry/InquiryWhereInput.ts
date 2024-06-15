import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type InquiryWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  property?: PropertyWhereUniqueInput;
  userContactInfo?: StringNullableFilter;
};
