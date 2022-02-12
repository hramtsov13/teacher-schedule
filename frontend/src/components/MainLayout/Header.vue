<template>
  <el-header class="flex justify-between items-center py-2.5 px-10 bg-orange font-sans">
    <div>
      <el-button v-if="isCollapse" type="primary" @click="handleOpenSideBar">
        <el-icon class="cursor-pointer"><expand /></el-icon>
      </el-button>
      <el-button v-if="!isCollapse" type="primary" @click="handleOpenSideBar">
        <el-icon class="cursor-pointer"><fold /></el-icon>
      </el-button>
    </div>

    <router-link to="/" class="text-xl font-medium text-white">Teacher's schedule</router-link>

    <el-button type="primary">
      Добавить ученика<el-icon class="ml-2"><Plus /></el-icon>
    </el-button>
  </el-header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['isCollapse'])

const isCollapse = ref(true)

const handleOpenSideBar = () => {
  isCollapse.value = !isCollapse.value
  if (isCollapse.value) emit('isCollapse', isCollapse.value)
  else emit('isCollapse', isCollapse.value)
}
</script>
