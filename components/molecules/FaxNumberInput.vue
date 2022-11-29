<template>
  <v-form>
    <v-row>
      <v-col cols="12" md="4">
        <v-text-field :rules="nameRules" label="FAX" @change="getFaxnumber"></v-text-field>
      </v-col>
    </v-row>
  </v-form>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({})
export default class FaxNumberInput extends Vue {
  nameRules: Array<object> = [
    (v: string) => !!v || 'FAX番号を入力してください',
    (v: string) => /^0\d{1,3}-\d{2,4}-\d{3,4}$/.test(v) || 'ハイフンと数値を入力してください',];
  faxnumber: string = "";

  @Emit()
    getFaxnumber(faxnumber: string): string{
      return faxnumber;
    }
}
</script>
