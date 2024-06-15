import { Inquiry } from "../inquiry/Inquiry";

export type Property = {
  city: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  inquiries?: Array<Inquiry>;
  location: string | null;
  name: string | null;
  price: number | null;
  state: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
