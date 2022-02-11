<template>
  <el-header class="flex justify-between items-center py-2.5 px-10 bg-orange font-sans">
    <el-radio-group v-model="isCollapse" @change="emit('isCollapse', isCollapse)">
      <el-radio-button :label="false">Open</el-radio-button>
      <el-radio-button :label="true">Close</el-radio-button>
    </el-radio-group>

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
</script>
