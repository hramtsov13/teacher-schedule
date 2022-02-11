<template>
  <div
    class="hover:bg-primary-light flex items-center px-5 py-2 cursor-pointer"
    :class="{ 'bg-primary-light': isActiveRoute }"
    @click="$router.replace({ path: `/student/${student.id}` })"
  >
    <el-icon class="mr-2.5" color="white"><avatar /></el-icon>
    <div>
      <p class="text-base text-white">
        {{ `${student.personalInfo.name} ${student.personalInfo.lastName}` }}
      </p>
      <p v-if="student.lessons.length" class="text-grey-middle text-xs">
        Следующий урок: {{ student.lessons[0].date }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, computed } from 'vue'
import { useRoute } from 'vue-router'
import { IStudent } from '../../helpers/studentsMocks'

interface AsideProps {
  isCollapsed?: boolean
  student: IStudent
  routeLink: string
  activeRoutes: string[]
}

const props = withDefaults(defineProps<AsideProps>(), {
  isCollapsed: false,
  student: () => ({ id: 0, personalInfo: { name: '', lastName: '' } }),
  routeLink: '',
  activeRoutes: () => []
})

const route = useRoute()
const isActiveRoute = computed(() => {
  return route.params.id === String(props.student.id)
})
</script>
