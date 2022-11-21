<template>
  <v-container>
    <v-row >
      <v-col>
        <v-select :items="items" :rules="DepositRules" label="入金先"></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({})
export default class DepositAccount extends Vue {
  items: Array<string> = ['PayPay銀行アストロ支店', '三井住友銀行千代田支店', 'Fizz', 'Buzz'];
    DepositRules: Array<object> = [(v: string) => !!v || '項目を選択してください'];
};
</script>
