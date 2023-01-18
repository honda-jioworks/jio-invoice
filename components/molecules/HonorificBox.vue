<template>
  <v-container>
    <v-row>
      <v-col align-self="top" cols="3">
        <v-select :rules="serectRules" v-model="honorific" label="敬称"></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit, PropSync } from 'nuxt-property-decorator';
@Component({})
export default class HonorificBox extends Vue {
  @PropSync('valueManager', { type: String })
  honorific!: any;
  serectRules: Array<object> = [(v: string) => !!v || '項目を選択してください'];
}
</script>
