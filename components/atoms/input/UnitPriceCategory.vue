<template>
  <v-row class="dd1">
    <v-col cols="12" class="ee1"><label>単価区分:定価（上代）</label></v-col>
  </v-row>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({ components: {} })
export default class UnitPriceCategory extends Vue {}
</script>
<style lang="scss" scoped>
.dd1 {
  font-size: 90%;
}
.ee1 {
  margin-top: 4%;
}
</style>
