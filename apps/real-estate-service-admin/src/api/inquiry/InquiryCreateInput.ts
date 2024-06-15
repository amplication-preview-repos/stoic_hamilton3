import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type InquiryCreateInput = {
  message?: string | null;
  property?: PropertyWhereUniqueInput | null;
  userContactInfo?: string | null;
};
