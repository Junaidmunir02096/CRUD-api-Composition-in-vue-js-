import { ref } from "vue";

import axios from "axios";
import useToast from "./useToast";
export default function useStudent() {
  const studentData = ref([]);
  const err = ref(null);
  const statusCode = ref(null);
  const delError = ref(null);

  const { showToast } = useToast();
  const url = "http://localhost:3000/students/";

  const getAllStudentData = async () => {
    studentData.value = [];
    err.value = null;
    try {
      const res = await axios(url);
      console.log(res.data);
      studentData.value = res.data;
    } catch (error) {
      console.log(error);
      err.value = error;
    }
  };

  const getSingleStuData = async (id) => {
    studentData.value = [];
    err.value = null;
    try {
      const res = await axios(url + id);
      studentData.value = res.data;
    } catch (error) {
      err.value = error;
    }
  };

  const createStudent = async (formData) => {
    try {
      const config = {
        method: "POST",
        url: url,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(formData),
      };
      const res = await axios(config);
      console.log("add", res);
      studentData.value = res.data;

      statusCode.value = res.status;
      showToast("Student add successfully!", "success");
    } catch (error) {
      err.value = error;
    }
  };

  const updateStudent = async (id, data) => {
    try {
      const config = {
        method: "PUT",
        url: url + id,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(data),
      };
      const res = await axios(config);
      console.log("update mmmm", res);
      studentData.value = res.data;
      statusCode.value = res.status;
      if (res.status === 200) {
        statusCode.value = 200;
        setTimeout(() => {
          statusCode.value = null;
        }, 2000);
      }
    } catch (error) {
      err.value = error;
    }
  };

  const deleteStudent = async (id) => {
    try {
      const config = {
        method: "DELETE",
        url: url + id,
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios(config);
      console.log("........", res);
      // studentData.value = res.data
      statusCode.value = res.status;
      console.log("....", res.status);
      if (res.status === 200) {
        statusCode.value = 200;

        setTimeout(() => {
          statusCode.value = null;
        }, 2000);
      }
    } catch (error) {
      delError.value = error;
      if (error) {
        setTimeout(() => {
          delError.value = null;
        }, 2000);
      }
    }
  };
  return {
    studentData,
    err,
    statusCode,
    delError,
    getAllStudentData,
    getSingleStuData,
    createStudent,
    updateStudent,
    deleteStudent,
  };
}
