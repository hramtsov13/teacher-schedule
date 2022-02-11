<template>
  <el-container class="flex-col h-full">
    <Header @is-collapse="isMenuCollapsed = $event" />
    <el-container>
      <Aside :students="students" />
      <el-main class="bg-grey-light">
        <router-view v-slot="{ Component }" :key="$route.path">
          <component :is="Component" />
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Header from '../components/MainLayout/Header.vue'
import Aside from '../components/MainLayout/Aside.vue'
import { useUsersStore } from '../stores/useUsers'

const store = useUsersStore()

store.getAllUsers()

const students = computed(() => store.$state.students)
</script>
