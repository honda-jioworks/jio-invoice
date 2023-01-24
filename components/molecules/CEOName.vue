<template>
  <v-sheet>
    <v-row dense>
      <v-col cols="4">
        <CEONameLabel />
      </v-col>
      <v-col cols="6" class="wrap35"><CEONameTextBox :label="label" :rule="rule" :value.sync="CEOName" /></v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync } from 'nuxt-property-decorator';
import CEONameLabel from '~/components/atoms/label/CEONameLabel.vue';
import CEONameTextBox from '~/components/atoms/input/CEONameTextBox.vue';
@Component({ components: { CEONameTextBox, CEONameLabel } })
export default class CEOName extends Vue {
  @PropSync('CEOName_val', { type: String })
  CEOName!: string;

  label: string = '代表者名';

  rule: Array<object> = [(v: string) => !!v || '項目を入力してください'];
}
</script>
<style lang="scss" scoped>
.wrap35 {
  margin-left: -20px;
}
</style>
