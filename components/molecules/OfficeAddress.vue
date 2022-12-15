<template>
  <v-sheet>
    <v-row class="d-none d-sm-none d-flex">
      <v-col cols="4"><AddressLabel /></v-col>
      <v-col cols="7"><AddressOne /></v-col>
    </v-row>
    <v-row class="d-none d-md-none d-sm-flex">
      <v-col cols="4"><AddressLabel /></v-col>
      <v-col cols="8"><AddressOne /></v-col>
    </v-row>
    <v-row class="hidden-sm-and-down">
      <v-col cols="2" class="hidden-sm-and-down"><AddressLabel /></v-col>
      <v-col cols="4" class="hidden-sm-and-down"><AddressOne /></v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import AddressLabel from '~/components/atoms/label/AddressLabel.vue';
import AddressOne from '~/components/atoms/input/AddressOne.vue';
@Component({
  components: {
    AddressLabel,
    AddressOne,
  },
})
export default class OfficeAddress extends Vue {}
</script>
<style lang="scss"></style>
