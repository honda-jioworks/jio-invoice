<template>
  <v-row
    ><v-col cols="3"><TaxProcessing /></v-col>
    <v-col cols="2"><Issuance /></v-col>
    <v-col cols="3"><CollectionDate /></v-col>
    <v-col cols="2"><SlipNumber2 /></v-col>
  </v-row>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import TaxProcessing from '@/components/atoms/input/TaxProcessing.vue';
import Issuance from '@/components/atoms/input/Issuance.vue';
import CollectionDate from '@/components/atoms/input/CollectionDate.vue';
import SlipNumber2 from '@/components/atoms/input/SlipNumber2.vue';

@Component({
  components: { TaxProcessing, Issuance, CollectionDate, SlipNumber2 },
})
export default class Headers2 extends Vue {}
</script>
<style lang="scss" scoped></style>
