<template>
  <v-container>
    <v-row>
      <v-col align-self="top" cols="9">
        <v-text-field :rules="nameRules" v-model="manager" label="担当者名"></v-text-field>
      </v-col>
      <v-col align-self="top" cols="3">
        <v-select :rules="serectRules" v-model="honorific" label="敬称" :items="keisyo_items"></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit, PropSync } from 'nuxt-property-decorator';
@Component({})
export default class ManagerBox extends Vue {
  @PropSync('valueManager', { type: String })
  keisyo_items!: Array<string>;
  manager!: any;
  honorific!: any;
  nameRules: Array<object> = [(v: string) => !!v || '名前を入力してください'];
  serectRules: Array<object> = [(v: string) => !!v || '項目を選択してください'];
  keisyo: Array<string> = ['殿', '様', '御中'];
}
</script>
