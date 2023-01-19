<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-text-field :rules="nameRules" v-model="faxnumber" label="FAX"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit, PropSync } from 'nuxt-property-decorator';
@Component({})
export default class FaxNumberInput extends Vue {
  @PropSync('value', { type: String })
  faxnumber!: any;
  nameRules: Array<object> = [
    (v: string) => !!v || 'FAX番号を入力してください',
    (v: string) => /^0\d{1,3}-\d{2,4}-\d{3,4}$/.test(v) || 'ハイフンと数値を入力してください',
  ];
}
</script>
