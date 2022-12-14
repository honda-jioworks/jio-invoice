<template>
  <v-sheet>
    <v-row>
      <FAXLabel />
      <v-col cols="2"><ThreeNumbersTextBox @get-postal-code-one="sendFaxNumberOne" /></v-col>
      <v-col cols="3"><FourNumbersTextBox @get-postal-code-two="sendFaxNumberTwo" /></v-col>
      <v-col cols="3"><FourNumbersTextBox @get-postal-code-two="sendFaxNumberThree" /></v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator';
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
  // データベースから受け取ったFAXの電話番号
  @Prop({ type: String })
  faxNumber!: string;
  // FAXの電話番号を3つに分割する
  private faxNumber1: string = this.faxNumber.substr(0, 2);
  private faxNumber2: string = this.faxNumber.substr(2, 4);
  private faxNumber3: string = this.faxNumber.substr(6, 4);

  @Emit()
  sendFaxNumberOne(val: string): string {
    return val;
  }
  @Emit()
  sendFaxNumberTwo(val: string): string {
    return val;
  }
  @Emit()
  sendFaxNumberThree(val: string): string {
    return val;
  }
}
</script>
