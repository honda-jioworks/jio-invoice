<template>
  <v-row no-gutter>
    <lable class="w1">入金先:</lable>
    <v-text-field outlined value="現金"></v-text-field
    ><!--v-select等に変更-->

    <v-btn class="mx-2" dark outlined large color="indigo">
      <v-icon dark> mdi-plus </v-icon>
    </v-btn>
  </v-row>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({ components: {} })
export default class PaymentDestination extends Vue {}
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
