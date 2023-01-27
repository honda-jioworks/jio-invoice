<template>
  <v-sheet>
    <v-row dense>
      <v-col cols="4" class="wrap21"><PostalCodeLabel /></v-col>
      <v-col cols="4" class="wrap22"
        ><ThreeNumbersTextBox :label="label" :rule="rule" :value.sync="postalCode"
      /></v-col>
      <v-col cols="1" class="wrap37"><AddressSearch :postalCode="postalCode" @send-address="sendAddress" /></v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop, PropSync } from 'nuxt-property-decorator';
import PostalCodeLabel from '~/components/atoms/label/PostalCodeLabel.vue';
import ThreeNumbersTextBox from '~/components/atoms/input/ThreeNumbersTextBox.vue';
import FourNumbersTextBox from '~/components/atoms/input/FourNumbersTextBox.vue';
import AddressSearch from '~/components/atoms/button/AddressSearch.vue';
@Component({
  components: {
    PostalCodeLabel,
    ThreeNumbersTextBox,
    FourNumbersTextBox,
    AddressSearch,
  },
})
export default class DashBoard extends Vue {
  public address: string = '';

  @PropSync('postalCode_val', { type: String })
  postalCode!: string;

  label: string = '郵便番号';

  rule: Array<object> = [
    (v: string) => !!v || '項目を入力してください',
    (v: string) => /^[+,-]?([0-9]\d*|0)$/.test(v) || '数値を入力してください',
    (v: string) => /^[+,-]?([0-9]{0,7})$/.test(v) || '7桁以内で入力してください',
  ];

  @Emit()
  sendAddress(val: string): void {
    this.address = val;
  }
  // 入力された郵便番号の前3桁をorganismsに送る
  @Emit()
  getPostalCodeOne(val: string): string {
    return val;
  }
  // 入力された郵便番号の後ろ4桁をorganismsに送る
  @Emit()
  getPostalCodeTwo(val: string): string {
    return val;
  }
}
</script>

<style lang="scss" scoped>
.wrap21 {
  margin-left: 35px;
}
.wrap22 {
  margin-left: -25px;
}
</style>
