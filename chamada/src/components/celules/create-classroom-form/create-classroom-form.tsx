import { FormEvent } from "react";
import { api } from "../../../utils/api/api";
import { Form } from "../../atoms/form/form";

export interface CreateClassroomForm {
  handleControl: () => void;
}
export function CreateClassroomForm({ handleControl }: CreateClassroomForm) {
  const inputsData = [
    {
      placeholder: "Enter",
      type: "text",
      name: "classroom",
    },
    {
      placeholder: "classroom",
      type: "text",
      name: "classroom",
    },
    {
      placeholder: "Enter",
      type: "text",
      name: "classroom",
    },
  ];

  async function HandleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    

    const data = {
      name: e.currentTarget.Name.value,
      theme: e.currentTarget.theme.value,
      subject: e.currentTarget.subject.value,
    };
    const response = await api.createClassroom(data);

    handleControl();
  }

  return (
    <section>
      <Form title={"Create"} inputs={inputsData} onSubmit={HandleSubmit} />
    </section>
  );
}
