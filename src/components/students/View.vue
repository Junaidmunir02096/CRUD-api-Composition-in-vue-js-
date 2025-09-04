<script setup>
import useStudent from '../../compoable/studentApi';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
 
const {studentData, err, getSingleStuData, getAllStudentData} = useStudent()

const route = useRoute()

onMounted(()=>{
  getSingleStuData(route.params.id)
})
</script>

<template>
  <div>
    <div
      v-if="err"
      class="p-4 mb-4 text-lg text-red-700 bg-red-200 text-start font-bold"
      >
        {{ err.message }}
      </div>
    <table class="table-auto w-full" v-else-if="studentData">
        <thead class="bg-slate-600 text-white">
          <tr class="py-5">
            <th class="py-4 px-4">ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <tr>
            <td class="py-2">{{studentData.id}}</td>
            <td class="py-2">{{studentData.studentName}}</td>
            <td class="py-2">{{studentData.email}}</td>
            <!-- <td>
              <RouterLink :to="{name:'view', params:{id:1}}">
                <span class="px-2 cursor-pointer text-blue-700 font-bold ">View</span>

              </RouterLink>
              <span  class="px-2 cursor-pointer text-green-700 font-bold">Edit</span>
              <span  class="px-2 cursor-pointer text-red-700 font-bold">Delete</span>
            </td> -->
            <!-- <td>
              <EyeIcon class="text-blue-500" />
              <PencilIcon class="text-emerald-500 w-6 mx-1" />
              <TrashIcon class="text-red-600 h-6 w-6" />
            </td> -->
          </tr>
        </tbody>

    </table>
    <div class="m-8 flex justify-center">
        <RouterLink :to="{ name:'list' }">
          <button
            class="bg-green-500 py-2 px-10 font-bold text-xl rounded-md cursor-pointer"
          >
            Back to home
          </button>
        </RouterLink>
    </div>
  
  </div>
</template>

<style></style>
