<script setup>
import { reactive } from "vue";
import { RouterLink, useRoute } from "vue-router";
import useStudent from "../../compoable/studentApi";
const { studentData, err, createStudent, statusCode } = useStudent();
import { useRouter } from "vue-router";

const router = useRouter();
const formData = reactive({
  studentName: "",
  email: "",
});

const clearform = () => {
  formData.studentName = "";
  formData.email = "";
};
const handleStudentData = async () => {
  // console.log("formData", formData);
  await createStudent(formData);
  clearform();
  router.push({ name: "list" });
};
</script>

<template>
  <div class="shadow-lg pb-5">
    <div class="bg-indigo-500 p-4">
      <h1 class="text-3xl font-bold text-center text-white">Add Student</h1>
    </div>

    <form
      @submit.prevent="handleStudentData"
      class="w-full"
      id="AddStudentForm"
    >
      <div class="flex items-center m-5">
        <div class="w-1/5">
          <label class="font-medium" for="studentName">Name:</label>
        </div>
        <div class="w-4/5">
          <input
            type="text"
            name="studentName"
            id="studentName"
            class="border-2 border-gray-400 rounded-md w-full py-2 px-4"
            placeholder="Write your Name"
            v-model="formData.studentName"
            required
          />
        </div>
      </div>
      <div class="flex items-center m-5">
        <div class="w-1/5">
          <label class="font-medium" for="email">Email:</label>
        </div>
        <div class="w-4/5">
          <input
            type="email"
            name="email"
            id="email"
            class="border-2 border-gray-400 rounded-md w-full py-2 px-4"
            placeholder="Write your Email"
            v-model.trim="formData.email"
            required
          />
        </div>
      </div>
      <div class="flex justify-center gap-9">
        <button
          type="submit"
          class="bg-green-500 py-2 px-10 font-bold text-xl rounded-md cursor-pointer"
        >
          Add
        </button>
        <RouterLink :to="{ name: 'list' }">
          <button
            class="bg-green-500 py-2 px-10 font-bold text-xl rounded-md cursor-pointer"
          >
            Back to home
          </button>
        </RouterLink>
      </div>
    </form>
  </div>
  <div
    v-if="err"
    class="absolute top-5 right-5 w-[50%] z-10 bg-red-300 text-red-500 font-bold px-6 py-3 rounded-md"
  >
    ✅ OOps! Error Occured : {{ err.message }}
  </div>
  <!-- <div
    class="absolute top-5 right-6 p-4 mb-4 text-lg text-green-700 bg-green-200 text-start font-bold"
    v-if="statusCode === 201"
  >
    Student Add successfully !
  </div> -->
</template>

<style></style>
