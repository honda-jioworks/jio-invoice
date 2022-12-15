<template>
  <v-sheet>
    <v-row class="d-none d-sm-none d-flex">
      <v-col cols="3"><TelLabel /></v-col>
      <v-col cols="3"><ThreeNumbersTextBox /></v-col>
      <v-col cols="3"><FourNumbersTextBox /></v-col>
      <v-col cols="3"><FourNumbersTextBox /></v-col>
    </v-row>
    <v-row class="d-none d-md-none d-sm-flex">
      <v-col cols="3"><TelLabel /></v-col>
      <v-col cols="3"><ThreeNumbersTextBox /></v-col>
      <v-col cols="3"><FourNumbersTextBox /></v-col>
      <v-col cols="3"><FourNumbersTextBox /></v-col>
    </v-row>
    <v-row class="hidden-sm-and-down">
      <v-col cols="3"><TelLabel /></v-col>
      <v-col cols="2"><ThreeNumbersTextBox /></v-col>
      <v-col cols="2"><FourNumbersTextBox /></v-col>
      <v-col cols="2"><FourNumbersTextBox /></v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import TelLabel from '~/components/atoms/label/TelLabel.vue';
import ThreeNumbersTextBox from '~/components/atoms/input/ThreeNumbersTextBox.vue';
import FourNumbersTextBox from '~/components/atoms/input/FourNumbersTextBox.vue';
@Component({
  components: {
    TelLabel,
    ThreeNumbersTextBox,
    FourNumbersTextBox,
  },
})
export default class DashBoard extends Vue {}
</script>
