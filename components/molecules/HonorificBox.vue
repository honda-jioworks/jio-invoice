<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="5">
        <v-text-field :rules="nameRules" label="担当者名："></v-text-field>
      </v-col>
      <v-col cols="1">
        <v-select :items="['殿', '様']" label="敬称" solo></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({})
export default class HonorificBox extends Vue {
  nameRules: Array<object> = [(v: string) => !!v || '名前を入力してください'];
}
</script>
