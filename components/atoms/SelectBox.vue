<template>
  <div>
    <v-select label="預金区分" :rules="selectRules" :items="contents"></v-select>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
@Component({})
export default class TextBox extends Vue {
  @Prop({ type: Array })
  contents!: string;
  public selectRules: Array<Object> = [(v: any) => !!v || '項目を選択してください'];
}
</script>
