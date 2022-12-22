<template>
  <div>
    <v-row>
      <v-col cols="4" class="wrap04">税率:</v-col>
      <v-col cols="8">
        <v-select
          :items="items"
          :rules="rules"
          outlined
          :disabled="!checkVal"
          v-model="selectContents"
          @change="scanSelect"
        ></v-select>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class TaxRate extends Vue {
  public selectContents: string = '';
  public items: Array<string> = ['平成24年まで', '平成25年以降'];
  rules: Array<object> = [(v: String) => !!v || '項目を選択してください'];

  @Prop({ type: Boolean })
  checkVal!: boolean;

  @Emit()
  scanSelect() {
    return this.selectContents;
  }
}
</script>
<style lang="scss" scoped>
.wrap04 {
  margin-top: 15px;
}
.v-select {
  margin-top: 10px;
}
</style>
