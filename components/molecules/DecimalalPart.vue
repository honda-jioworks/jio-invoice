<template>
  <div>
    <v-row>
      <v-col cols="6">単価、数量の小数部0を印刷:</v-col>
      <v-col cols="6"><DoOrNot /></v-col>
    </v-row>  
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'nuxt-property-decorator';
  import DoOrNot from '@/components/atoms/select/DoOrNot.vue';
  @Component({ components: { DoOrNot } })
  export default class DecimalalPart extends Vue{
  }
</script>