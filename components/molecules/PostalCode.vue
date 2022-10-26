<template>
  <v-sheet>
    <v-row>
      <v-col cols="2"><PostalCodeLabel /></v-col>
      <v-col cols="1"><ThreeNumbersTextBox /></v-col>
      <v-col cols="1"><FourNumbersTextBox /></v-col>
      <v-col cols="1"><AddressSearch /></v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import PostalCodeLabel from '~/components/atoms/label/PostalCodeLabel.vue'
import ThreeNumbersTextBox from '~/components/atoms/input/ThreeNumbersTextBox.vue'
import FourNumbersTextBox from '~/components/atoms/input/FourNumbersTextBox.vue'
import AddressSearch from '~/components/atoms/button/AddressSearch.vue'
@Component({
  components: {
    PostalCodeLabel,
    ThreeNumbersTextBox,
    FourNumbersTextBox,
    AddressSearch,
  },
})
export default class DashBoard extends Vue {}
</script>