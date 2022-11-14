<template>
  <div>
    <v-select :rules="selectRules" :items="contents" outlined></v-select>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
@Component({})
export default class TextBox extends Vue {
  @Prop({ type: Array })
  contents!: string;
  private selectRules: Array<Object> = [(v: any) => !!v || '項目を選択してください'];
}
</script>
