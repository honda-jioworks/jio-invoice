<template>
  <v-row>
    <v-col>
      <v-text-field v-model="addressVal" outlined @input="changeAddress" label="＜住所＞"></v-text-field>
    </v-col>
    <v-col>
      <v-text-field v-model="addressVal" outlined @input="changeAddress" label="＜住所＞"></v-text-field>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator';
@Component({})
export default class AddressForm extends Vue {
  //住所をorganismsへ送る
  @Emit()
  changeAddress(val: string): string {
    return val;
  }

  //organismsから住所をPropで受け取る
  @Prop({ type: String })
  addressVal!: string;
}
</script>
<style lang="scss" scoped>
.v-text-field {
  margin-left: 4%;
  margin-right: 16%;
}
.b2 {
  margin-top: 2%;
}
</style>
