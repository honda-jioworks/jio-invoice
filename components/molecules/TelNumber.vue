<template>
  <v-sheet>
    <v-row dense>
      <v-col cols="2" class="wrap25"><TelLabel /></v-col>
      <v-col cols="4" class="wrap26"><ThreeNumbersTextBox :label="label" :rule="rule" :value.sync="telNumber" /></v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, PropSync } from 'nuxt-property-decorator';
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
export default class TelNumber extends Vue {
  @PropSync('telNumber_val', { type: String })
  telNumber!: string;

  label: string = '電話番号';

  rule: Array<object> = [
    (v: string) => !!v || '項目を入力してください',
    (v: string) => /^[+,-]?([0-9]\d*|0)$/.test(v) || '数値を入力してください',
    (v: string) => /^[+,-]?([0-9]{0,11})$/.test(v) || '11桁以内で入力してください',
  ];

  @Emit()
  sendTelNumberOne(val: string): string {
    return val;
  }
  @Emit()
  sendTelNumberTwo(val: string): string {
    return val;
  }
  @Emit()
  sendTelNumberThree(val: string): string {
    return val;
  }
}
</script>
<style lang="scss" scoped>
.wrap25 {
  margin-left: 65px;
  margin-right: 35px;
}
.wrap26 {
  margin-left: -18px;
}
</style>
