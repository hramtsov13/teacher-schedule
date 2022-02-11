<template>
  <aside class="bg-primary aside-shadow min-w-1/5 max-w-[300px] h-full py-5">
    <p
      class="border-grey-light pb-5 font-sans text-2xl font-medium text-center text-white border-b"
    >
      Ученики:
    </p>
    <div class="h-screen pb-40 overflow-y-scroll">
      <AsideItem
        v-for="student in students"
        :key="student.id"
        :student="student"
        route-link="StudentView"
        :active-routes="['StudentView']"
      />
    </div>
  </aside>
</template>

<script setup lang="ts">
import { IStudent } from '@/helpers/studentsMocks'
import AsideItem from '../MainLayout/AsideItem.vue'
import { withDefaults } from 'vue'

interface AsideProps {
  isCollapsed?: boolean
  students: IStudent[]
}

const props = withDefaults(defineProps<AsideProps>(), {
  isCollapsed: false,
  students: () => []
})
</script>
