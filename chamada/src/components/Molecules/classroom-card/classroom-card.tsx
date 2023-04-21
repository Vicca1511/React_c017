import { api } from "../../../utils/api/api";
import { Classroom } from "../../../utils/types/data";
import { CreateClassroomForm } from "../../celules/create-classroom-form/create-classroom-form";
import { UpdateClassroomForm } from "../../celules/update-classroom-form/update-classroom-form";

export type ClassroomCardProps = {
    classroom:Classroom;
    changeEditingMode: () => void;
    handleControl: () => void;
    editingMode: boolean


}

export function ClassroomCard({classroom , changeEditingMode , handleControl , editingMode}: ClassroomCardProps) {

    async function handleDeleteClassroom () {
        await api.deleteClassroom(classroom.id ?? "");
        handleControl();
      }
    

  return (
    <div>
      <h2>{classroom?.name}</h2>
      <h2>{classroom?.theme}</h2>
      <h2>{classroom?.subject}</h2>
    {classroom?.teachers.map((teacher) => {
      return <h3 key={teacher.id}>{teacher.name}</h3>;})})
    <button
      onClick={() => {
        changeEditingMode();
      }}
    >
      Edit This Classroom
    </button >
    <button onClick = {handleDeleteClassroom}>
      Delete this Classroom.
    </button>  
    {editingMode ? (
        <UpdateClassroomForm
          handleControl={handleControl}
          changeEditingmode={changeEditingMode}
          classroom={classroom ?? ({} as Classroom)}
        />
      ) : (
        <CreateClassroomForm handleControl={handleControl} />
      )}
      </div>
  )
}
