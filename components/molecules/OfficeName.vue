<template>
  <v-sheet>
    <v-row>
      <OfficeNameLabel />
      <OfficeNameTextBox />
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
