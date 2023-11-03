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
            <label for="username">사용자 이름:</label>
            <input type="text" id="username" v-model="username" required>
          </div>
          <div>
            <label for="password">비밀번호:</label>
            <input type="password" id="password" v-model="password" required>
          </div>
          <button class="login-btn" @click="login">로그인 | </button>
          <button class="join-btn" @click="joinMember">회원가입 | </button>
          <button class="findmember-btn" @click="findMember">회원정보 찾기</button>
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
  data(){
    return {
      username : "",
      password : ""
    }
  },
  methods: {
    login(){
      const loginpass = localStorage.getItem("loginpass");
      const checkid = localStorage.getItem("username");
      const checkpw = localStorage.getItem("password");

      this.$axios.post('/memberLogin',{
        loginpass: loginpass,
        checkid: checkid,
        checkpw: checkpw
      }).then(response => {
            if(loginpass == "Y" || loginpass == ""){
              if(checkid == this.username && checkpw == this.password) {
                console.log("로그인 성공")
                localStorage.setItem("loginpass","Y")
                location.reload();
              } else {
                this.username = "";
                this.password = "";
                alert("비밀번호 혹은 아이디가 다릅니다.")
              }
            } else {
              alert("회원가입을 해주세요")
            }
          })
          .catch(error => {
            alert("자바 연결시에만 로그인 회원가입 가능")
            console.error(error);
          });
    },
    joinMember(){
      this.$axios.post('/memberJoin')
          .then(response => {
            if(this.username == "" || this.password == ""){
              alert("회원정보를 적어주세요.")
            } else {
              if(localStorage.getItem("loginpass") == "Y" || localStorage.getItem("loginpass") == "") {
                alert("두번 회원가입 안됩니다. 데이터 추가되면 수정예정")
              } else {
                localStorage.setItem("username",this.username);
                localStorage.setItem("password",this.password);
                localStorage.setItem("loginpass","Y");
                alert("회원가입이 완료됐습니다.")
                location.reload();
              }
            }
          })
          .catch(error => {
            // 요청 실패 시 처리
            alert("자바 연결시에만 로그인 회원가입 가능")
            console.error(error);
          });
    },
    findMember(){
      if(localStorage.getItem("loginpass") == "Y" || localStorage.getItem("loginpass") == "") alert(localStorage.getItem("username") + ":" +localStorage.getItem("password"))
      else alert("찾을정보가 없습니다. 회원가입 해주세요.")
    },
    closeModal() {
      this.$emit("close"); // 부모 컴포넌트에 이벤트를 발생시켜 모달 닫기
    },
  },
};
</script>

