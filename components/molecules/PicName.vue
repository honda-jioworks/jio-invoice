<template>
  <v-row class="lll1">
    <v-subheader>担当者</v-subheader>
    <v-col cols="3">
      <v-select :items="items" outlined label="担当者"></v-select>
    </v-col>
    <v-btn class="cdw">口座情報の変更</v-btn>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class PicName extends Vue {
  items: Array<string> = ['横田 龍介', '本夛 寛', '岩間良一', '立木 悠貴', '齋藤賢司', ''];
}
</script>
<style lang="scss" scoped>
.v-subheader {
  font-size: 71%;
  background-color: blue;
  color: white;
  margin-top: 1%;
  margin-left: 1%;
}
.lll1 {
  margin-left: 1%;
}
.cdw {
  margin-top: 1%;
}
</style>
