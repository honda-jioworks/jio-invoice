<template>
  <div>
    <body>
  <v-select
    v-model="date"
    :items="items"
  ></v-select>
    </body>
  </div>
</template>


<script lang="ts">
  import { Vue, Component } from 'nuxt-property-decorator';
  import ConsumptionTaxlabel from '~/components/atoms/label/ConsumptionTaxlabel.vue';
  import AutomaticCalculation from '@/components/atoms/select/AutomaticCalculation.vue';
  @Component({ components: { ConsumptionTaxlabel,AutomaticCalculation } })
  export default class customerRegister extends Vue{
  }
</script>
<script>
  const maxdate = 28; //表示したい数字より+1で設定。
  const dateRange = [...Array(maxdate).keys()].map(i => ++i)
  dateRange.push("末");

  export default {
    data() {
      return {
        items: dateRange,
          date: '',
      }
    },
  }
</script>