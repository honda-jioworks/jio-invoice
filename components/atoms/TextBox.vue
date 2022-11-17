<template>
  <v-text-field :placeholder="name" :rules="textRules" outlined></v-text-field>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
@Component({})
export default class TextBox extends Vue {
  private name: string = '';
  private textRules: Array<Object> = [(v: any) => !!v || '項目を入力してください'];

  @Prop({ type: String })
  label!: string;

  created(): void {
    this.name = this.label;
  }
}
</script>
