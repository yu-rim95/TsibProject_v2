
<template>
  <!-- <div> 외부에 div 하나가 필요없어서 삭제 -->
    <!-- 헤더 컴포넌트 추가 -->
    <RouterView />
  <!-- </div> -->
</template>


  <script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Header from '@/components/Header.vue'
  </script>
