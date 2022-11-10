<template>
  <v-sheet class="groundwork">
    <MostRecentSalesAmount />
    <v-row>
      <v-col cols="12">
        <CustomerName />
        <CustomerKana />
        <abbreviation />
        <Search1 />
        <Search2 />
        <memo />
        <Notshow />
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import CustomerName from '@/components/molecules/CustomerName.vue'
import CustomerKana from '@/components/molecules/CustomerKana.vue'
import abbreviation from '@/components/molecules/abbreviation.vue'
import Search1 from '@/components/molecules/Search1.vue'
import Search2 from '@/components/molecules/Search2.vue'
import memo from '@/components/molecules/memo.vue'
import Notshow from '@/components//molecules/Notshow.vue'
@Component({ components: { CustomerName, CustomerKana, abbreviation, Search1, Search2, memo, Notshow } })
export default class DashBoard extends Vue {
  // templatesはページの大まかな配置（ワイヤーフレーム）を管轄
}
</script>
<style lang="scss" scoped>
.groundwork {
  background-color: white;
}
</style>