<template>
  <div class="gap-x-4 gap-y-4 flex justify-between">
    <el-card v-for="student in students" :key="student.name" class="flex-1 cursor-pointer">
      <template #header>
        <div class="card-header">
          <span>{{ `${student.name} ${student.lastName}` }}</span>
        </div>
      </template>
      <p class="text-sm">Ближайшее занятие: 19/03/2022</p>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

interface IStudent {
  id: number
  name: string
  lastName: string
}

const students = reactive<IStudent[]>([
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
</script>
