<template>
  <v-text-field :rules="textRules" outlined></v-text-field>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({})
export default class TextBox extends Vue {
  private textRules: Array<Object> = [(v: any) => !!v || '項目を入力してください'];
}
</script>
