<template>
  <div>
    <v-col>
      <v-text-field label="支店名" :rules="textRules" v-model="textBranchname"></v-text-field>
    </v-col>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit, PropSync } from 'nuxt-property-decorator';
import TextBox from '@/components/atoms/TextBox.vue';
@Component({ components: { TextBox } })
export default class BranchName extends Vue {
  @PropSync('value', { type: String })
  textBranchname!: any;
  public textRules: Array<Object> = [(v: any) => !!v || '項目を入力してください'];
}
</script>
