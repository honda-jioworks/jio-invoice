<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <v-text-field
          :rules="inputRules"
          label="開始残高："
          @click:append="sendMessage"
          append-icon="mdi-alert-outline"
        ></v-text-field>
      </v-col>
      <!--changeBalanceは関数名-->
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
  message: string = '表示させました！';

  @Emit()
  sendMessage(message: string): string {
    return message;
  }
}
</script>
