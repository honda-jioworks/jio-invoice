<template>
  <v-sheet>
    <v-row>
      <v-col cols="2"><TelLabel /></v-col>
      <v-col cols="1"><ThreeNumbersTextBox /></v-col>
      <v-col cols="1"><FourNumbersTextBox /></v-col>
      <v-col cols="1"><FourNumbersTextBox /></v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import TelLabel from '~/components/atoms/label/TelLabel.vue'
import ThreeNumbersTextBox from '~/components/atoms/input/ThreeNumbersTextBox.vue'
import FourNumbersTextBox from '~/components/atoms/input/FourNumbersTextBox.vue'
@Component({
  components: {
    TelLabel,
    ThreeNumbersTextBox,
    FourNumbersTextBox,
  },
})
export default class DashBoard extends Vue {}
</script>