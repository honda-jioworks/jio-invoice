<template>
  <v-container>
    <v-row>
      <v-col class="d-flex">
        <v-text-field label="掛率" :rules="inputRules"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({})
export default class BettingRate extends Vue {
  inputRules: Array<object> = [
    (v: string) => !!v || '項目を入力してください',
    (v: string) => /^([1-9]\d*|0)$/.test(v) || '数値を入力してください',
    (v: string) => this.numberCheck(v),
  ];

  private numberCheck(value: string): any {
    return (value && value.length <= 3) || '3桁以内で入力してください';
  }
}
</script>
