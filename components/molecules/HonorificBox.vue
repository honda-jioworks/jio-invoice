<template>
  <v-container>
    <v-row>
      <v-col align-self="auto" cols="3">
        <v-select :rules="serectRules" @blur="input" v-model="honorific" label="敬称" :items="keisyo_items"></v-select>
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
  input() {
    this.$store.commit('customer/set', { honorific: this.honorific });
  }
}
</script>
