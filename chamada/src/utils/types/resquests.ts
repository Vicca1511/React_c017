export type LoginRequest = {
    email: string;
    password: string;
}
export type CreateClassroomPayload = {
    name: string;
    theme: string;
    subject: string;
  };

  export type UpdateClassroomPayload = {
    id: string;
    name?: string;
    subject?: string;
    theme?: string;
    students?: string[];
    teachers?: string[];
  }