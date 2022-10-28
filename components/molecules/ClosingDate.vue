<template>
  <v-container fluid>
    <v-row align="center">
      <v-col
        class="d-flex"
        cols="12"
        sm="2"
      >
        <v-select
          :items="items"
          label="締日（毎月）"
          :rules="boxRules"
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
})
export default class ClosingDate extends Vue {
  items: Array<string> = [ "1日", "2日", "3日", "4日", "5日", "6日", "7日", "8日", "9日", "10日", "11日", "12日", "13日", "14日", "15日", "16日", "17日", "18日", "19日", "20日", "21日", "22日", "23日", "24日", "25日", "26日", "27日", "28日", "末日"];
  boxRules: Array<any> = [
    (v: any) => !!v || "項目を選択してください",
  ];
}
</script>

