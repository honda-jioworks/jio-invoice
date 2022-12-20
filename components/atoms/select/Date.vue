<template>
  <v-col>
    <v-select :items="items" solo :rules="rules" v-model="selectContents" @change="scanSelect"></v-select>
  </v-col>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({
  components: {},
})
export default class Date extends Vue {
  public selectContents: string = '';
  public items: Array<string> = [
    '1日',
    '2日',
    '3日',
    '4日',
    '5日',
    '6日',
    '7日',
    '8日',
    '9日',
    '10日',
    '11日',
    '12日',
    '13日',
    '14日',
    '15日',
    '16日',
    '17日',
    '18日',
    '19日',
    '20日',
    '21日',
    '22日',
    '23日',
    '24日',
    '25日',
    '26日',
    '27日',
    '28日',
    '29日',
    '30日',
    '31日',
    '末日',
  ];
  public rules: Array<object> = [(v: String) => !!v || '項目を選択してください'];

  @Emit()
  scanSelect() {
    return this.selectContents;
  }
}
</script>

<style lang="scss" scoped>
.layout {
  width: 50vh;
}
.v-select {
  margin-left: 5px;
}
</style>
