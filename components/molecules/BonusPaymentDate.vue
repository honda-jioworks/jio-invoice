<template>
  <div>
    <v-row>
      <v-col cols="6">賞与支給日:</v-col>
      <v-col cols="6"><Date /></v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'nuxt-property-decorator';
  import Date from '@/components/atoms/select/Date.vue';
  @Component({ components: { Date } })
  export default class BonusPaymentDate extends Vue{
  }
</script>