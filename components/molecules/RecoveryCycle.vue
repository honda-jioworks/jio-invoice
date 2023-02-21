<template>
  <v-container>
    <v-row>
      <v-col class="d-flex" cols="8">
        <v-select
          :items="cyclemonth"
          label="回収サイクル"
          :rules="boxRules"
          @change="sendCyclemonth"
          v-model="monthVal"
          @blur="input"
        ></v-select>
      </v-col>
      <v-col class="d-flex" cols="4">
        <v-select
          :items="cycledate"
          @blur="input"
          :rules="boxRules"
          @change="sendCycledate"
          v-model="dateVal"
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';

@Component({})
export default class RecoveryCycle extends Vue {
  monthVal: string = '';
  dateVal: string = '';
  cyclemonth: Array<string> = ['当月', '翌月', '翌々月', '3ヶ月先', '4ヶ月先', '5ヶ月先', '6ヶ月先'];
  cycledate = Array.from({ length: 28 }, (_, i) => `${i + 1}日`).concat('末日');

  boxRules: Array<any> = [(v: any) => !!v || '項目を選択してください'];

  @Emit()
  sendCyclemonth() {
    return this.monthVal;
  }
  @Emit()
  sendCycledate() {
    return this.dateVal;
  }
  input() {
    this.$store.commit('customer/set', { collectmonth: this.monthVal });
    this.$store.commit('customer/set', { collectday: this.dateVal });
  }
}
</script>
