<template>
  <v-main>
    <v-container>
      <v-row style="margin-top: 160px">
        <v-col cols="12" align="center">
          <v-img
            style="width: 244px; height: 284px"
            :src="require('@/img/Logo_01@3x.webp')"
          />
        </v-col>
      </v-row>
      <v-row style="margin-top: 96px">
        <v-col cols="12" align="center">
          <p class="message">입장할 채널명이나 생성할 채널명을 적어주세요.</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" align="center" class="pb-2">
          <input
            class="channel"
            type="text"
            placeholder="채널명"
            v-model="channel"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" align="center" class="pt-2">
          <div v-if="this.channel == null" class="dummy"></div>
          <input
            v-else
            class="channel"
            type="text"
            placeholder="암호 (비공개인 경우)"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" align="center" class="pt-2">
          <join-modal></join-modal>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import JoinModal from '@/components/JoinModal.vue';
export default {
  components: {
    JoinModal
  },
  data() {
    return {
      channel: null,
      password: null
    };
  }
};
</script>

<style>
.message {
  font-size: 24px;
  color: #8b8b8b;
  font-family: NotoSansKR;
}
.channel {
  width: 480px;
  height: 88px;
  background-color: #e0e0e0;
  padding: 44px 26px;
  font-family: NotoSansKR;
  font-size: 24px;
  color: black;
}
.channel::placeholder {
  font-family: NotoSansKR;
  font-size: 24px;
  color: #a5a4a5;
}
.channel:focus {
  outline: solid 1px #4359ff;
  background-color: white;
  font-size: 23px;
  font-weight: 500;
  color: #4359ff;
  font-family: NotoSansKR;
}
.dummy {
  width: 480px;
  height: 88px;
  background-color: #e0e0e0;
}
</style>
