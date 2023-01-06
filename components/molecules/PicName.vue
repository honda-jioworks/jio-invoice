<template>
  <v-row class="lll1">
    <v-subheader>担当者</v-subheader>
    <v-col cols="3">
      <v-select v-model="personName" outlined @input="scanPerson" :items="items" label="担当者"></v-select>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class PicName extends Vue {
  items: Array<string> = ['横田 龍介', '本夛 寛', '岩間良一', '立木 悠貴', '齋藤賢司', ''];
  personName: string = '';

  @Emit()
  scanPerson(): string {
    return this.personName;
  }
}
</script>
<style lang="scss" scoped>
.v-subheader {
  font-size: 71%;
  background-color: blue;
  color: white;
  margin-top: 1.5%;
  margin-left: 1%;
}
.lll1 {
  margin-left: 1%;
}
</style>
