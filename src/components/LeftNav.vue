<template>
  <v-navigation-drawer app floating width="96" color="#f5f5f5">
    <v-row class="mt-2">
      <v-col align="center">
        <v-img
          style="width: 64px; height: 74px"
          :src="require('@/img/Logo_01@3x.webp')"
        />
      </v-col>
    </v-row>
    <template v-slot:append>
      <div class="mb-5 ml-4">
        <button>
          <v-img
            style="width: 64px; height: 40px"
            :src="require('@/img/Appdownload_btn@3x.webp')"
          />
        </button>
      </div>
    </template>
  </v-navigation-drawer>
</template>
