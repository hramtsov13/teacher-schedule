<template>
  <el-container class="flex-col h-full">
    <Header @is-collapse="handleAsideCollapsing" />
    <el-container>
      <Aside :is-collapsed="isMenuCollapsed" :students="students" />
      <el-main class="bg-grey-light max-h-screen pb-20">
        <router-view v-slot="{ Component }" :key="$route.path">
          <component :is="Component" />
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import Header from '../components/MainLayout/Header.vue'
import Aside from '../components/MainLayout/Aside.vue'
import { useUsersStore } from '../stores/useUsers'

const store = useUsersStore()
store.getAllUsers()

const students = computed(() => store.$state.students)

const isMenuCollapsed = ref(false)

const handleAsideCollapsing = (openState: boolean) => {
  isMenuCollapsed.value = openState
}
</script>
