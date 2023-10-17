
<template>
    <Header/>
    <div class="mypage">
      <div class="mp-wrap">
        <p class="mp-user"><span>{{ $route.query.username }}</span> 게시글</p>
        <div>
          <div class="h-w-btn">
              <RouterLink to="/write">글작성</RouterLink>
          </div>
          <div class="h-w-btn">
            <RouterLink to="/stash">임시 저장 글</RouterLink>
          </div>
          <div class="post">
            <ul>
              <li>
                <RouterLink to="/postdetail">
                    <div class="post-thum"><img src="../assets/imges/main_img01.png" alt=""></div>
                    <div class="post-cont">
                      <p class="pt-tit">글제목</p>
                      <p class="pt-sub">글내용</p>
                    </div>
                    <div class="post-tag">
                      <!-- 태그는 최대 4개까지노출 -->
                      <p>#<span>Spring</span></p>
                    </div>
                </RouterLink>          
              </li>
            </ul>
          </div>
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
};
</script>
