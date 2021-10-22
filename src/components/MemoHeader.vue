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
          <v-img
            style="width: 49px; height: 49px"
            :src="require('@/img/More_icon_btn.svg')"
          />
        </button>
      </v-col>
    </v-row>
    <v-divider class="header-divider" style="background-color: #a5a4a5" />
  </v-card>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  font-size: 22px;
  font-weight: 500;
  color: #000;
  font-family: NotoSansKR;
}
</style>
