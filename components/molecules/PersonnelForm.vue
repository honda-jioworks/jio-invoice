<template>
  <v-row>
    <v-col class="aa1">
      <v-text-field outlined label="役職"></v-text-field>
    </v-col>
    <v-col class="bb1">
      <v-text-field outlined label="担当者"></v-text-field>
    </v-col>
    <v-col cols="4" class="cc1">
      <v-select :items="items" outlined label="敬称"></v-select>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class PersonnelForm extends Vue {
  items: Array<string> = ['様', '殿', '御中'];
}
</script>
<style lang="scss">
.aa1 {
  margin-left: 2%;
}
.cc1 {
  margin-right: 2%;
}
</style>
