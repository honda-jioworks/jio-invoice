<template>
  <div>
    <v-row>
      <v-col>
        <v-subheader>対象期間</v-subheader>
        <v-row>
          <v-col cols="5"> <v-text-field input type="date" @blur="input" v-model="dayStart" /></v-col>
          <v-col cols="5"><v-text-field input type="date" @blur="input" v-model="dayEnd" /></v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({ components: {} })
export default class TargetPeriod extends Vue {
  dayStart = '';
  dayEnd = '';

  input() {
    this.$store.commit('quotation/set', { dayStart: this.dayStart });
    this.$store.commit('quotation/set', { dayEnd: this.dayEnd });
  }
}
</script>

<style lang="scss" scoped>
.v-subheader {
  background-color: rgb(56, 129, 255);
  color: white;
  justify-content: center;
}
.b1 {
  margin-top: 10px;
}
.q1 {
  font-size: 140%;
  margin-left: 10%;
}
</style>
