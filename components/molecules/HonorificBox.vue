<template>
  <v-container>
    <v-row>
      <v-col align-self="top" cols="3">
        <v-select :rules="serectRules" v-model="honorific" label="敬称" :items="keisyo_items"></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit, PropSync, Prop } from 'nuxt-property-decorator';
@Component({})
export default class HonorificBox extends Vue {
  @PropSync('value', { type: String })
  honorific!: any;
  serectRules: Array<object> = [(v: string) => !!v || '項目を選択してください'];
  @Prop()
  keisyo_items!: Array<string>;
}
</script>
