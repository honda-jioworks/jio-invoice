<template>
  <v-sheet>
    <v-row dense class="hidden-sm-and-up">
      <v-col cols="4"><CEONameLabel /></v-col>
      <v-col cols="6"><CEONameTextBox @scan-name="scanName" /></v-col>
    </v-row>
    <v-row dense class="d-none d-sm-flex d-md-none">
      <v-col cols="4"><CEONameLabel /></v-col>
      <v-col cols="5"><CEONameTextBox @scan-name="scanName" /></v-col>
    </v-row>
    <v-row dense class="hidden-sm-and-down">
      <v-col cols="4"><CEONameLabel /></v-col>
      <v-col cols="5"><CEONameTextBox @scan-name="scanName" /></v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import CEONameLabel from '~/components/atoms/label/CEONameLabel.vue';
import CEONameTextBox from '~/components/atoms/input/CEONameTextBox.vue';
@Component({ components: { CEONameTextBox, CEONameLabel } })
export default class CEOName extends Vue {
  private name: string = '';

  @Prop({ type: String })
  CEOName!: string;

  scanName(val: string): void {
    this.name = val;
  }
}
</script>
