<template>
  <v-row class="sw1">
    <v-subheader class="w1">日付</v-subheader>
    <v-col cols="3">
      <v-text-field outlined type="date" />
    </v-col>
    <v-subheader class="x1">No1.</v-subheader>
    <v-col cols="3" class="th1"><SerialNumber @get-new-number="getNewNumber" /></v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator';
import SerialNumber from '~/components/atoms/input/SerialNumber.vue';
@Component({
  components: {
    SerialNumber,
  },
})
export default class CalenderForm extends Vue {
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
  margin-top: 1%;
  background-color: blue;
  color: white;
}
.x1 {
  margin-top: 1%;
  background-color: blue;
  color: white;
  margin-left: 130px;
}
</style>
