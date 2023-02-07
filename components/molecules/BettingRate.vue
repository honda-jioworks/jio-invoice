<template>
  <v-container>
    <v-row>
      <v-col class="d-flex">
        <v-text-field label="掛率" @blur="input" :rules="inputRules" v-model="textName"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit, PropSync } from 'nuxt-property-decorator';
@Component({})
export default class BettingRate extends Vue {
  @PropSync('value', { type: String })
  textName!: any;
  inputRules: Array<object> = [
    (v: string) => !!v || '項目を入力してください',
    (v: string) => /^([1-9]\d*|0)$/.test(v) || '数値を入力してください',
    (v: string) => this.numberCheck(v),
  ];
  private numberCheck(value: string): any {
    return (value && value.length <= 3) || '3桁以内で入力してください';
  }
  input() {
    this.$store.commit('company/set', { betting: this.textName });
  }
}
</script>
