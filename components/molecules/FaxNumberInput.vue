<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-text-field :rules="nameRules" v-model="faxnumber" label="FAX" @input="getFaxnumber"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({})
export default class FaxNumberInput extends Vue {
  nameRules: Array<object> = [
    (v: string) => !!v || 'FAX番号を入力してください',
    (v: string) => /^0\d{1,3}-\d{2,4}-\d{3,4}$/.test(v) || 'ハイフンと数値を入力してください',
  ];
  faxnumber: string = '';

  @Emit()
  getFaxnumber() {
    return this.faxnumber;
  }
}
</script>
