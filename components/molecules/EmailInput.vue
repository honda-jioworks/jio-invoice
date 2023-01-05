<template>
  <v-container>
    <v-row>
      <v-col cols="9">
        <v-text-field :rules="nameRules" label="担当者メール" v-model="email" @input="getEmail"></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-btn @click="sendEmail"> 送る </v-btn>
      </v-col>
    </v-row>
  </v-container>
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
