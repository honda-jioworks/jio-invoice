<template>
  <div>
    <v-row>
      <v-col cols="6">単価計算の端数処理：</v-col>
      <v-col cols="6"><Rounding /></v-col>
    </v-row>  
  </div>
</template>


<script lang="ts">
  import { Vue, Component } from 'nuxt-property-decorator';
  import Rounding from '@/components/atoms/select/Rounding.vue';
  @Component({ components: { Rounding } })
  export default class UnitPriceCulculationRounding extends Vue{
  }
</script>