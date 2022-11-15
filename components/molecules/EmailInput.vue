<template>
  <v-form>
    <v-row>
      <v-col cols="12" md="5">
        <v-text-field :rules="nameRules" label="担当者メール："></v-text-field>
      </v-col>
      <v-btn large min-width="30"> 送る </v-btn>
    </v-row>
  </v-form>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({})
export default class EmailInput extends Vue {
  nameRules: Array<object> = [
    (v: string) => !!v || 'メールアドレスを入力してください',
    (v: string) =>
      /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/.test(v) ||
      '有効なメールアドレスを入力してください',
  ];
}
</script>
