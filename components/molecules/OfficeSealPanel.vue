<template>
  <v-sheet>
    <v-container fluid>
      <v-row>
        <v-col cols="12"><OfficeSealHeader /> </v-col>
      </v-row>
      <v-row>
        <v-col cols="12"><OfficeSealTextBox /></v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

import OfficeSealTextBox from '../atoms/input/OfficeSealTextBox.vue';
import OfficeSealHeader from '../atoms/label/OfficeSealHeader.vue';
@Component({ components: { OfficeSealHeader, OfficeSealTextBox } })
export default class OfficeSealPanel extends Vue {}
</script>
