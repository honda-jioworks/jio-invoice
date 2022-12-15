<template>
  <div>
    <v-row>
      <v-col cols="6">税率:</v-col>
<<<<<<< HEAD
      <v-col cols="6"><v-select :items="items" :rules="rules" :disabled="!checkVal"></v-select></v-col>
=======
      <v-col cols="6">
        <v-select
          :items="items"
          :rules="rules"
          outlined
          :disabled="!checkVal"
          v-model="selectContents"
          @change="scanSelect"
        ></v-select>
      </v-col>
>>>>>>> 8535e95e835d3d34207b31b65ba1edba306cde59
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
