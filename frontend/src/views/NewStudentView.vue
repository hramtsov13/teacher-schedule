<template>
  <div class="flex items-center justify-center h-full">
    <FormNewStudent @submit-form="handleFormSubmit" />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import FormNewStudent from '../components/particles/forms/FormNewStudent.vue'
import { students, IStudent } from '@/helpers/studentsMocks'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleFormSubmit = (newStudent: IStudent) => {
  students.push(newStudent)
  router.push({ path: '/' })
}
</script>
