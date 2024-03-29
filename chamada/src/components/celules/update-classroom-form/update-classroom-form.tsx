import { Dispatch, FormEvent, SetStateAction } from "react";
import { Classroom } from "../../../utils/types/data";
import { Form, inputProps } from "../../atoms/form/form";
import { api } from "../../../utils/api/api";

export interface UpdateClassroomFormProps {
  handleControl: () => void;
  changeEditingmode: () => void;
  classroom: Classroom;
}

export function UpdateClassroomForm({
  handleControl,
  classroom,
  changeEditingmode,
}: UpdateClassroomFormProps) {
  const inputsData: inputProps[] = [
    {
      name: "Name",
      placeholder: "New name for this classroom",
      type: "text",
      defaultValue: classroom.name,
    },
    {
      name: "subject",
      placeholder: "New subject for this classroom",
      type: "text",
      defaultValue: classroom.subject,
    },
    {
      name: "theme",
      placeholder: "New theme for this classroom",
      type: "text",
      defaultValue: classroom.theme,
    },
    {
      name: "students",
      placeholder: "New students for this classroom",
      type: "text",
    },
    {
      name: "teacher",
      placeholder: "New teacher for this classroom",
      type: "text",
    },
  ];
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = {
      name: e.currentTarget.Name.value,
      theme: e.currentTarget.theme.value,
      subject: e.currentTarget.subject.value,
      teachersIds: [classroom.teachers[0].id],
    };
    await api.updateClassroom({ ...data, id: classroom.id });
    changeEditingmode();
    handleControl();
  }
  return (
    <section>
      <Form
        title="Update this Classroom"
        inputs={inputsData}
        onSubmit={handleSubmit}
        cancel={changeEditingmode}
      />
    </section>
  );
}
