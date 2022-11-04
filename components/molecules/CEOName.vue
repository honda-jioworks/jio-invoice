<template>
  <v-sheet>
    <v-row>
      <CEONameLabel />
      <CEONameTextBox @scan-name="scanName" />
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import CEONameLabel from '~/components/atoms/label/CEONameLabel.vue';
import CEONameTextBox from '~/components/atoms/input/CEONameTextBox.vue';
@Component({ components: { CEONameTextBox, CEONameLabel } })
export default class CEOName extends Vue {
  private name: string = '';

  scanName(val: string): void {
    this.name = val;
  }
}
</script>
