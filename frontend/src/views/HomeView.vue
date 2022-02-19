<template>
  <ViewLayout>
    <div class="gap-x-4 gap-y-4 grid grid-cols-4">
      <el-card
        v-for="student in students"
        :key="student.id"
        class="col-span-1 cursor-pointer"
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
        <p v-if="student.lessons.length" class="text-sm">
          Ближайшее занятие: {{ student.lessons[0].date }}
        </p>
      </el-card>
    </div>
  </ViewLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useUsersStore } from '../stores/useUsers'
import ViewLayout from '../components/common/ViewLayout.vue'

const store = useUsersStore()

const students = computed(() => store.$state.students)
</script>
