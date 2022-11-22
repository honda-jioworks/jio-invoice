<template>
  <v-container>
    <v-form>
      <v-row>
        <v-col cols="8" sm="8" lg="9">
          <v-text-field :rules="nameRules" label="担当者名"></v-text-field>
        </v-col>
        <v-col align-self="center" cols="4" sm="4" lg="3">
          <v-select :items="items" label="敬称" solo></v-select>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({})
export default class HonorificBox extends Vue {
  private nameRules: Array<object> = [(v: string) => !!v || '名前を入力してください'];
  private items: Array<string> = ['殿', '様', '御中'];
}
</script>
