<template>
  <v-col>
    <v-select :items="items" :rules="rules" outlined></v-select>
  </v-col>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({
  components: {},
})
export default class DoOrNot extends Vue {
  private items: Array<object> = [
    { text: 'する', value: 'aaa', boolean: true },
    { text: 'しない', value: 'bbb', boolean: false },
  ];
  //@Emit()
  private rules: Array<object> = [(v: String) => !!v || '項目を選択してください']; //バリデーションチェック
  private enabled: boolean = false;
}
</script>
