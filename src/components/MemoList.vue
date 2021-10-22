<template>
  <div class="aaa">
    <v-card flat style="height: 100%" :class="{ 'body-left': isRightCard }">
      <div
        class="list-body"
        v-for="memo of memos"
        :key="memo.title"
        @click="clickList"
      >
        <input type="checkbox" />
        <span class="list-title">{{ memo.title }}</span>
        <span class="list-time">{{ memo.time }}</span>
      </div>
      <div class="pagination-outer" :class="{ 'pagenation-left': isRightCard }">
        <div class="pagination-inner">
          <v-pagination v-model="page" :length="5"></v-pagination>
        </div>
      </div>
    </v-card>
    <v-card v-if="isRightCard" class="body-right" flat>
      <div class="header-buttons">
        <button class="edit">
          <v-icon color="black" size="16" class="mx-1">mdi-pencil</v-icon>
          수정하기
        </button>
        <button class="share">
          <v-icon color="black" size="16" class="mx-1">mdi-share-variant</v-icon
          >공유하기
        </button>
        <button class="delete">
          <v-icon color="black" size="16" class="mx-1">mdi-delete</v-icon
          >삭제하기
        </button>
      </div>
      <div class="right-card-top">
        <p class="title">ABC 확인 사항</p>
        <p class="date">2021년 3월 21일</p>
      </div>
      <div class="right-card-main">
        <p>ABC 확인 사항</p>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      isRightCard: false,
      selected: [],
      memos: [
        {
          title: '확인사항',
          time: '6분전'
        },
        {
          title: '맛집',
          time: '6분전'
        },
        {
          title: '맛집',
          time: '6분전'
        }
      ]
    };
  },
  computed: {
    emptyList() {
      return 12 - this.memos.length;
    }
  },
  methods: {
    clickList() {
      this.isRightCard = true;
    }
  }
};
</script>

<style scoped>
.aaa:after {
  content: '';
  display: table;
  clear: both;
}
.body-left,
.body-right {
  float: left;
  width: 50%;
}
.body-right {
  border-left: 8px solid #a5a4a5;
  border-radius: 0px;
  height: 850px;
}
.list-body {
  height: 76px;
  line-height: 76px;
  border-bottom: 1px solid #f5f5f5;
}
.list-body:hover {
  background: #f5f5f5;
}
.list-body > input {
  margin-left: 8px;
  margin-right: 24px;
}
.list-title {
  font-size: 14px;
  font-family: NotoSansKR;
  display: inline-block;
  width: calc(100% - 200px);
}
.pagenation-left {
  width: calc(50% - 100px) !important;
}
.list-time {
  font-size: 9px;
  font-family: NotoSansKR;
  color: #a5a4a5;
  display: inline-block;
  width: 100px;
  text-align: right;
}
.pagination-outer {
  position: fixed;
  bottom: 0;
  width: calc(100% - 96px - 64px);
  margin-bottom: 26px;
  text-align: center;
}
.pagination-inner {
  display: inline-block;
}

.header-buttons {
  border-radius: 3px !important;
  border: 1px solid black;
  height: 44px;
  margin: 16px;
}

.header-buttons > button {
  width: calc(100% / 3);
  height: 100%;
}
.header-buttons > .edit,
.share {
  border-right: 1px solid black;
}
button {
  font-size: 14px;
  font-weight: 550;
  color: #000;
  font-family: NotoSansKR;
}
button:hover {
  background: #f5f5f5;
}
.right-card-top {
  height: 151px;
  border-bottom: 1px solid #f5f5f5;
  padding-top: 41px;
  padding-left: 56px;
}
.right-card-main {
  margin-top: 57px;
  margin-left: 56px;
}
.right-card-main > p {
  font-size: 14px;
  font-family: NotoSansKR;
}
.title {
  margin-bottom: 0px;
  font-family: NotoSansKR;
  font-size: 22px;
  font-weight: 500;
}

.date {
  font-size: 14px;
  color: #949393;
  font-weight: 300;
  font-family: NotoSansKR-Thin;
}
</style>
