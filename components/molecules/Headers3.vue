<template>
  <v-row no-gutters>
    <v-col cols="5"><TaxProcessing /></v-col>
    <v-col cols="3"><Issuance /></v-col>
    <v-col cols="2"><Copys /></v-col>
  </v-row>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import TaxProcessing from '@/components/atoms/input/TaxProcessing.vue';
import Issuance from '@/components/atoms/input/Issuance.vue';
import Copys from '@/components/atoms/input/Copys.vue';

@Component({
  components: {
    TaxProcessing,
    Copys,
    Issuance,
  },
})
export default class Headers extends Vue {}
</script>
<style lang="scss" scoped></style>
