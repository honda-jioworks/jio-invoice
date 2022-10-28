<template>
  <v-sheet>
    <v-row>
      <v-col cols="2"><FAXLabel /></v-col>
      <v-col cols="1"><ThreeNumbersTextBox /></v-col>
      <v-col cols="1"><FourNumbersTextBox /></v-col>
      <v-col cols="1"><FourNumbersTextBox /></v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import FAXLabel from '~/components/atoms/label/FAXLabel.vue'
import ThreeNumbersTextBox from '~/components/atoms/input/ThreeNumbersTextBox.vue'
import FourNumbersTextBox from '~/components/atoms/input/FourNumbersTextBox.vue'
@Component({
  components: {
    FAXLabel,
    ThreeNumbersTextBox,
    FourNumbersTextBox,
  },
})
export default class NumberOfFax extends Vue {}
</script>