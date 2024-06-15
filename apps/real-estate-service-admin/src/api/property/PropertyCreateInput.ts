import { InquiryCreateNestedManyWithoutPropertiesInput } from "./InquiryCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  city?: string | null;
  description?: string | null;
  inquiries?: InquiryCreateNestedManyWithoutPropertiesInput;
  location?: string | null;
  name?: string | null;
  price?: number | null;
  state?: string | null;
  typeField?: "Option1" | null;
};
