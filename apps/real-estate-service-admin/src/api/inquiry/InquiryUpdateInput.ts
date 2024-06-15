import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type InquiryUpdateInput = {
  message?: string | null;
  property?: PropertyWhereUniqueInput | null;
  userContactInfo?: string | null;
};
