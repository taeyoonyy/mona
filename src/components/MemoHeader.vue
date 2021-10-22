<template>
  <v-card flat>
    <v-row>
      <v-col cols="2"> <p class="title">#Test</p> </v-col>
      <v-col cols="2" class="ml-auto mb-4 pt-0" align="end">
        <button class="mx-1">
          <v-img
            style="width: 49px; height: 49px"
            :src="require('@/img/Add_icon_btn.svg')"
          />
        </button>
        <button class="mx-1">
          <img
            class="more-btn"
            :src="moreImg"
            @mouseover="moreImg = moreImgHover"
            @mouseleave="moreImg = moreImgLeave"
            @click="moreClick"
          />
        </button>
        <div v-if="isMore" class="more-dropdown" @mouseleave="isMore = false">
          <div class="deleteList">
            <button>
              <v-icon color="black" size="16" class="mx-1">mdi-delete</v-icon
              >삭제된 항목
            </button>
          </div>
          <div class="channelOut">
            <button>
              <v-icon color="black" size="16" class="mx-1"
                >mdi-exit-to-app</v-icon
              >채널 나가기
            </button>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-divider class="header-divider" style="background-color: #a5a4a5" />
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      isMore: false,
      moreImg: require('@/img/button/More_icon_btn.svg'),
      moreImgLeave: require('@/img/button/More_icon_btn.svg'),
      moreImgHover: require('@/img/button/More_icon_btn_p.svg')
    };
  },
  methods: {
    moreClick() {
      this.isMore = true;
      console.log('클릭');
    }
  }
};
</script>

<style scoped>
.title {
  font-size: 22px;
  font-weight: 500;
  color: #000;
  font-family: NotoSansKR;
}
.more-btn {
  border-radius: 50%;
  width: 49px;
  height: 49px;
}
.more-dropdown {
  right: 69px;
  position: fixed;
  z-index: 5;
  width: 154px;
  height: 133px;
  border: 1px solid black;
  border-radius: 2px;
}
.more-dropdown > div {
  display: flex;
  height: 65.5px;
  justify-content: center;
  background-color: white;
  color: black;
}
.more-dropdown > div:first-child {
  border-bottom: 1px solid black;
}

.more-dropdown > div:hover {
  background-color: #f5f5f5;
}
.more-dropdown > div:active {
  color: white;
  background-color: black;
}

.deleteList {
  display: flex;
  height: 65.5px;
  border-bottom: 1px solid black;
  justify-content: center;
  background-color: black;
  color: white;
}
.channelOut {
  display: flex;
  height: 65.5px;
  justify-content: center;
  background-color: white;
  color: black;
}
</style>
