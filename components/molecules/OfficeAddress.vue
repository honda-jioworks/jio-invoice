<template>
  <v-sheet>
    <v-row>
      <v-col cols="2"><AddressLabel /></v-col>
      <v-col cols="5"><AddressOne /></v-col>
      <v-col cols="1"><ShowMap /></v-col>
    </v-row>
    <v-row>
      <v-col cols="2"><AddressTwoLabel /></v-col>
      <v-col cols="5"><AddressTwo /></v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import AddressLabel from '~/components/atoms/label/AddressLabel.vue'
import AddressOne from '~/components/atoms/input/AddressOne.vue'
import ShowMap from '~/components/atoms/button/ShowMap.vue'
import AddressTwoLabel from '~/components/atoms/label/AddressTwoLabel.vue'
import AddressTwo from '~/components/atoms/input/AddressTwo.vue'
@Component({
  components: {
    AddressLabel,
    AddressOne,
    ShowMap,
    AddressTwoLabel,
    AddressTwo,
  },
})
export default class OfficeAddress extends Vue {}
</script>