<template>
  <div
    :class="[
      'hover:bg-primary-light flex items-center py-2 cursor-pointer w-full',
      {
        'hover:bg-primary-light px-5 cursor-pointer': !isCollapsed
      },
      { 'bg-primary-light': isActiveRoute },
      { 'py-4 justify-center': isCollapsed }
    ]"
    @click="$router.push({ path: `/student/${student.id}` })"
  >
    <el-tooltip
      v-if="isCollapsed"
      effect="dark"
      :content="`${student.personalInfo.name} ${student.personalInfo.lastName}`"
      placement="right"
      :show-after="0"
      :hide-after="0"
      transition="''"
      class="bg-primary"
    >
      <el-icon :class="{ 'mr-2.5': !isCollapsed }" color="white" size="30px"><avatar /></el-icon>
    </el-tooltip>

    <el-icon v-else class="mr-2.5" color="white" size="20px"><avatar /></el-icon>

    <div v-if="!isCollapsed">
      <p class="text-base text-white">
        {{ `${student.personalInfo.name} ${student.personalInfo.lastName}` }}
      </p>
      <p v-if="student.lessons.length" class="text-grey-middle text-xs">
        {{ $t('ASIDE_NEXT_LESSON') }}: {{ student.lessons[0].date }}
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
