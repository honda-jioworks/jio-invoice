<template>
  <v-row no-gutter>
    <v-col cols="12">
      <v-select class="ww1" dense outlined clearable :items="items" :rules="rules">
        <template v-slot:label>発行<span style="color: red"> *</span></template></v-select
      ></v-col
    ><!--v-select等に変更-->
  </v-row>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({ components: {} })
export default class Issuance extends Vue {
  rules: Array<object> = [(v: any) => !!v || '選択してください'];
  items: Array<string> = ['発行', '非発行'];
}
</script>
<style lang="scss" scoped>
.ww1 {
  margin-right: 10%;
  margin-left: 2%;
}
</style>
