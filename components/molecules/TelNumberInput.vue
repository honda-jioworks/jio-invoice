<template>
  <v-form>
    <v-row>
      <v-col cols="12" md="5">
        <v-text-field :rules="nameRules" v-model="telnumber" label="TEL" @input="getTelnumber"></v-text-field>
      </v-col>
    </v-row>
  </v-form>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({})
export default class TelNumberInput extends Vue {
  nameRules: Array<object> = [
    (v: string) => !!v || '電話番号を入力してください',
    (v: string) => /^0\d{1,3}-\d{2,4}-\d{3,4}$/.test(v) || 'ハイフンと数値を入力してください',
  ];
  telnumber: string = '';

  @Emit()
  getTelnumber() {
    return this.telnumber;
  }
}
</script>
