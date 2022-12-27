<template>
  <div>
    <v-row
      ><v-col cols="12"><BillingAmount /></v-col
    ></v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import BillingAmount from '@/components/molecules/BillingAmount.vue';
@Component({ components: { BillingAmount } })
export default class DisplayDestinationForm extends Vue {}
</script>
