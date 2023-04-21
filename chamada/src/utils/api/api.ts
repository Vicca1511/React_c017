import axios from "axios";
import { LoginRequest , CreateClassroomPayload, UpdateClassroomPayload} from "../types/resquests";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const api = {
  login: async ({ email, password }: LoginRequest) => {
    try {
      const response = await axios.post("Authorization/login", {
        email,
        password,
      });
      return response.data;
    } catch (err) {
      alert(err);
    }
  },
  createAttendanceListClassroom: async (classroomId: string) => {
    try {
      const response = await axios.post("/attendance-list", {
        classroomId,
      })
      return response.data;
      
    } catch (err) {
      alert(err);
      
    }
  },
  
  getAttendanceLists : async () => {
    try {
      const response = await axios.get("/attendance-list");
      return response.data;
      
    } catch (err) {
      alert(err);
      
    }
  },
  
    getClassRooms: async () =>{
      try {
        const response = await axios.get("/classroom");
        return response.data;
      } catch (err) {
        alert(err)
      }
    },
  createClassroom: async(payload:CreateClassroomPayload) => {
    try {
      const response = await axios.post("/classroom", payload);
      return response.data
      
    } catch (err) {
      alert(err)
      
    }
  },
  updateClassroom: async (payload: UpdateClassroomPayload) => {
    try {
      const response = await axios.patch("/classroom", payload);
      return response.data;
    } catch (err: any) {
      alert(err);
    }
  },
  deleteClassroom: async (payload: string) => {
    try {
      const response = await axios.delete(`/classroom/${payload}`);
      return response.data;
    } catch (err:any) {
      alert(err);
    }
  },
};
