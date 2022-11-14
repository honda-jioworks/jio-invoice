<template>
  <v-card width="1920">
    <v-card-text>
      <span class="bbb">- 生年月日 -</span>
      <v-row>
        <v-col cols="6">
          <v-select class="aaa" label="西暦" :items="years" v-model="year" filled dense></v-select>
        </v-col>
        <v-col cols="3">
          <v-select label="月" :items="month" v-model="month" filled dense></v-select>
        </v-col>
        <v-col cols="3">
          <v-select label="日" :items="day" v-model="day" filled dense></v-select>
        </v-col>
      </v-row>
      <div class="text-center">
        <v-btn class="ma-2" color="teal" dark>次へ</v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class datePick extends Vue {
  year: string = '';
  month: string = '';
  day = '';

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
    return years;
  }
  get months() {
    const months = [...Array(12)].map((ele, i) => i + 1);
    return months;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  // get days(): any {
  //   let days = [];
  //   if (
  //     (this.month === 2 && this.year % 4 === 0 && this.year % 100 !== 0) ||
  //     (this.month === 2 && this.year % 400 === 0)
  //   ) {
  //     days = [...Array(29)].map((ele, i) => i + 1);
  //   } else if (this.month === 2) {
  //     days = [...Array(28)].map((ele, i) => i + 1);
  //   } else if (this.month === 4 || this.month === 6 || this.month === 9 || this.month === 11) {
  //     days = [...Array(30)].map((ele, i) => i + 1);
  //   } else {
  //     days = [...Array(31)].map((ele, i) => i + 1);
  //   }
  //   return days;
  // }
}
// }
</script>
