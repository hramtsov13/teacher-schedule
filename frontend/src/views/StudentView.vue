<template>
  <div v-if="studentToShow" class="text-black">
    <div class="gap-x-2 flex items-center justify-between mb-4 font-medium">
      <p class="text-student_name">
        {{ `${studentToShow.personalInfo.name} ${studentToShow.personalInfo.lastName}` }}
      </p>
      <p class="text-lg">
        {{ $t('STUDENT_VIEW_INFO_LANGUAGE_LEVEL') }}:
        <span class="text-orange">{{ studentToShow.personalInfo.languageLevel }}</span>
      </p>
    </div>
    <p v-if="studentToShow.lessons.length">
      {{ $t('STUDENT_VIEW_INFO_TEACHER') }}: {{ studentToShow.lessons[0].teacher }}
    </p>
    <p v-if="studentToShow.personalInfo.comment">
      {{ $t('STUDENT_VIEW_INFO_COMMENT') }}: {{ studentToShow.personalInfo.comment }}
    </p>
    <p>{{ $t('STUDENT_VIEW_INFO_PHONE') }}: {{ studentToShow.personalInfo.phone }}</p>
    <p>{{ $t('STUDENT_VIEW_INFO_EMAIL') }}: {{ studentToShow.personalInfo.email }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useUsersStore } from '../stores/useUsers'
import { IStudent } from '../helpers/studentsMocks'

const store = useUsersStore()
const route = useRoute()

const studentToShow = computed(() =>
  store.$state.students.find((student: IStudent) => String(student.id) === route.params.id)
)
</script>
