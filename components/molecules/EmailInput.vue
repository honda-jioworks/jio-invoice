<template>
  <v-container>
    <v-form>
      <v-row>
        <v-col cols="8" sm="9" md="9" lg="9" xl="9">
          <v-text-field :rules="nameRules" label="担当者メール"></v-text-field>
        </v-col>
        <v-spacer />
        <v-col cols="2" sm="2" md="2" lg="2" xl="2">
          <v-btn height="45" width="75" class="ml-n12">送る</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({})
export default class EmailInput extends Vue {
  nameRules: Array<object> = [
    (v: string) => !!v || 'メールアドレスを入力してください',
    (v: string) =>
      /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/.test(v) ||
      '有効なメールアドレスを入力してください',
  ];
}
</script>
