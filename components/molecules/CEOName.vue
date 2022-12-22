<template>
  <v-sheet>
    <v-row dense>
      <v-col cols="4" class="wrap34"><CEONameLabel /></v-col>
      <v-col cols="6" class="wrap35"><CEONameTextBox @scan-name="scanName" /></v-col>
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
<style lang="scss" scoped>
.wrap34 {
  margin-left: 30px;
  margin-right: 10px;
}
.wrap35 {
  margin-left: -30px;
  margin-top: -10px;
}
</style>
