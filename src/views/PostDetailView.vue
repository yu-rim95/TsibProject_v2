
<template>
    <Header/>
    <div class="postdetail">
      <div class="pt-wrap">
        <div class="thumbnail"></div>
          <div class="pt-cont">
            <div class="pt-lg-btn">
                <button>수정</button>
                <button>삭제</button>
            </div>
            <h1>Clean Code</h1>
              <div className='pt-user'>
                  작성자: <span>yudidip</span>
                  <span>2023.09.20</span>
                </div>
            <p class="pt-post">우리는 평균적으로 코드를 작성하는 시간보다 코드를 읽고 해석하는데 많은 시간을 소비한다. 하물며, 자기 자신이 짠 소스 코드도 많은 분석시간이 필요하다. 그렇기 때문에 우리는 미래의 나를 믿지 말고 미래의 나까지도 쉽게 이해 시킬 수 있는 깨끗한 코드를 작성해야 한다. 그렇다면 깨끗한 코드는 무엇일까? 바로 "읽기가 쉬운 코드" 이다.</p>
            <RouterLink to="/" >목록으로 돌아가기</RouterLink>
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
