<template>
  <div class="box">
    <a-row type="flex" align="middle" justify="center">
      <a-col
        :xs="{ span: 0, offset: 0 }"
        :sm="{ span: 0, offset: 0 }"
        :lg="{ span: 0, offset: 0 }"
        :md="{ span: 0, offset: 0 }"
        :xl="{ span: 2, offset: 0 }"
        :xxl="{ span: 4, offset: 0 }"
      ></a-col>

      <a-col
        :xs="{ span: 24, offset: 0 }"
        :sm="{ span: 24, offset: 0 }"
        :lg="{ span: 24, offset: 0 }"
        :md="{ span: 24, offset: 0 }"
        :xl="{ span: 20, offset: 0 }"
        :xxl="{ span: 16, offset: 0 }"
      >
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide swiper-zoom-container">
              <img class="img" src="../../../public/imgs/pay_1.jpg" alt="" />
            </div>
            <div class="swiper-slide swiper-zoom-container">
              <img class="img" src="../../../public/imgs/pay_2.jpg" alt="" />
            </div>
            <div class="swiper-slide swiper-zoom-container">
              <img class="img" src="../../../public/imgs/pay_3.jpg" alt="" />
            </div>
          </div>
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div></div
      ></a-col>
      <a-col
        :xs="{ span: 0, offset: 0 }"
        :sm="{ span: 0, offset: 0 }"
        :lg="{ span: 0, offset: 0 }"
        :md="{ span: 0, offset: 0 }"
        :xl="{ span: 2, offset: 0 }"
        :xxl="{ span: 4, offset: 0 }"
      >
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { nextTick, onMounted, reactive, toRefs } from "vue";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import "swiper/dist/js/swiper.min";
export default {
  setup() {
    const state = reactive({
      count: 0,
    });
    onMounted(() => {
      nextTick(() => {
        init();
      });
    });
    const init = () => {
      new Swiper(".swiper-container", {
        loop: true,
        // 如果需要前进后退按钮
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        slidesPerView: 3,
        // width: window.innerWidth / 3,
        breakpoints: {
          //当宽度小于等于640
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        },
        effect: "coverflow",
        speed: 800,
        centeredSlides: true,
        loopAdditionalSlides: 3,
        setWrapperSize: true,
        coverflow: {
          rotate: 10,
          stretch: 50,
          depth: 150,
          modifier: 1,
          slideShadows: false,
        },
      });
    };
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
.box {
  margin-top: 120px;
}
.swiper-container {
  // width: 100%;
  padding: 10px 0;
  .swiper-wrapper {
    // display: flex;
    // align-items: center;
    // justify-content: center;
    .swiper-slide {
      box-shadow: 0 0px 5px rgba(0, 0, 0, 0.4);
      // height: 880px;
      .img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
