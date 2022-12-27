<template>
  <v-row no-gutter>
    <lable class="w1">伝番:</lable>
    <v-text-field outlined></v-text-field>
  </v-row>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({ components: {} })
export default class SlipNumber extends Vue {}
</script>
<style lang="scss" scoped>
.w1 {
  font-size: 95%;
  margin-right: 2%;
  margin-top: 6%;
  margin-left: 2%;
}
.v-text-field {
  margin-right: 15%;
}
</style>
