<template>
  <div class="text-right">
    <v-row>
      <v-col cols="5" class="wrap19">賞与支給日:</v-col>
      <v-col cols="4" class="wrap20"
        ><Date
          :rules="rule"
          :label="label"
          :selected.sync="bonusPaymentDate_in"
          :items="bonusPaymentDate_items"
          :field="'bonusPaymentDate_in'"
          v-model="bonusPaymentDate_in"
      /></v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync } from 'nuxt-property-decorator';
import Date from '@/components/atoms/select/Date.vue';
@Component({ components: { Date } })
export default class BonusPaymentDate extends Vue {
  @PropSync('bonusPaymentDate_val', { type: String })
  bonusPaymentDate_in!: string;

  @Prop()
  bonusPaymentDate_items!: Array<string>;

  label: string = '給与支給日';

  rule: Array<object> = [(v: String) => !!v || '項目を選択してください'];
}
</script>
<style lang="scss" scoped>
.wrap19 {
  margin-top: 15px;
}
.wrap20 {
  padding-left: -10px;
}
.text-right {
  padding-left: -200px;
}
</style>
