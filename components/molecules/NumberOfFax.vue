<template>
  <v-sheet>
    <v-row dense>
      <v-col cols="2" class="wrap28 {"><FAXLabel /></v-col>
      <v-col cols="3" class="wrap29"><ThreeNumbersTextBox :label="label" :rule="rule" :value.sync="faxNumber" /></v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, PropSync } from 'nuxt-property-decorator';
import FAXLabel from '~/components/atoms/label/FAXLabel.vue';
import ThreeNumbersTextBox from '~/components/atoms/input/ThreeNumbersTextBox.vue';
import FourNumbersTextBox from '~/components/atoms/input/FourNumbersTextBox.vue';
@Component({
  components: {
    FAXLabel,
    ThreeNumbersTextBox,
    FourNumbersTextBox,
  },
})
export default class NumberOfFax extends Vue {
  @PropSync('faxNumber_val', { type: String })
  faxNumber!: string;

  label: string = 'FAX';

  rule: Array<object> = [
    (v: string) => !!v || '項目を入力してください',
    (v: string) => /^[+,-]?([0-9]\d*|0)$/.test(v) || '数値を入力してください',
    (v: string) => /^[+,-]?([0-9]{0,11})$/.test(v) || '11桁以内で入力してください',
  ];
}
</script>
<style lang="scss" scoped>
.wrap28 {
  margin-left: -30px;
  margin-right: 35px;
}
.wrap29 {
  margin-left: -25px;
}
</style>
