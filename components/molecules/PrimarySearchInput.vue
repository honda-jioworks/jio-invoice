<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <v-text-field :rules="nameRules" label="検索キー1" v-model="textPrimary" @input="scanPrimary"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';

@Component({})
export default class PrimarySearchInput extends Vue {
  nameRules: Array<object> = [(v: string) => !!v || '検索キーを入力してください。'];
  public textPrimary: string = '';
  @Emit()
  scanPrimary(): string {
    return this.textPrimary;
  }
}
</script>
