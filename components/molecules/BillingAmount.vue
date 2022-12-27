<template>
  <v-row
    ><v-col cols="2"><BilingAmountt /></v-col><v-col cols="7"></v-col><v-col cols="3"><TargetPeriod /></v-col>
  </v-row>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import BilingAmountt from '@/components/atoms/input/BilingAmountt.vue';
import TargetPeriod from '@/components/atoms/input/TargetPeriod.vue';

@Component({ components: { BilingAmountt, TargetPeriod } })
export default class BilingAmount extends Vue {}
</script>
<style lang="scss" scoped></style>
