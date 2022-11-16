<template>
  <v-col>
    <v-select :items="items" :rules="rules" outlined @input="checkBool" id="check"></v-select>
  </v-col>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({
  components: {},
})
export default class DoOrNot extends Vue {
  private items: Array<Object> = ['する', 'しない'];
  private rules: Array<object> = [(v: String) => !!v || '項目を選択してください']; //バリデーションチェック
  private selectValue = <HTMLInputElement>document.getElementById('check');
  @Emit()
  checkBool(): boolean {
    var val: string = this.selectValue!.value;
    switch (val) {
      case 'する':
        return true;
      case 'しない':
        return false;
      default:
        return false;
    }
  }
}
</script>
