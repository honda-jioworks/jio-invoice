<template>
  <v-card width="1920">
    <v-card-text>
      <span class="bbb">生年月日：</span>
      <v-row>
        <v-col cols="6">
          <v-select class="aaa" label="西暦" :items="years" v-model="year" filled dense></v-select>
        </v-col>
        <v-col cols="3">
          <v-select label="月" :items="months" v-model="month" filled dense></v-select>
        </v-col>
        <v-col cols="3">
          <v-select label="日" :items="days" v-model="day" filled dense></v-select>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BirthDate extends Vue {
  year: any = '';
  month: any = '';
  day: string = '';

  resetDay() {
    this.day = '';
  }

  // computed: {
  get years(): string {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const years: any = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    for (let year: any = 1900; year <= new Date().getFullYear(); year++) {
      years.push(year);
    }
    //変数yearを1900と初期化、new Date()で現在時刻を取得、getFullYearメソッドで年を整数4桁で取得。
    return years;
  }
  get months(): string {
    const months: any = [];
    for (let month: any = 1; month <= 12; month++) {
      months.push(month);
    }
    return months;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  get days(): string {
    let days: any = [];
    if (
      (this.month === 2 && this.year % 4 === 0 && this.year % 100 !== 0) ||
      (this.month === 2 && this.year % 400 === 0)
    ) {
      days = [...Array(29)].map((ele, i) => i + 1);
    } else if (this.month === 2) {
      days = [...Array(28)].map((ele, i) => i + 1);
    } else if (this.month === 4 || this.month === 6 || this.month === 9 || this.month === 11) {
      days = [...Array(30)].map((ele, i) => i + 1);
    } else {
      days = [...Array(31)].map((ele, i) => i + 1);
    }
    return days;
  }
}
</script>
