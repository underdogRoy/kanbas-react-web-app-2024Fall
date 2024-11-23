// src/Kanbas/Enrollments/client.ts
import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
const USERS_API = `${REMOTE_SERVER}/api/users`;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const findEnrollmentsForUser = async (userId: string) => {
  const response = await axios.get(`${USERS_API}/${userId}/enrollments`);
  return response.data;
};

export const findEnrollmentsForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/enrollments`);
  return response.data;
};

export const enrollInCourse = async (enrollment: {
  user: string, 
  course: string, 
  role?: string
}) => {
  const response = await axios.post(ENROLLMENTS_API, enrollment);
  return response.data;
};

export const unenrollFromCourse = async (enrollmentId: string) => {
  const response = await axios.delete(`${ENROLLMENTS_API}/${enrollmentId}`);
  return response.data;
};