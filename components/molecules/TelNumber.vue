<template>
  <v-sheet>
    <v-row class="d-none d-xl-flex d-md-none" dense>
      <v-col cols="2" class="wrap25"><TelLabel /></v-col>
      <v-col cols="3" class="wrap26"
        ><ThreeNumbersTextBox :telNumber1="telNumber1" @get-postal-code-one="sendTelNumberOne"
      /></v-col>
      <v-col cols="3" class="wrap27"
        ><FourNumbersTextBox :telNumber2="telNumber2" @get-postal-code-two="sendTelNumberTwo"
      /></v-col>
      <v-col cols="3"><FourNumbersTextBox :telNumber3="telNumber3" @get-postal-code-two="sendTelNumberThree" /></v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator';
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
export default class DashBoard extends Vue {
  // データベースから受け取った電話番号
  @Prop({ type: String })
  telNumber!: string;
  // 電話番号を3つに分割する
  private telNumber1: string = this.telNumber.substr(0, 2);
  private telNumber2: string = this.telNumber.substr(2, 4);
  private telNumber3: string = this.telNumber.substr(6, 4);

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
  padding-left: 48px;
}
.wrap26 {
  margin-left: 26px;
}
</style>
