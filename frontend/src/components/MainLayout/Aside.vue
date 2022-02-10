<template>
  <div>
    <el-menu
      default-active="0"
      :collapse="isCollapsed"
      class="bg-grey-middle h-full"
      :collapse-transition="false"
    >
      <el-menu-item
        v-for="(student, index) in students"
        :key="student.id"
        :index="'' + index"
        class="min-w-[250px] text-right text-black"
      >
        <template #title>
          <el-icon><avatar /></el-icon> {{ student.name }}
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, withDefaults } from 'vue'
const students = reactive([
  {
    id: Math.random(),
    name: 'Максим',
    lastName: 'Петров'
  },
  {
    id: Math.random(),
    name: 'Иван',
    lastName: 'Попов'
  },
  {
    id: Math.random(),
    name: 'Дмитрий',
    lastName: 'Лодырев'
  },
  {
    id: Math.random(),
    name: 'Алексей',
    lastName: 'Прогульщиков'
  }
])

interface AsideProps {
  isCollapsed: boolean
}

const props = withDefaults(defineProps<AsideProps>(), {
  isCollapsed: false
})
</script>
