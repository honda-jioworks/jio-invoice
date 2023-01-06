<template>
  <v-row>
    <v-col cols="5"><PaymentDestination /></v-col>
    <v-col cols="3"><CollectionDate /></v-col>
    <v-col cols="3"><SlipNumber2 /></v-col>
  </v-row>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import CollectionDate from '@/components/atoms/input/CollectionDate.vue';
import SlipNumber2 from '@/components/atoms/input/SlipNumber2.vue';
import PaymentDestination from '@/components/atoms/input/PaymentDestination.vue';

@Component({
  components: { CollectionDate, SlipNumber2, PaymentDestination },
})
export default class Headers2 extends Vue {}
</script>
<style lang="scss" scoped></style>
