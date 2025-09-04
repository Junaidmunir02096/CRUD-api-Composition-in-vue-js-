<script setup>
import { onMounted, reactive } from "vue";
import { RouterLink, useRoute } from "vue-router";
import useStudent from "../../compoable/studentApi";
const { studentData, getSingleStuData, err, updateStudent, statusCode } =
  useStudent();

const route = useRoute();
onMounted(() => {
  getSingleStuData(route.params.id);
});

const handleUpdateStudentData = async () => {
  console.log("update...");
  updateStudent(route.params.id, studentData.value);
};
</script>

<template>
  <div>
    <div class="shadow-lg pb-5">
      <div class="bg-indigo-500 p-4">
        <h1 class="text-3xl font-bold text-center text-white">
          Edit the Student
        </h1>
      </div>

      <form
        @submit.prevent="handleUpdateStudentData"
        class="w-full"
        id="AddStudentForm"
      >
        <div class="flex items-center m-5">
          <div class="w-1/5">
            <label class="font-medium" for="studentid">ID:</label>
          </div>
          <div class="w-4/5">
            <input
              type="text"
              name="studentName"
              id="studentid"
              class="border-2 border-gray-400 rounded-md w-full py-2 px-4"
              placeholder="Write your ID"
              readonly
              disabled
              v-model="studentData.id"
            />
          </div>
        </div>
        <div class="flex items-center m-5">
          <div class="w-1/5">
            <label class="font-medium" for="studentid">Name:</label>
          </div>
          <div class="w-4/5">
            <input
              type="text"
              name="studentName"
              id="studentid"
              class="border-2 border-gray-400 rounded-md w-full py-2 px-4"
              placeholder="Write your Name"
              required
              v-model="studentData.studentName"
            />
          </div>
        </div>
        <div class="flex items-center m-5">
          <div class="w-1/5">
            <label class="font-medium" for="emailID">Email:</label>
          </div>
          <div class="w-4/5">
            <input
              type="email"
              name="email"
              id="emailID"
              class="border-2 border-gray-400 rounded-md w-full py-2 px-4"
              placeholder="Write your Email"
              required
              v-model="studentData.email"
            />
          </div>
        </div>
        <div class="flex justify-center gap-9">
          <button
            type="submit"
            class="bg-green-500 py-2 px-10 font-bold text-xl rounded-md cursor-pointer"
          >
            Update
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
      <div
        v-if="err"
        class="absolute top-5 right-5 w-[50%] z-10 bg-red-300 text-red-500 font-bold px-6 py-3 rounded-md"
      >
        ✅ OOps! Error  Occured : {{ err.message }}
      </div>
      <div
        v-if="statusCode === 200"
        class="absolute top-5 right-5 w-[50%] z-10 bg-gray-500 text-white font-bold px-6 py-3 rounded-md"
      >
        ✅ Updated successfully!
      </div>
    </div>
  </div>
</template>

<style></style>
