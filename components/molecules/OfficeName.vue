<template>
  <v-sheet>
    <v-row dense class="hidden-sm-and-up">
      <v-col cols="4"><OfficeNameLabel /></v-col>
      <v-col cols="6"><OfficeNameTextBox /></v-col>
    </v-row>
    <v-row dense class="d-none d-sm-flex d-md-none">
      <v-col cols="4"><OfficeNameLabel /></v-col>
      <v-col cols="5"><OfficeNameTextBox /></v-col>
    </v-row>
    <v-row dense class="hidden-sm-and-down">
      <v-col cols="4"><OfficeNameLabel /></v-col>
      <v-col cols="5"><OfficeNameTextBox /></v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import OfficeNameLabel from '~/components/atoms/label/OfficeNameLabel.vue';
import OfficeNameTextBox from '~/components/atoms/input/OfficeNameTextBox.vue';
@Component({ components: { OfficeNameTextBox, OfficeNameLabel } })
export default class OfficeName extends Vue {}
</script>
<style lang="scss"></style>
