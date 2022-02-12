<template>
  <aside
    class="bg-primary max-w-[300px] w-full h-full py-5 transition-max-width duration-300 fade-out"
    :class="{ 'max-w-[70px] pt-0': isCollapsed }"
  >
    <p
      v-if="!isCollapsed"
      class="border-grey-light px-5 pb-5 font-sans text-2xl font-medium text-center text-white border-b"
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
        :is-collapsed="isCollapsed"
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
