<template>
  <v-row class="cc2">
    <v-col>
      <v-text-field outlined label="＜振込先2等＞"></v-text-field>
      <v-text-field outlined label="＜振込先2等＞"></v-text-field>
      <v-text-field outlined label="＜振込先2等＞"></v-text-field>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class AccountInformation extends Vue {}
</script>
<style lang="scss" scoped>
.cc2 {
  margin-left: 1%;
  margin-right: 33%;
}
</style>
