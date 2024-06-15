import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  SelectInput,
} from "react-admin";

import { InquiryTitle } from "../inquiry/InquiryTitle";

export const PropertyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="city" source="city" />
        <TextInput label="description" multiline source="description" />
        <ReferenceArrayInput
          source="inquiries"
          reference="Inquiry"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InquiryTitle} />
        </ReferenceArrayInput>
        <TextInput label="location" source="location" />
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
        <TextInput label="state" source="state" />
        <SelectInput
          source="typeField"
          label="type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
