<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="5">
        <v-select :items="items" label="入金先"></v-select>
      </v-col>
      <v-col class="d-flex" cols="12" sm="5"> <TestButton @click="sendMessage" />{{ test }} </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import TestButton from '../atoms/TestButton.vue';
@Component({
  components: { TestButton },
})
export default class DepositAccount extends Vue {
  items: Array<string> = ['PayPay銀行アストロ支店', '三井住友銀行千代田支店', 'Fizz', 'Buzz'];
  test: string = '';
  sendMessage(message: string): void {
    this.test = message;
  }
}
</script>
