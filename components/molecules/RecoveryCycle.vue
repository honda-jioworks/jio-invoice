<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="3">
        <v-select
          label="回収サイクル："
          :items="cyclemonth"
          :rules="boxRules"
          @change="getMonth"
          return-object
        ></v-select>
      </v-col>
      <v-col class="d-flex" cols="12" sm="3">
        <v-select :items="cycledate" :rules="boxRules" @change="getDate" return-object></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';

@Component({})
export default class RecoveryCycle extends Vue {
  cyclemonth: Array<string> = ['当月', '翌月', '翌々月', '3ヶ月先', '4ヶ月先', '5ヶ月先', '6ヶ月先'];
  cycledate: Array<string> = [
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
    '末日',
  ];
  boxRules: Array<any> = [(v: any) => !!v || '項目を選択してください'];
  month: any = '';
  date: any = '';

  @Emit()
  getMonth(month: any): any {
    return month;
  }

  @Emit()
  getDate(date: any): any {
    return date;
  }
}
</script>
