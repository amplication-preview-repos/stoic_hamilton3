import { SortOrder } from "../../util/SortOrder";

export type InquiryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  propertyId?: SortOrder;
  updatedAt?: SortOrder;
  userContactInfo?: SortOrder;
};
