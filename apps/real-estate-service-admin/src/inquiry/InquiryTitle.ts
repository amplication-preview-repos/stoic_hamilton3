import { Inquiry as TInquiry } from "../api/inquiry/Inquiry";

export const INQUIRY_TITLE_FIELD = "userContactInfo";

export const InquiryTitle = (record: TInquiry): string => {
  return record.userContactInfo?.toString() || String(record.id);
};
