<template>
  <Header/>
  <div class="about">
    <section class="at-sec1">
      <div class="at-cont">
        <p class="at-tit">우리를 소개합니다</p>
        <p class="at-sub">평균 나이 29세 최고의 개발자를 꿈꾸는 우리들의 블로그에 오신 걸 환영합니다</p>
      </div>
    </section>

    <section class="at-sec2">
      <div class="at-cont">
        <p class="at-tit">우리 이야기</p>
        <p class="at-sub">한번 만들어보자 우리가 스스로 우리만의 블로그를 !</p>
      </div>

      <div class="at-about">
        <div class="ab-cont01">
          <div class="at-img">이미지</div>
          <p>최유림</p>
          <ul>
            <li>#개발자 최유림</li>
            <li>#JavaScript와JQuery중심으로 퍼블 과 프론트개발 모두 가능한 지원자</li>
            <li>#Java 연결& DB테이블생성</li>
          </ul>
        </div>
        <div class="ab-cont02">
          <div class="at-img">이미지</div>
          <p>이충재</p>
          <ul>
            <li>#개발자 이충재</li>
            <li>#JavaScript와 Angular,Vue 중심으로 Web 개발이 가능한 지원자</li>
            <li>#프론트 개발 & DB연결</li>
          </ul>
        </div>
        <div class="ab-cont03">
          <div class="at-img">이미지</div>
          <p>김영찬</p>
          <ul>
            <li>#막둥이</li>
            <li>#텍스트는301사이즈넘어가면안보임 영찬이는 귀여움 가능한 지원자</li>
            <li>#탈출</li>
          </ul>
        </div>
      </div>
 
    </section>

    <section class="at-sec3">
        <p class="at-tit">저희가 궁금하신가요?</p>
      <div class="at-profile">
        
        <div class="af-cont01">
          <p class="af-tit">발전하는 유디딥</p>
          <p class="af-sub">나  만29세 한다면 하는 개발자! 성공하는 개발자 입니다.</p>
          <a href='https://velog.io/@yudidip' target='_blank'>유디딥의 GitHub 바로가기</a>
        </div>
        <div class="af-cont02">
          <p class="af-tit">발전하는 유디딥</p>
          <p class="af-sub">나  만29세 한다면 하는 개발자! 성공하는 개발자 입니다.</p>
          <a href='https://velog.io/@yudidip' target='_blank'>유디딥의 GitHub 바로가기</a>
        </div>
        <div class="af-cont03">
          <p class="af-tit">발전하는 유디딥</p>
          <p class="af-sub">나  만29세 한다면 하는 개발자! 성공하는 개발자 입니다.</p>
          <a href='https://velog.io/@yudidip' target='_blank'>유디딥의 GitHub 바로가기</a>
        </div>
      </div>
    </section>
  </div>
</template>



<style scoped lang="scss">
@import '../assets/scss/common.scss';
</style>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>
