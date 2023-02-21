<template>
  <v-container>
    <v-row>
      <v-col cols="10">
        <v-text-field :rules="nameRules" label="住所" v-model="addressVal" @input="changeAddress"></v-text-field>
      </v-col>
      <v-col align-self="top" cols="2">
        <v-btn @click="showMaptest"> 地図を表示 </v-btn>
      </v-col>
    </v-row>
  </v-container>
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
  @Emit()
  showMaptest() {
    window.open('https://www.google.com/maps/search/〒' + this.addressVal + '/', 'subwin', 'width=750,height=750');
  }
}
</script>
