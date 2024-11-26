// enrollments/client.ts
import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
const ENROLLMENTS_API = `${API_BASE}/api/enrollments`;

export const findAllEnrollments = async () => {
  const response = await axios.get(ENROLLMENTS_API);
  return response.data;
};

export const enrollInCourse = async (userId: string, courseId: string) => {
  const response = await axios.post(ENROLLMENTS_API, { userId, courseId });
  return response.data;
};

export const unenrollFromCourse = async (userId: string, courseId: string) => {
  await axios.delete(`${ENROLLMENTS_API}/${userId}/${courseId}`);
};