
<style>
</style>
<script setup>
import { TransitionRoot } from '@headlessui/vue'
</script>

<template>
  <div
    class="flex justify-center flex-col items-center"
    style="background-color: rgb(245,248,255);"
  >
    <div class="view-container flex flex-col">
      <div class="flex-col lg:flex-row flex">
        <div
          class="flex flex-col lg:w-3/6 lg:pr-6 pt-28 pb-10 w-full pl-8 pr-8 flex-1 lg:flex-initial transi"
        >
          <TransitionRoot
            appear
            class="mb-7"
            :show="true"
            enter="duration-700  transition-all"
            enter-from="opacity-0 -translate-y-10"
            enter-to="opacity-100 -translate-y-0"
            leave="transition-opacity duration-150  transition-transform"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <span class="text-5xl font-extrabold" style="color: #1B243B;line-height: 115%;">
              探索最大的
              <br />
              <span style="color:#5B4F82;">NFT</span>市场
            </span>
          </TransitionRoot>
          <span
            class="font-extrabold text-gray-600 mb-8"
            style="line-height: 161.5%;"
          >一个在世界各地收集和连接NFT的新地方。它具有创意设计，主页选项，不同的探索和数字资产和项目。</span>
          <div class="mb-14">
            <button type="button" class="btn-medium">探索</button>
          </div>
          <div class="flex">
            <div class="flex flex-col flex-1">
              <span class="font-bold text-3xl mb-3 color-main" style="line-height:100%">
                32K
                <span class="text-2xl">+</span>
              </span>
              <span class="text-gray-600 text-base font-extrabold" style="line-height: 165%;">所有作品</span>
            </div>
            <div class="flex flex-col flex-1">
              <span class="font-bold text-3xl mb-3 color-main" style="line-height:100%">
                20K
                <span class="text-2xl">+</span>
              </span>
              <span class="text-gray-600 text-base font-extrabold" style="line-height: 165%;">创作者</span>
            </div>
            <div class="flex flex-col flex-1">
              <span class="font-bold text-3xl mb-3 color-main" style="line-height:100%">
                10K
                <span class="text-2xl">+</span>
              </span>
              <span class="text-gray-600 text-base font-extrabold" style="line-height: 165%;">市场作品</span>
            </div>
          </div>
        </div>
        <div class="lg:w-3/6 w-full pl-5 lg:pl-0">
          <swiper
            loop
            :autoplay="{ autoplay: true }"
            :slides-per-view="1"
            :space-between="50"
            :modules="modules_first"
            :pagination="{ clickable: true }"
            :breakpoints="{ 768: { slidesPerView: 1.5 } }"
          >
            <swiper-slide class="card-first-slide" v-for="icard in firstCardList">
              <div class="card-first">
                <div
                  class="card-first-container"
                  style="background-size: cover;"
                  :style="{ backgroundImage: 'url(' + icard.bg + ')' }"
                ></div>
                <div class="flex flex-col mt-10">
                  <div class="flex justify-between">
                    <span class="ml-8 text-xl font-bold" style="color: #5B4F82;">燃烧和融化</span>
                    <button
                      type="button"
                      class="btn-medium"
                      style="position: relative;left: 0.5rem"
                    >购买</button>
                  </div>
                  <div class="mt-2">
                    <div
                      class="ml-8 w-10 h-10"
                      style="background-color: #1B243B;border-radius: 50%;"
                    >
                      <img
                        src="/check_ring.png"
                        class="w-6 h-6"
                        style="position: relative;top:1.2rem;left: 1.5rem;"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <img src="wave.png" style="position: relative;left: -35%;" />
    </div>
    <div class="w-full bg-white flex justify-center">
      <div class="lg:w-8/12 flex flex-col bg-white w-11/12">
        <div class="flex flex-col pt-2 items-center">
          <span class="font-bold text-base color-main mb-3">NFT市场</span>
          <span class="font-semibold text-4xl mb-10" style="color: #1B243B;">一个收集和连接NFT的新地方。</span>
          <div class="flex mb-20">
            <button type="button" class="btn-medium">立即探索</button>
            <button type="button" class="btn-medium-outline ml-6">创建账户</button>
          </div>
          <div class="mt-2 flex pb-40 lg:w-10/12 lg:flex-row flex-col w-full">
            <TransitionRoot
              class="lg:w-3/6 w-full lg:h-auto lg:min-h-0"
              :show="true"
              enter="duration-700  transition-all"
              enter-from="opacity-0 -translate-y-10"
              enter-to="opacity-100 -translate-y-0"
              leave="transition-opacity duration-150  transition-transform"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div
                class="lg:w-full w-full h-2/3"
                style="min-height: 60vh;border-radius:0.625rem;background-size: cover;"
                :style="{ backgroundImage: 'url(' + cardBg + ')' }"
              ></div>
            </TransitionRoot>
            <div class="lg:w-3/6 pt-5 flex lg:pl-20 flex-col w-full pl-7">
              <swiper
                class="flex-1 w-full"
                :slides-per-view="1"
                :modules="modules_first"
                :navigation="{ nextEl: '.swiper-button-next-1', prevEl: '.swiper-button-prev-1' }"
                @slideChange="onSlideChange"
                loop
              >
                <swiper-slide v-for="icard in showCardList" class="card-first-slide">
                  <div class="flex flex-col mr-7">
                    <div class="flex items-center">
                      <img
                        style="border-radius: 50%;"
                        class="w-11 h-11 mr-6"
                        v-bind:src="icard.authorAvatar"
                      />
                      <span class="color-main text-lg font-bold">{{ icard.authorName }}</span>
                    </div>
                    <span class="mt-12 font-semibold text-3xl mb-4">{{ icard.name }}</span>
                    <span class="text-gray-600 font-medium text-base mb-4">10版铸造</span>
                    <div
                      class="flex flex-col pt-6 items-center mb-7"
                      style="border: gray solid 1px;border-radius: 1rem;"
                    >
                      <span class="text-lg font-medium color-main mb-4">铸造价格</span>
                      <span class="text-3xl font-semibold color-main mb-3">
                        {{ icard.price }}
                        <span class="text-lg">元</span>
                      </span>
                      <div class="w-10/12 bg-gray-400 mb-5" style="height: 1px;"></div>
                      <div class="flex flex-1 w-full pb-12">
                        <div class="flex flex-col flex-1 items-center">
                          <span
                            class="font-semibold text-2xl mb-3 color-main"
                            style="line-height:100%"
                          >{{ Math.floor(icard.tickSeconds / 3600) }}</span>
                          <span
                            class="text-gray-600 text-base font-medium color-main"
                            style="line-height: 165%;"
                          >小时</span>
                        </div>
                        <div class="flex flex-col flex-1 items-center">
                          <span
                            class="font-semibold text-2xl mb-3 color-main"
                            style="line-height:100%"
                          >{{ Math.floor((icard.tickSeconds - Math.floor(icard.tickSeconds / 3600) * 3600) / 60) }}</span>
                          <span
                            class="text-gray-600 text-base font-medium color-main"
                            style="line-height: 165%;"
                          >分钟</span>
                        </div>
                        <div class="flex flex-col flex-1 items-center">
                          <span
                            class="font-semibold text-2xl mb-3 color-main"
                            style="line-height:100%"
                          >{{ icard.tickSeconds % 60 }}</span>
                          <span
                            class="text-gray-600 text-base font-medium color-main"
                            style="line-height: 165%;"
                          >秒</span>
                        </div>
                      </div>
                    </div>
                    <button type="button" class="btn-medium">铸造</button>
                    <button type="button" class="btn-medium-outline mt-2">创建账户</button>
                  </div>
                </swiper-slide>
              </swiper>
              <div class="flex">
                <div class="swiper-button swiper-button-prev-1"></div>
                <!--左箭头。如果放置在swiper外面，需要自定义样式。-->
                <div class="swiper-button swiper-button-next-1"></div>
                <!--右箭头。如果放置在swiper外面，需要自定义样式。-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-full flex justify-center lg:flex-row flex-col"
      style="background-color: rgb(245,248,255);"
    >
      <div class="lg:w-4/12 flex flex-col pt-28 w-full pl-8 pr-8 lg:pl-0 lg:pr-0">
        <span class="font-bold text-base color-main mb-4">NFT收藏</span>
        <span class="font-semibold text-3xl mb-4">收集并连接NFT市场。</span>
        <span
          class="font-medium text-sm text-gray-600 mb-6"
          style="line-height: 165%;"
        >Business opportunities Are Like Buses,There‘s Always Another One Coming...Business opportunities Are Like Buses,There‘s Always Another One Coming...</span>
        <div>
          <button type="button" class="btn-medium-outline mt-2">创建账户</button>
        </div>
      </div>
      <div class="lg:w-3/12 flex flex-col pt-28 pb-28 w-full">
        <div class="flex justify-between lg:px-9 mb-12 px-16">
          <div class="flex flex-col items-center">
            <div class="card-logo">
              <img class="w-20" src="/Wavy_Check.png" />
            </div>
            <span class="color-main font-bold text-sm mt-3">权利证明</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="card-logo">
              <img class="w-20" src="/Select_Multiple.png" />
            </div>
            <span class="color-main font-bold text-sm mt-3">衍生权益</span>
          </div>
        </div>
        <div class="flex justify-between lg:px-9 mb-12 px-16">
          <div class="flex flex-col items-center">
            <div class="card-logo">
              <img class="w-20" src="/Book_check.png" />
            </div>
            <span class="color-main font-bold text-sm mt-3">收藏属性</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="card-logo">
              <img class="w-20" src="/Shuffle.png" />
            </div>
            <span class="color-main font-bold text-sm mt-3">流通价值</span>
          </div>
        </div>
      </div>
      <div class="w-1/12"></div>
    </div>
    <div class="w-full flex items-center bg-white flex-col">
      <div
        class="w-full sm:w-8/12 flex flex-col items-center pt-28 mb-20 pl-8 pr-8 lg:pl-0 lg:pr-0"
      >
        <span class="text-3xl font-semibold mb-4">关于产品和介绍相关文案区域</span>
        <span class="text-sm font-medium text-gray-500">做过的作品案例</span>
      </div>
      <div class="w-2/3 flex flex-col mb-20">
        <div class="flex mb-2 flex-row-reverse">
          <div class="swiper-button swiper-button-next-2"></div>
          <div class="swiper-button swiper-button-prev-2"></div>
        </div>
        <swiper
          class="flex-1 w-full px-8"
          :slides-per-view="1"
          :modules="modules_first"
          :navigation="{ nextEl: '.swiper-button-next-2', prevEl: '.swiper-button-prev-2' }"
          :breakpoints="{ 768: { slidesPerView: 4 } }"
          loop
        >
          <swiper-slide v-for="i in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]">
            <div class="card-exp">
              <div class="h-40" style="background-color: #F08080;"></div>
              <div class="flex-1 flex flex-col items-center px-5">
                <span class="font-bold text-base my-5" style="color: #265476;">https://chuoooo.com/</span>
                <span
                  class="font-medium text-sm color-main text-center"
                  style="line-height: 165%;"
                >这是一段介绍文案/新闻/文章报道/关于我们的作品</span>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="w-full flex items-center flex-col" style="background-color: rgb(245,248,255);">
      <div
        class="lg:w-8/12 w-11/12 flex lg:justify-between pt-28 mb-20 flex-col lg:flex-row items-center lg:items-baseline"
      >
        <div class="flex flex-col">
          <span class="text-3xl font-semibold mb-4">寻找最佳NFT</span>
          <span class="text-sm font-medium text-gray-500">在这里寻找和收藏你最爱的作品</span>
        </div>
        <div class="flex flex-col pt-6 lg:pt-0">
          <div class="flex-1"></div>
          <div>
            <button type="button" class="btn-medium">查看全部</button>
          </div>
        </div>
      </div>
      <div class="w-full sm:w-8/12 flex flex-col mb-20">
        <div class="flex">
          <div class="flex-1 flex justify-center flex-col">
            <div
              v-for="i in [0, 1]"
              class="flex-1 flex justify-center flex-col lg:flex-row items-center"
            >
              <div v-for="ii in nftList.slice(i*4,(i+1)*4)" class="card-best">
                <div class="h-80" style="border-radius: 10px;background-size: cover;" :style="{ backgroundImage: 'url(' + ii.card + ')' }" ></div>
                <div class="flex-1 flex flex-col px-5">
                  <span
                    class="font-bold text-base mt-3 mb-2"
                    style="color: #265476;"
                  >Community On Tour</span>
                  <span class="font-normal text-sm text-gray-500 mb-5">@imogee</span>
                  <span
                    class="font-medium text-sm color-main"
                    style="line-height: 165%;"
                  >Business opportunities Are Like Buses,There‘s Always Another One Coming...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex"></div>
      </div>
    </div>
    <div class="w-full flex items-center flex-col bg-white">
      <div
        class="lg:w-7/12 w-11/12 flex justify-between pt-28 mb-20 px-12 flex-col-reverse lg:flex-row"
      >
        <div class="flex flex-col lg:w-6/12 pr-0 w-full lg:pr-10">
          <span class="text-3xl font-semibold text-center mb-16">关于我们的相关介绍/未来</span>
          <span
            class="text-base font-medium text-gray-500"
            style="line-height:157.5%"
          >Business opportunities Are Like Buses,There‘s Always Another One Coming...Business opportunities Are Like Buses,There‘s Always Another One Coming...Business opportunities Are Like Buses,There‘s Always Another One Coming...Business opportunities Are Like Buses,There‘s Always Another One Coming...Business opportunities Are Like Buses,There‘s Always Another One Coming...Business opportunities Are Like Buses,There‘s Always Another One Coming...</span>
        </div>
        <div class="flex-1">
          <img style="width: 100%;" src="/future.png" />
        </div>
      </div>
    </div>
    <div class="w-full flex items-center flex-col" style="background-color: rgb(245,248,255);">
      <div class="w-full sm:w-7/12 flex justify-center pt-28 mb-20 px-12">
        <div class="flex flex-col">
          <span class="font-semibold text-3xl mb-16">合作伙伴</span>
          <div class="flex lg:flex-row flex-col">
            <div class="flex-1 ml-4 mr-4 lg:mt-0 lg:mb-0 mt-4 mb-4"><img style="width: 100%;height: auto;" src="/logos/1.jpg" /></div>
            <div class="flex-1 ml-4 mr-4 lg:mt-0 lg:mb-0 mt-4 mb-4"><img style="width: 100%;height: auto;" src="/logos/2.jpg" /></div>
            <div class="flex-1 ml-4 mr-4 lg:mt-0 lg:mb-0 mt-4 mb-4"><img style="width: 100%;height: auto;" src="/logos/3.jpg" /></div>
            <div class="flex-1 ml-4 mr-4 lg:mt-0 lg:mb-0 mt-4 mb-4"><img style="width: 100%;height: auto;" src="/logos/4.jpg" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import bg from "@/assests/mesh-gradient-1.png";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
  },
  data() {
    return {
      bg: bg,
      modules_first: [Pagination],
      cardBg: '/nfts/62049292_p0.jpg',
      firstCardList: [
        {
          bg: '/nfts/62049292_p0.jpg'
        },
        {
          bg: '/nfts/69257712_p0.jpg'
        },
        {
          bg: '/nfts/77943967_p0.jpg'
        },
        {
          bg: '/nfts/77943967_p2.jpg'
        }
      ],
      showCardList: [
        {
          name: '大地之子1',
          authorName: '莫文进你',
          authorAvatar: '/nfts/96036280_p0.jpg',
          price: '9.9',
          tickSeconds: 998,
          card:'/nfts/95359249_p0.jpg'
        },
        {
          name: '大地之子2',
          authorName: '莫文进你',
          authorAvatar: '/nfts/95359312_p0.jpg',
          price: '9.9',
          tickSeconds: 998,
          card:'/nfts/96036257_p0.jpg'
        },
        {
          name: '大地之子3',
          authorName: '莫文进你',
          authorAvatar: '/nfts/95359312_p0.jpg',
          price: '9.9',
          tickSeconds: 998,
          card:'/nfts/93944724_p1.jpg'
        }
      ],
      nftList: [
        {
          name: '大地之子1',
          authorName: '莫文进你',
          brief: '/nfts/96036280_p0.jpg',
          card:'/nfts/95359249_p0.jpg'
        },
        {
          name: '大地之子1',
          authorName: '莫文进你',
          brief: '/nfts/96036280_p0.jpg',
          card:'/nfts/95359249_p0.jpg'
        },
        {
          name: '大地之子1',
          authorName: '莫文进你',
          brief: '/nfts/96036280_p0.jpg',
          card:'/nfts/95359249_p0.jpg'
        },
        {
          name: '大地之子1',
          authorName: '莫文进你',
          brief: '/nfts/96036280_p0.jpg',
          card:'/nfts/95359249_p0.jpg'
        },
        {
          name: '大地之子1',
          authorName: '莫文进你',
          brief: '/nfts/96036280_p0.jpg',
          card:'/nfts/95359249_p0.jpg'
        },
        {
          name: '大地之子1',
          authorName: '莫文进你',
          brief: '/nfts/96036280_p0.jpg',
          card:'/nfts/95359249_p0.jpg'
        },
        {
          name: '大地之子1',
          authorName: '莫文进你',
          brief: '/nfts/96036280_p0.jpg',
          card:'/nfts/95359249_p0.jpg'
        },
        {
          name: '大地之子1',
          authorName: '莫文进你',
          brief: '/nfts/96036280_p0.jpg',
          card:'/nfts/95359249_p0.jpg'
        }
      ]
    };
  },
  methods: {
    onSlideChange(s) {
      this.cardBg = this.showCardList[(s.activeIndex % this.showCardList.length - 1)].card;
    }
  },
  mounted(){
        setInterval(()=>{
      console.log(1);
      if(this.showCardList){
        for(let i of this.showCardList){
          i.tickSeconds = i.tickSeconds -1;
        }
      }
    },1000);
  }
};
</script>
<style scoped>
.swiper-button {
  width: 40px;
  height: 40px;
  z-index: 10;
  background-size: 20px 20px;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px;
  border: 2px solid rgba(107, 110, 111, 0.5);
  margin-right: 1rem;
}
.swiper-button-prev-1 {
  background-image: url("./left-arrow.png");
}
.swiper-button-next-1 {
  background-image: url("./right-arrows.png");
}
.swiper-button-prev-2 {
  background-image: url("./left-arrow.png");
}
.swiper-button-next-2 {
  background-image: url("./right-arrows.png");
}
</style>