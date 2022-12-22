<template>
  <v-sheet>
    <v-row dense>
      <v-col cols="4" class="wrap21"><PostalCodeLabel /></v-col>
      <v-col cols="3" class="wrap22"
        ><ThreeNumbersTextBox :postalCode1="postalCode1" @get-postal-code-one="getPostalCodeOne"
      /></v-col>
      <v-col cols="3"><FourNumbersTextBox :postalCode2="postalCode2" @get-postal-code-two="getPostalCodeTwo" /></v-col>
      <v-col cols="1" class="wrap37"
        ><AddressSearch :postalCode1="postalCode1" :postalCode2="postalCode2" @send-address="sendAddress"
      /></v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator';
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
  private address: string = '';
  // 生成された住所情報をorganismsに送る
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

  // データベースから受け取った郵便番号の前3桁
  @Prop({ type: String })
  postalCode1!: string;

  // データベースから受け取った郵便番号の後ろ4桁
  @Prop({ type: String })
  postalCode2!: string;
}
</script>

<style lang="scss" scoped>
.wrap21 {
  margin-left: 35px;
}
.wrap22 {
  margin-left: -50px;
  margin-right: -30px;
}
.wrap37 {
  margin-left: -20px;
}
</style>
