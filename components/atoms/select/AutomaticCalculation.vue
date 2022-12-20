<template>
  <v-select :items="items" outlined :rules="rules" v-model="selectContents" @change="scanSelect"></v-select>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({
  components: {},
})
export default class AutomaticCalculation extends Vue {
  public selectContents: string = '';
  public items: Array<string> = ['自動', '軽減自動', 'しない'];
  public rules: Array<object> = [(v: String) => !!v || '項目を選択してください'];
  @Emit()
  scanSelect() {
    return this.selectContents;
  }
}
</script>
