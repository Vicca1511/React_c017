import { useEffect, useState } from "react";
import { Select } from "../../atoms/select/select";
import { api } from "../../../utils/api/api";
import { CreateClassroomForm } from "../../celules/create-classroom-form/create-classroom-form";
import AttendancesLists from "../../celules/attentances-lists/attendances-lists";
import { Classroom, User } from "../../../utils/types/data";
import { UpdateClassroomForm } from "../../celules/update-classroom-form/update-classroom-form";
import { ClassroomCard } from "../../Molecules/classroom-card/classroom-card";

export default function Classroom() {
  const [classrooms, setClassRooms] = useState<Classroom[]>([]);

  const [selectedClassroom, setSelectedClassroom] = useState<
    string | undefined
  >();

  const [control, setControl] = useState<boolean>(false);

  const [isEditingMode, setEditingMode] = useState<boolean>(false);

  const classroomSelectedData = classrooms.find(
    (classroom) => classroom.id === selectedClassroom
  );

  async function findClassrooms() {
    const data = await api.getClassRooms();
    setClassRooms(data);
  }

  function getSelectedClassroom(value: string) {
    setSelectedClassroom(value);
  }

  function handleControl() {
    setControl(!control);
  }

  function handleEditingMode() {
    setEditingMode(!isEditingMode);
  }
  async function handleDeleteClassroom() {
    await api.deleteClassroom(classroomSelectedData?.id ?? "");
    handleControl();
  }

  useEffect(() => {
    findClassrooms();
  }, [control]);

  return (
    <div>
      <h3>ClassRooms</h3>
      <Select
        options={classrooms.map((classroom) => {
          return {
            name: classroom.name,
            value: classroom.id,
          };
        })}
        selectedOption={getSelectedClassroom}
      />
      <div>
        {selectedClassroom && (
          <ClassroomCard
            classroom={classroomSelectedData ?? ({} as Classroom)}
            changeEditingMode={handleEditingMode}
            editingMode={isEditingMode}
            handleControl={handleControl}
          />
        )}
      </div>
      {selectedClassroom && (
        <>
          <button
            type="button"
            onClick={() => {
              handleEditingMode();
            }}
          >
            Edit This Classroom
          </button>
          <button onClick={handleDeleteClassroom}>
            Delete this Classroom.
          </button>
        </>
      )}
      {isEditingMode ? (
        <UpdateClassroomForm
          handleControl={handleControl}
          changeEditingmode={handleEditingMode}
          classroom={classroomSelectedData ?? ({} as Classroom)}
        />
      ) : (
        <CreateClassroomForm handleControl={handleControl} />
      )}
    </div>
  );
}
