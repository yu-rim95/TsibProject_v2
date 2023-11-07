<template>
  <Header/>
  <div class="home">
    <div class="home-wrap">
      <div class="post">
        <ul>
          <li v-on:click="ptCreate(ptList.ptSeq)" v-for="ptList in ptListData" :key="ptListData.ptSeq">
            <div class="post-thum"><img src="../assets/imges/no-img.png" alt=""></div>
            <div class="post-cont">
              <p class="pt-tit">{{ ptList.ptTitle }}</p>
              <p class="pt-sub">{{ ptList.ptSub }}</p>
            </div>
            <div class="post-tag">
              <!-- 태그는 최대 4개까지노출 -->
              <p>#<span>{{ ptList.ptTag }}</span></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header,
  },
  data() {
    const userData = localStorage.getItem("userData");
    return {
      username: userData ? JSON.parse(userData).checkid : "유저 정보 없음",
      ptListData:
          [
              // 자바단에서 더미데이터 만들어주는중
            // {ptSeq: 0, ptPhoto: "", ptTitle: "글제목", ptSub: "글내용", ptTag: "Spring"},
            // {ptSeq: 1, ptPhoto: "", ptTitle: "최초", ptSub: "더미 클릭해서", ptTag: "새로 만들기"}
          ],
    };
  },
  mounted() {
    this.homePage();
  },
  methods: {
    homePage(){
      this.$axios.get('/getHomePage')
          .then(response => {
            this.ptListData = response.data;
          })
          .catch(error => {
            console.error(error);
          });
    },
    ptCreate(Seq) {
      if(this.username == "유저 정보 없음") alert("로그인 해주세요")
      else  this.$router.push('/postdetail')

      // if (Seq == 0) {
      //   // 세부페이지로 들어가기
      //   this.$router.push('/postdetail')
      // } else {
      //   // 더미 만드는 영역
      //   this.ptListData.push({
      //     ptSeq: 1,
      //     ptPhoto: "",
      //     ptTitle: "최초!",
      //     ptSub: "더미 클릭해서",
      //     ptTag: "새로 만들기"
      //   })
      // }
    }
  }
};
</script>
