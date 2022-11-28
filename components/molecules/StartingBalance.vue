<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <v-text-field label="開始残高" :rules="inputRules" v-model="balance" @input="getBalance"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({})
export default class StartingBalance extends Vue {
  inputRules: Array<object> = [
    (v: string) => !!v || '項目を入力してください',
    (v: string) => /^([1-9]\d*|0)$/.test(v) || '数値を入力してください',
  ];
  balance: string = '';

  @Emit()
  getBalance(balance: string): string {
    return this.balance;
  }
}
</script>
