<template>
  <div>
    <v-col>
      <v-text-field label="支店名" :rules="textRules" v-model="textBranchname" @input="scanBranchname"></v-text-field>
    </v-col>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
import TextBox from '@/components/atoms/TextBox.vue';
@Component({ components: { TextBox } })
export default class BranchName extends Vue {
  private textRules: Array<Object> = [(v: any) => !!v || '項目を入力してください'];
  private textBranchname: string = '';
  @Emit()
  scanBranchname(): string {
    return this.textBranchname;
  }
}
</script>
