<template>
    <div>
      <Header />
      <div class="write">
        <div class="we-wrap">
          <h1>글 작성</h1>
          <VMarkdownEditor  v-model="markdownText" />
            <div class="thum-cont">
                <p>썸네일 등록</p>
                <input type="file"  ref="imageInput" accept="image/*" @change="changeImage"/>
                <div class="preview">
                <img :src="previewImage" v-if="previewImage" />
                <button v-if="previewImage" @click="deleteImage">썸네일 삭제</button>
                </div>
            </div>
            <div class="tag-wrap">
              <p>리스트에 보여질 게시물 태그를 입력해주세요. 태그는 최대 4개까지 입력할 수 있습니다.</p>
              <ul>
                <li v-for="(tag, index) in tags" :key="index" @click="removeTag(index)">
                  {{ tag }}
                </li>
                <input type="text" v-model="newTag" @keyup.enter="addTag" placeholder="간단하게 태그추가하자 java이렇게.." />
              </ul>
            </div>
          <div class="we-btn">
            <button @click="savePost">글 저장</button>
            <button @click="saveAsDraft">임시 저장</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import VMarkdownEditor from '@/components/VMarkdownEditor.vue';
  import Header from '@/components/Header.vue';
  
  export default {
    components: {
      VMarkdownEditor,
      Header,
    },
    data() {
      return {
        markdownText: '',
        previewImage: null,
        tags: [],
        newTag: '',
      };
    },
    methods: {
      changeImage(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.previewImage = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      },
      deleteImage() {
        this.previewImage = null;
      },
      savePost() {
        var formData = new FormData();

        if (this.$refs.imageInput.files[0]) {
          formData.append('previewImage', this.$refs.imageInput.files[0]);
        } else {
          formData.append('previewImage', new Blob(), 'empty.jpg');
        }

        formData.append('markdownText', this.markdownText || '');
        formData.append('tags', JSON.stringify(this.tags || []));

        this.$axios.post('/savePost', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
            .then(response => {
              console.log(response)
            })
            .catch(error => {
              console.log(error)
            });
      },
      saveAsDraft() {
        // 썸네일을 포함하여 임시로 저장하는 로직
        // 썸네일 이미지(this.previewImage)를 다른 임시 데이터와 함께 서버로 전송할 수 있습니다.
      },

      // 태그영역
      addTag() {
        if (this.newTag && this.tags.length < 4) {
          this.tags.push(this.newTag);
          this.newTag = ''; // 새 태그 입력값 초기화
        }
        if(this.newTag && this.tags.length === 4){
          alert("더이상태그를 추가할수없음")
        }
      },
      removeTag(index) {
        this.tags.splice(index, 1);
      },
    },
  };
  </script>
  