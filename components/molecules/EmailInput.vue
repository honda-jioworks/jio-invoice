<template>
  <v-form>
    <v-row>
      <v-col cols="12" md="5">
        <v-text-field :rules="nameRules" label="担当者メール" v-model="email" @input="getEmail"></v-text-field>
      </v-col>
      <v-col>
        <v-btn large min-width="30" @click="sendEmail"> 送る </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>
<script lang="ts">
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator';

@Component({})
export default class EmailInput extends Vue {
  email: string = '';
  form: string = '';

  nameRules: Array<object> = [
    (v: string) => !!v || 'メールアドレスを入力してください',
    (v: string) =>
      /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/.test(v) ||
      '有効なメールアドレスを入力してください',
  ];

  @Emit()
  getEmail() {
    return this.email;
  }

  @Prop({ type: String, required: true })
  getClick!: string;

  @Emit()
  sendEmail() {
    return (this.form = this.getClick);
  }
}
</script>
