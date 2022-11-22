<template>
  <v-container>
    <v-row>
      <span class="zipcode-mark"></span>
      <v-col cols="7" sm="10" md="10" lg="10" xl="10">
        <v-text-field :rules="nameRules" label="郵便番号"></v-text-field>
      </v-col>
      <v-col align-self="top" cols="5" sm="2" md="2" lg="2" xl="2">
        <v-btn id="search" class="ml-n2">住所を表示</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({})
export default class PostalCode extends Vue {
  nameRules: Array<object> = [
    (v: string) => !!v || '郵便番号を入力してください',
    (v: string) => /^[0-9]{3}-[0-9]{4}$/.test(v) || 'ハイフンと数値で入力してください',
  ];
}
</script>
