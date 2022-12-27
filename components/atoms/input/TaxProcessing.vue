<template>
  <v-row no-gutter>
    <lable class="w1">税処理:</lable>
    <v-text-field outlined></v-text-field
    ><!--v-select等に変更-->

    <v-btn class="mx-2" dark outlined large color="indigo">
      <v-icon dark> mdi-format-list-bulleted-square</v-icon>
    </v-btn>
  </v-row>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({ components: {} })
export default class TaxProcessing extends Vue {}
</script>
<style lang="scss" scoped>
.w1 {
  font-size: 95%;
  margin-right: 2%;
  margin-top: 4%;
  margin-left: 2%;
}
.mx-2 {
  margin-top: 1%;
}
</style>
