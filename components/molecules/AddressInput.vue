<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-text-field :rules="nameRules" label="住所：" :value="addressVal" @input="changeAddress"></v-text-field>
    </v-col>

    <v-btn large min-width="30"> 地図を表示 </v-btn>
  </v-row>
</template>
<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator';

@Component({})
export default class AddressInput extends Vue {
  nameRules: Array<object> = [(v: string) => !!v || '住所を入力してください'];

  @Prop({ type: String }) //organismsから住所をPropで受け取る
  addressVal!: string;

  @Emit()
  changeAddress(val: string): string {
    //住所をorganismsへ送る
    return val;
  }
}
</script>
