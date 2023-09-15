<template>
  <div  class="modal" v-if="isVisible">
    <div class="modal-content">
      <!-- 모달 내용 -->
      <h2>로그인</h2>
      <div class="modal-wrap">
        <div class="modal-tit">
          <img src="../assets/imges/login_img01.png" alt="">
          <p>안녕하세요 블로그만드는 블로그에 오신걸 환영합니다</p>
        </div>

        <!-- 로그인 양식 -->
        <form @submit.prevent="login">
          <div>
            <label for="username">사용자 이름:</label>
            <input type="text" id="username" v-model="username" required>
          </div>
          <div>
            <label for="password">비밀번호:</label>
            <input type="password" id="password" v-model="password" required>
          </div>
          <button class="login-btn" type="submit">로그인</button>
        </form>
      </div>
      <button class="close-btn" @click="closeModal">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: Boolean, // 모달의 가시성 상태를 받아올 prop
  },
  methods: {
    closeModal() {
      this.$emit("close"); // 부모 컴포넌트에 이벤트를 발생시켜 모달 닫기
    },
  },
};
</script>

