<template>
  <v-row>
    <span class="zipcode-mark">〒</span>
    <v-col cols="12" md="4">
      <v-text-field :rules="nameRules" label="郵便番号："></v-text-field>
    </v-col>

    <v-btn large min-width="30" id="search"> 住所を表示 </v-btn>
  </v-row>
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
