<template>
  <v-row>
    <v-col cols="2" class="a1">
      <v-text-field label="〒" outlined></v-text-field>
    </v-col>
    <v-btn class="d1">住所を検索</v-btn>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class AddressSearch extends Vue {}
</script>
<style lang="scss" scoped>
.a1 {
  margin-left: 2%;
  padding: auto, auto, auto, auto;
}
.b1 {
  margin-top: 2%;
}
.c1 {
  padding: auto, auto, auto, auto;
}
.d1 {
  padding: auto, auto, auto, auto;
  margin-top: 1%;
}
</style>
