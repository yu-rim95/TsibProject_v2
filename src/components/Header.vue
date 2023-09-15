<template>
    <header>
      <nav>
        <h1>블로그 만드는 블로그</h1>
        <div>
            <ul>
                <li><RouterLink to="/">메인</RouterLink></li>
                <li><RouterLink to="/about">제작자</RouterLink></li>
                <li><a @click="showLoginModal" :class="{ 'active': isLoginActive }">로그인</a></li>
                <li><RouterLink to="/mypage">마이 페이지</RouterLink></li>
            </ul>
          <div class="h-profile"><span>홍길동</span>님 반가워요!</div>
        </div>
      </nav>
    </header>
    <login-modal :is-visible="isLoginModalVisible" @close="closeLoginModal" />
  </template>
  
  <script>
  import LoginModal from './LoginModal.vue'; 
  
  export default {
    data() {
      return {
        isLoginModalVisible: false,
      };
    },
    methods: {
      showLoginModal() {
        this.isLoginModalVisible = true;
      },
      closeLoginModal() {
        this.isLoginModalVisible = false;
      },
    },
    components: {
      LoginModal, // 컴포넌트 등록
    },
  };
  </script>
  


<style scoped lang="scss" >
@import '../assets/scss/common.scss';
</style>
  

