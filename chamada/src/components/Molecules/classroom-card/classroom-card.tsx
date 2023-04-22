import { api } from "../../../utils/api/api";
import { Classroom } from "../../../utils/types/data";
import { UpdateClassroomForm } from "../../celules/update-classroom-form/update-classroom-form";

export type ClassroomCardProps = {
  classroom: Classroom;
  changeEditingMode: () => void;
  handleControl: () => void;
  editingMode: boolean;
};

export function ClassroomCard({
  classroom,
  changeEditingMode,
  handleControl,
}: ClassroomCardProps) {
  return (
    <div>
      <h2>{classroom?.name}</h2>
      <h2>{classroom?.theme}</h2>
      <h2>{classroom?.subject}</h2>
      {classroom?.teachers.map((teacher) => {
        return <h3 key={teacher.id}>{teacher.name}</h3>;
      })}
    </div>
  );
}
