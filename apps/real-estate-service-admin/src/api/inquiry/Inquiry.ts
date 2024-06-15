import { Property } from "../property/Property";

export type Inquiry = {
  createdAt: Date;
  id: string;
  message: string | null;
  property?: Property | null;
  updatedAt: Date;
  userContactInfo: string | null;
};
