<template>
  <div v-if="studentToShow" class="relative">
    <div class="flex items-center justify-between">
      <p class="text-student_name mb-4 font-medium">
        {{ `${studentToShow.personalInfo.name} ${studentToShow.personalInfo.lastName}` }}
      </p>
      <el-button>
        <el-icon><edit-pen /></el-icon>
      </el-button>
    </div>

    <div class="gap-4 grid h-full grid-cols-[2fr,3fr] grid-rows-2 mb-4">
      <el-card class="row-span-full rounded-lg">
        <template #header>
          <p>{{ $t('STUDENT_VIEW_INFO_INFORMATION') }}</p>
        </template>
        <div class="font-bold">
          <p class="mb-1">
            {{ $t('STUDENT_VIEW_INFO_LANGUAGE_LEVEL') }}:
            <span class="text-primary font-normal">{{
              hasProperty(studentToShow.personalInfo.languageLevel)
            }}</span>
          </p>
          <p class="mb-1">
            {{ $t('STUDENT_VIEW_INFO_PHONE') }}:
            <a :href="`tel:${studentToShow.personalInfo.phone}`" class="text-primary font-normal">{{
              hasProperty(studentToShow.personalInfo.phone)
            }}</a>
          </p>
          <p class="mb-1">
            {{ $t('STUDENT_VIEW_INFO_EMAIL') }}:
            <span class="text-primary font-normal">{{
              hasProperty(studentToShow.personalInfo.email)
            }}</span>
          </p>
          <p class="mb-1">
            {{ $t('STUDENT_VIEW_INFO_PRICE') }}:
            <span class="text-primary font-normal">{{
              hasProperty(studentToShow.personalInfo.price)
            }}</span>
          </p>
          <p class="mb-1">
            {{ $t('STUDENT_VIEW_INFO_TEACHER') }}:
            <span class="text-primary font-normal">{{
              hasProperty(studentToShow.lessons[0].teacher)
            }}</span>
          </p>
        </div>
      </el-card>
      <div class="gap-y-4 row-span-full grid w-full grid-rows-2">
        <el-card class="rounded-lg">
          <template #header>
            <p>{{ $t('STUDENT_VIEW_INFO_COMMENT') }}</p>
          </template>
          <p>{{ hasProperty(studentToShow.personalInfo.comment) }}</p>
        </el-card>
        <el-card class="rounded-lg">
          <template #header>
            <p>{{ $t('STUDENT_VIEW_INFO_ADDITIONAL_INFO') }}</p>
          </template>
          <div class="flex items-center justify-center">Тут Сведения</div>
        </el-card>
      </div>
      <el-card class="col-span-2 mb-4 rounded-lg">
        <template #header> {{ $t('STUDENT_VIEW_INFO_CALENDAR') }} </template>
        <div class="flex items-center justify-center">Тут календарь</div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useUsersStore } from '../stores/useUsers'
import { IStudent } from '../helpers/studentsMocks'
import { useI18n } from 'vue-i18n'

const store = useUsersStore()
const route = useRoute()
const { t } = useI18n()

const studentToShow = computed(() =>
  store.$state.students.find((student: IStudent) => String(student.id) === route.params.id)
)

store.getAxiosInfo()
const testInfo = computed(() => store.$state.testInfo)

const hasProperty = (property: string) => {
  return property ? property : t('NO_DATA')
}
</script>
