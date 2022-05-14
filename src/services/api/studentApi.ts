import { ListParams } from "./../../models/common";
import { ListResponse, Student } from "../../models";
import axiosClient from "./axiosClient";

const studentApi = {
  getStudents: (params: ListParams): Promise<ListResponse<Student>> => {
    const url = "/students";
    return axiosClient.get(url, { params: { params } });
  },
  getStudentById: (id: number): Promise<Student> => {
    const url = `/students/${id}`;
    return axiosClient.get(url);
  },
  addStudent: (student: Student): Promise<Student> => {
    const url = "/students";
    return axiosClient.post(url, student);
  },
  updateStudent: (student: Student): Promise<Student> => {
    const url = `/students/${student.id}`;
    return axiosClient.put(url, student);
  },
  removeStudent: (id: string): Promise<void> => {
    const url = `/students/${id}`;
    return axiosClient.delete(url);
  },
};
export default studentApi;
