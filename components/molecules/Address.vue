<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-text-field :rules="nameRules" label="住所"></v-text-field>
    </v-col>

    <v-btn large min-width="30"> 地図を表示 </v-btn>
  </v-row>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({})
export default class Address extends Vue {
  nameRules: Array<object> = [(v: string) => !!v || '住所を入力してください'];
}
</script>
