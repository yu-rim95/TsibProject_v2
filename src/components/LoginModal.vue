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
        <form>
          <div>
            <input type="text" id="username" v-model="username" required placeholder="사용자 아이디를 입력 해주세요">
          </div>
          <div>
            <input type="password" id="password" v-model="password" required placeholder="사용자 비밀번호를 입력 해주세요">
          </div>
          <div>
            <button class="login-btn" @click="login">로그인</button>
            <button class="join-btn" @click="joinMember">회원가입 | </button>
            <button class="findmember-btn" @click="findMember">회원정보 찾기</button>
          </div>
        </form>
      </div>
      <button class="close-btn" @click="closeModal">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: Boolean,
  },
  data(){
    return {
      username : "",
      password : ""
    }
  },
  methods: {
    login(){
      this.$axios.post('/memberLogin',{
        checkid: this.username,
        checkpw: this.password
      })
          .then(response => {
            if(response.data == "Y"){
              const userData = {
                checkid: this.username,
                loginpass: 'Y'
              };
              localStorage.setItem('userData', JSON.stringify(userData));
              location.reload();
            } else {
              alert("회원가입 정보가 다릅니다. 자바 확인해보세요")
            }
          })
          .catch(error => {
            console.error(error);
          });
    },
    joinMember(){
      if(this.username == '' || this.password == ''){
        alert("회원정보 입력해주세요")
      } else {
        this.$axios.post('/memberJoin',{
          checkid: this.username,
          checkpw: this.password
        })
            .then(response => {
              alert("회원가입이 완료됐습니다.")
            })
            .catch(error => {
              console.error(error);
            });
      }
    },
    findMember(){
      this.$axios.get('/memberFind')
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.error(error);
          });
    },
    closeModal() {
      this.$emit("close"); // 부모 컴포넌트에 이벤트를 발생시켜 모달 닫기
    },
  },
};
</script>

