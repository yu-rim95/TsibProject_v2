<template>
    <Header/>
    <div class="stach">
        <div class="sh-wrap">
            <h1>임시글</h1>
            <div class="post">
                <ul>
                    <li>
                        <RouterLink to="/postdetail">
                            <div class="post-thum"><img src="../assets/imges/no-img.png" alt=""></div>
                            <div class="post-cont">
                                <p class="pt-tit">글제목</p>
                                <p class="pt-sub">글내용</p>
                            </div>
                            <div class="post-tag">
                                <!-- 태그는 최대 4개까지노출 -->
                                <p>#<span>Spring</span></p>
                            </div>
                        </RouterLink>    
                        <button class="del-btn">삭제</button>      
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
};
</script>
