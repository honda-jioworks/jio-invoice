<template>
  <v-container>
    <v-row>
      <v-col align-self="auto" cols="9">
        <v-text-field :rules="nameRules" @blur="input" v-model="manager" label="担当者名"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit, PropSync } from 'nuxt-property-decorator';
@Component({})
export default class ManagerBox extends Vue {
  @PropSync('value', { type: String })
  manager!: any;
  nameRules: Array<object> = [(v: string) => !!v || '名前を入力してください'];
  input() {
    this.$store.commit('company/set', { manager: this.manager });
  }
}
</script>
