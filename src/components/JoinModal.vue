<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="480">
      <template v-slot:activator="{ on, attrs }">
        <button class="join-button" v-bind="attrs" v-on="on">
          채널 입장하기 / 생성하기
        </button>
      </template>

      <v-card height="384">
        <v-card-text class="message-card">
          <div class="message-text">공개 채널입니다.</div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <button class="confirm-button" @click="clickConfirm()">확인</button>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    clickConfirm() {
      this.dialog = false;
      this.$router.push({ name: 'memo' });
    }
  }
};
</script>

<style scoped>
.message-card {
  height: 264px;
  width: 480px;
  display: table-cell;
  vertical-align: middle;
}
.message-text {
  font-size: 24px;
  font-weight: bold;
  color: black;
  font-family: NotoSansKR;
  text-align: center;
}
.join-button {
  width: 480px;
  height: 88px;
  background-color: black;
  color: white;
  font-size: 26px;
  font-weight: 500;
}
.confirm-button {
  width: 448px;
  height: 88px;
  background-color: black;
  color: white;
  font-size: 26px;
  font-weight: 500;
}
</style>
