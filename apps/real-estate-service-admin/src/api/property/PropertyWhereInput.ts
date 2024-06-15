import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InquiryListRelationFilter } from "../inquiry/InquiryListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PropertyWhereInput = {
  city?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  inquiries?: InquiryListRelationFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  state?: StringNullableFilter;
  typeField?: "Option1";
};
