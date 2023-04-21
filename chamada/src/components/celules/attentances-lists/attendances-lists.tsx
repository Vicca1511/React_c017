import { useEffect, useState } from "react";
import { api } from "../../../utils/api/api";
import { AttendancePayload } from "../../../utils/types/data";


export type AttendancesListsProps = {
    selectedClassroom: string | undefined;
};

export default function AttendancesLists({
  selectedClassroom
}: AttendancesListsProps) {
  const [attendances, setAttendances] = useState<AttendancePayload[]>([]);
  const [control, setControl] = useState<boolean>(false);
 

  const attendancesByClassRoomId = selectedClassroom
    ? attendances.filter((attendance) => attendance.id === selectedClassroom)
    : [];

  async function findAttendences() {
    const data = await api.getAttendanceLists();
    return setAttendances(data);
  }
  async function createAttendanceList() {
    if (!selectedClassroom) {
      alert("Please select a classroom");
      return;
    }
    const data = await api.createAttendanceListClassroom(selectedClassroom);
    console.log(data);
    setControl(!control);
  }

  useEffect(() => {
    findAttendences();
  }, [control]);

  return (
    <section>
      <h2>ClassRoom´s attendances</h2>

      <button
        disabled={!selectedClassroom}
        onClick={createAttendanceList}
      ></button>
      {attendancesByClassRoomId.map((attendance) => {
        return (
          <div key={attendance.id}>
            <span>{attendance.day} </span>
            <span>{attendance.startDate} </span>
            <span>{attendance.endDate} </span>
          </div>
        );
      })}
    </section>
  );
}
function setAttendances(data: any) {
  throw new Error("Function not implemented.");
}
