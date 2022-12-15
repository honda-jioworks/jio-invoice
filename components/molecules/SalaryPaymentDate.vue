<template>
  <div>
    <v-row>
      <v-col cols="6">給与支給日:</v-col>
      <v-col cols="6"><Date @scan-select="scanSelect" /></v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
import Date from '@/components/atoms/select/Date.vue';
@Component({ components: { Date } })
export default class SalaryPaymentDate extends Vue {
  @Emit()
  scanSelect(val: string): string {
    return val;
  }
}