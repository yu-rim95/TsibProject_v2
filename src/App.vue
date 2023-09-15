
<template>
  <div>
    <!-- 헤더 컴포넌트 추가 -->
    <RouterView />
  </div>
</template>


  <script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Header from '@/components/Header.vue'
  </script>
