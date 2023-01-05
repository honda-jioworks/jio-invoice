<template>
  <v-container>
    <v-row>
      <v-col class="d-flex">
        <v-text-field
          :rules="inputRules"
          label="開始残高"
          @input="sendStartingBalance"
          v-model="textVal"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({})
export default class StartingBalance extends Vue {
  textVal: string = '';
  inputRules: Array<object> = [
    (v: string) => !!v || '項目を入力してください',
    (v: string) => /^([1-9]\d*|0)$/.test(v) || '数値を入力してください',
  ];
  @Emit()
  sendStartingBalance() {
    return this.textVal;
  }
}
</script>
