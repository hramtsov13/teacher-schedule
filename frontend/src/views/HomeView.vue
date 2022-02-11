<template>
  <div class="gap-x-4 gap-y-4 flex justify-between">
    <el-card
      v-for="student in students"
      :key="student.id"
      class="flex-1 cursor-pointer"
      @click="
        $router.push({
          name: 'StudentView',
          params: { id: student.id }
        })
      "
    >
      <template #header>
        <div class="card-header">
          <span>{{ `${student.personalInfo.name} ${student.personalInfo.lastName}` }}</span>
        </div>
      </template>
      <p class="text-sm">Ближайшее занятие: {{ student.lessons[0].date }}</p>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useUsersStore } from '../stores/useUsers'

const store = useUsersStore()

const students = computed(() => store.$state.students)
</script>
