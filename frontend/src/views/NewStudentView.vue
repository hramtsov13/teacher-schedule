<template>
  <div class="flex items-center justify-center h-full">
    <FormNewStudent @submit-form="handleFormSubmit" />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import FormNewStudent from '../components/particles/forms/FormNewStudent.vue'
import { IStudent } from '@/helpers/studentsMocks'
import { useRouter } from 'vue-router'
import { useUsersStore } from '../stores/useUsers'

const store = useUsersStore()
const router = useRouter()

const handleFormSubmit = async (newStudent: IStudent) => {
  await store.addStudent(newStudent)
  await store.getAllStudents()
  router.push({ path: '/' })
}
</script>
