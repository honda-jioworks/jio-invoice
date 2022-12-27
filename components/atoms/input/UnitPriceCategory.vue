<template>
  <v-row>
    <v-col cols="12"><label class="s2">単価区分:定価（上代）</label></v-col>
  </v-row>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({ components: {} })
export default class UnitPriceCategory extends Vue {}
</script>
<style lang="scss" scoped>
.s2 {
  font-size: 100%;
}
</style>
