<script setup>
import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/vue/24/solid";
import useStudent from "../../compoable/studentApi";
import { onMounted } from "vue";
import { RouterLink } from "vue-router";

const handleDeleteStudent = async (id) => {
  // console.log("Deleted ", id);
  await deleteStudent(id);
  await getAllStudentData();
};

const {
  getAllStudentData,
  studentData,
  err,
  delError,
  deleteStudent,
  statusCode,
} = useStudent();

onMounted(getAllStudentData);
</script>

<template>
  <div>
    <div class="bg-blue-500 p-4 grid grid-cols-9">
      <div class="col-span-5 md:col-span-8">
        <h1 class="text-3xl text-center font-bold mt-3">Student List</h1>
      </div>
      <RouterLink :to="{ name: 'add' }">
        <button
          class="bg-green-500 rounded-md p-3 text-white font-bold  md:text-[20px] tex-[15px] cursor-pointer"
        >
          +Add Student
        </button>
      </RouterLink>
    </div>
    <div
      class="p-4 mb-4 text-sm text-red-700 bg-red-200 text-center"
      v-if="err"
      role="alert"
    >
      Oops! somethingn went wrong : {{ err.message }}
    </div>
    <table class="table-auto w-full" v-else-if="studentData">
      <thead class="bg-slate-600 text-white">
        <tr class="py-5">
          <th class="py-4 px-4">No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr v-for="({ id, studentName, email }, i) in studentData" :key="id">
          <td class="py-2">{{ ++i }}</td>
          <td class="py-2">{{ studentName }}</td>
          <td class="py-2">{{ email }}</td>
          <td class="flex justify-center items-center mt-2">
            <RouterLink :to="{ name: 'view', params: { id: id } }">
              <EyeIcon class="h-5 w-5 cursor-pointer text-blue-700 mx-2" />
            </RouterLink>

            <RouterLink :to="{ name: 'edit', params: { id: id } }">
              <PencilIcon class="h-5 w-5 cursor-pointer text-green-700 mx-2" />
            </RouterLink>

            <TrashIcon
              v-on:click="handleDeleteStudent(id)"
              class="h-5 w-5 cursor-pointer text-red-700 mx-2"
            />
          </td>
          <!-- <td>
              <EyeIcon class="text-blue-500" />
              <PencilIcon class="text-emerald-500 w-6 mx-1" />
              <TrashIcon class="text-red-600 h-6 w-6" />
            </td> -->
        </tr>
      </tbody>
    </table>
    <div
      v-if="statusCode === 200"
      class="fixed top-5 right-5 z-10 bg-red-400 text-white px-6 py-3 rounded-lg shadow-lg transform transition duration-300 ease-in-out animate-slide-in"
    >
      ✅ Deleted successfully!
    </div>
    <div
      v-if="delError"
      class="p-4 mb-4 text-lg text-red-700 bg-red-200 text-start font-bold"
    >
      Unable to delete : {{ delError.message }}
    </div>
  </div>
</template>

<style></style>
