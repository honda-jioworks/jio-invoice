<template>
  <div class="text-right">
    <v-row>
      <v-col cols="6" class="wrap04">単価,数量の小数部0を印刷:</v-col>
      <v-col cols="6" class="wrap12"
        ><DoOrNot :label="label" :rule="rule" :selected.sync="decimalalPart_in" :items="decimalalPart_items"
      /></v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync } from 'nuxt-property-decorator';
import DoOrNot from '@/components/atoms/select/DoOrNot.vue';
@Component({ components: { DoOrNot } })
export default class DecimalalPart extends Vue {
  @PropSync('decimalalPart_val', { type: String })
  decimalalPart_in!: string;

  @Prop()
  decimalalPart_items!: Array<string>;

  label: string = '消費税の端数処理';

  rule: Array<object> = [(v: String) => !!v || '項目を選択してください'];
}
</script>
<style lang="scss">
.wrap04 {
  margin-top: 15px;
}
.wrap12 {
  padding-left: 30px;
  margin-top: 10px;
}
</style>
