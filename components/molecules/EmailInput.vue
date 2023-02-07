<template>
  <v-container>
    <v-row>
      <v-col cols="9">
        <v-text-field :rules="nameRules" @blur="input" label="担当者メール" v-model="email"></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-btn> 送る </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop, PropSync } from 'nuxt-property-decorator';

@Component({})
export default class EmailInput extends Vue {
  form: string = '';

  nameRules: Array<object> = [
    (v: string) => !!v || 'メールアドレスを入力してください',
    (v: string) =>
      /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/.test(v) ||
      '有効なメールアドレスを入力してください',
  ];

  @PropSync('value', { type: String })
  email!: any;
  input() {
    this.$store.commit('company/set', { emailinput: this.email });
  }
}
</script>
