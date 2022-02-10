<template>
  <el-container class="flex-col h-full">
    <Header @is-collapse="isMenuCollapsed = $event" />
    <el-container>
      <Aside :is-collapsed="isMenuCollapsed" />
      <el-main class="bg-grey-light">
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Header from '../components/MainLayout/Header.vue'
import Aside from '../components/MainLayout/Aside.vue'

const isMenuCollapsed = ref(false)
</script>
