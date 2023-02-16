<template>
  <v-row class="sw1">
    <v-subheader class="w1">日付</v-subheader>
    <v-col cols="3">
      <v-text-field @blur="input" outlined type="date" v-model="date" @input="scanDate" />
    </v-col>
    <v-subheader class="x1">No1.</v-subheader>
    <v-col cols="3" class="th1"><SerialNumber @get-new-number="getNewNumber" /></v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';

import SerialNumber from '@/components/atoms/input/SerialNumber.vue';

@Component({
  components: { SerialNumber },
})
export default class CalendarForm extends Vue {
  date: string = '';

  input() {
    this.$store.commit('quotation/set', { date: this.date });
  }

  @Emit()
  scanDate(): string {
    return this.date;
  }
  @Emit()
  getNewNumber(val: string): string {
    return val;
  }
}
</script>
<style lang="scss" scoped>
.sw1 {
  margin-left: 2%;
}
.w1 {
  margin-top: 1.5%;
  background-color: blue;
  color: white;
}
.x1 {
  margin-top: 1.5%;
  background-color: blue;
  color: white;
  margin-left: 130px;
}
</style>
