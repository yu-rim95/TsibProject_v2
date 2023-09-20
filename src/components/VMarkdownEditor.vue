<template>
    <VMarkdownEditor
      v-model="content"
      :locale="locale"
      :upload-action="handleUpload"
    />
  </template>
  
  <script>
  import { ref } from 'vue';
  import { VMarkdownEditor } from 'vue3-markdown';
  import 'vue3-markdown/dist/style.css';
  
  export default {
    components: {
      VMarkdownEditor,
    },
    data() {
      return {
        content: '',
        locale: 'en',
      };
    },
    methods: {
      handleUpload(file) {
        console.log(file);
        return 'https://i.postimg.cc/52qCzTVw/pngwing-com.png';
      },
    },
  };
  </script>
  