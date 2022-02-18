<template>
  <div>
    {{ `${studentToShow.personalInfo.name} ${studentToShow.personalInfo.lastName}` }}
    <p v-if="studentToShow.lessons.length">
      {{ $t('STUDENT_VIEW_INFO_TEACHER') }}: {{ studentToShow.lessons[0].teacher }}
    </p>
    <p v-if="studentToShow.personalInfo.comment">
      {{ $t('STUDENT_VIEW_INFO_COMMENT') }}: {{ studentToShow.personalInfo.comment }}
    </p>
    <p>{{ $t('STUDENT_VIEW_INFO_PHONE') }}: {{ studentToShow.personalInfo.phone }}</p>
    <p>{{ $t('STUDENT_VIEW_INFO_EMAIL') }}: {{ studentToShow.personalInfo.email }}</p>
    <p>
      {{ $t('STUDENT_VIEW_INFO_LANGUAGE_LEVEL') }}: {{ studentToShow.personalInfo.languageLevel }}
    </p>
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
