<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="5">
        <v-select :items="items" label="入金先：" :rules="boxRules" @change="getAccount" return-object></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({})
export default class DepositAccount extends Vue {
  items: Array<string> = ['PayPay銀行アストロ支店', '三井住友銀行千代田支店', 'Fizz', 'Buzz'];
  boxRules: Array<object> = [(v: string) => !!v || '項目を選択してください'];
    @Emit()
  getAccount(account: string): string {
    return account;
  }
}
</script>
