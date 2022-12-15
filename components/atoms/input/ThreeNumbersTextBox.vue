<template>
  <v-text-field :value="postalCode1" @input="getPostalCodeOne" :counter="3" solo> </v-text-field>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class ThreeNumbersTextBox extends Vue {
  // データベースから受け取った郵便番号の前3桁
  @Prop({ type: String })
  postalCode1!: string;
  // データベースから受け取った電話番号の前3桁(2桁)
  @Prop({ type: String })
  telNumber1!: string;
  // 入力された郵便番号の前3桁をmoleculesに送る
  @Emit()
  getPostalCodeOne(val: string): string {
    return val;
  }
}
</script>
<style lang="scss" scoped>
.v-text-field {
  width: 75%;
}
</style>
