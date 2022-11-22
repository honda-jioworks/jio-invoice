<template>
  <v-container>
    <v-form>
      <v-row>
        <v-col>
          <v-text-field :rules="nameRules" label="担当者携帯"></v-text-field>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({})
export default class PhoneNumber extends Vue {
  nameRules: Array<object> = [
    (v: string) => !!v || '電話番号を入力してください',
    (v: string) => /^0\d{1,3}-\d{2,4}-\d{3,4}$/.test(v) || 'ハイフンと数値を入力してください',
  ];
}
</script>
