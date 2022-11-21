<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="3">
        <v-text-field label="掛率：" :rules="inputRules" :value="rate" @change="getRate"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({})
export default class BettingRate extends Vue {
  inputRules: Array<object> = [
    (v: string) => !!v || '項目を入力してください',
    (v: string) => /^([1-9]\d*|0)$/.test(v) || '数値を入力してください',
    (v: string) => this.numberCheck(v),
  ];
  rate: string = '';

  @Emit()
  getRate(rate: string): any {
    return rate;
  }

  private numberCheck(value: string): any {
    return (value && value.length <= 3) || '3桁以内で入力してください';
  }
}
</script>
