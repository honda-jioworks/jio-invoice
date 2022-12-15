<template>
  <v-sheet>
    <v-row dense class="d-none d-sm-none d-flex">
      <v-col cols="4"><AddressTwoLabel /></v-col>
      <v-col cols="7"><AddressTwo /></v-col>
    </v-row>
    <v-row class="d-none d-md-none d-sm-flex">
      <v-col cols="4"><AddressTwoLabel /></v-col>
      <v-col cols="8"><AddressTwo /></v-col>
    </v-row>
    <v-row class="hidden-sm-and-down">
      <v-col cols="2"><AddressTwoLabel /></v-col>
      <v-col cols="4"><AddressTwo /></v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import AddressTwoLabel from '~/components/atoms/label/AddressTwoLabel.vue';
import AddressTwo from '~/components/atoms/input/AddressTwo.vue';
@Component({
  components: {
    AddressTwoLabel,
    AddressTwo,
  },
})
export default class OfficeAddress extends Vue {}
</script>
<style lang="scss"></style>
