<template>
  <div>
    {{ `${studentToShow.personalInfo.name} ${studentToShow.personalInfo.lastName}` }}
    <p v-if="studentToShow.lessons.length">Учитель: {{ studentToShow.lessons[0].teacher }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useUsersStore } from '../stores/useUsers'
import { IStudent } from '../helpers/studentsMocks'

const store = useUsersStore()
const route = useRoute()
const studentToShow = ref({})

const getStudent = () => {
  store.$state.students.forEach((student: IStudent) => {
    if (String(student.id) === route.params.id) {
      studentToShow.value = { ...student }
    }
  })
}

getStudent()
</script>
