<template>
    <header>
      <nav>
        <h1>블로그 만드는 블로그</h1>
        <div>
            <ul>
                <li><RouterLink to="/">메인</RouterLink></li>
                <li><RouterLink to="/about">제작자</RouterLink></li>
                <li v-show="loginpass != '' && loginpass != null" @click="logout"><a>로그아웃</a></li>
                <li v-show="loginpass == '' || loginpass == null"><a @click="showLoginModal" :class="{ 'active': isLoginActive }">로그인</a></li>
                <li v-show="loginpass != '' && loginpass != null"><RouterLink :to="{ name: 'mypage', query: { username } }">마이 페이지</RouterLink></li>
            </ul>
          <div v-show="loginpass != '' && loginpass != null" class="h-profile"><span>{{ username }}</span>님 반가워요!</div>
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
        loginpass : localStorage.getItem("loginpass") != ''? localStorage.getItem("loginpass"):'',
        username : localStorage.getItem("username") != ''? localStorage.getItem("username"):'',
        isLoginModalVisible: false,
      };
    },
    methods: {
      logout(){
        this.loginpass = '';
        localStorage.setItem("loginpass","")
        // localStorage.clear();
        this.$router.push('/')
      },
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
  

