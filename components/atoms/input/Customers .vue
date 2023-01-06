<template>
  <v-row dense class="ww2">
    <v-col cols="8" class="ww1">
      <v-select dense outlined clearable :items="items" :rules="rules">
        <template v-slot:label>得意先<span style="color: red"> *</span></template>
      </v-select>
    </v-col>
    <!--v-select等に変更-->
    <v-btn class="mx-2" dark outlined height="40" large color="indigo">
      <v-icon dark> mdi-plus </v-icon>
    </v-btn>
  </v-row>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({ components: {} })
export default class Customers extends Vue {
  private items: Array<Object> = [{ text: 'TDCソフトウェア' }];
  rules: Array<object> = [(v: any) => !!v || '選択してください'];
}
</script>
<style lang="scss" scoped>
.ww1 {
  margin-left: 2%;
}
.mx-2 {
  margin-top: 1%;
}
.ww2 {
  margin-right: auto;
  padding: auto;
}
</style>
