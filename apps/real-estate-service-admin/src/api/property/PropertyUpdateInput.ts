import { InquiryUpdateManyWithoutPropertiesInput } from "./InquiryUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  city?: string | null;
  description?: string | null;
  inquiries?: InquiryUpdateManyWithoutPropertiesInput;
  location?: string | null;
  name?: string | null;
  price?: number | null;
  state?: string | null;
  typeField?: "Option1" | null;
};
