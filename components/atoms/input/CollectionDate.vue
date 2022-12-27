<template>
  <v-row no-gutter>
    <lable class="w1">回収日:</lable>
    <v-text-field outlined></v-text-field
    ><!--v-select等に変更-->
  </v-row>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({ components: {} })
export default class CollectionDate extends Vue {}
</script>
<style lang="scss" scoped>
.w1 {
  font-size: 95%;
  margin-right: 2%;
  margin-top: 4%;
  margin-left: 2%;
}
.v-text-field {
  margin-right: 20%;
}
</style>
