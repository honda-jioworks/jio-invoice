<template>
  <v-row>
    <v-col class="ddd1"> <v-text-field outlined label="TEL"></v-text-field></v-col>
    <v-col class="eee1"><v-text-field outlined label="FAX"></v-text-field></v-col>
    <v-col cols="4"></v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class NumberForm extends Vue {}
</script>
<style lang="scss" scoped>
.ddd1 {
  margin-left: 2%;
  margin-right: auto;
}
.eee1 {
  margin-left: auto;
  margin-right: 2%;
}
</style>
