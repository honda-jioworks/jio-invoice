<template>
  <v-row>
    <v-col cols="2">
      <label>登録番号:</label>
    </v-col>
    <v-col cols="1">
      <label>T</label>
    </v-col>
    <v-col cols="8">
      <v-text-field counter="13" :disabled="!checkValue" outlined> </v-text-field>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import MostRecentSalesAmount from '@/components/organisms/MostRecentSalesAmount.vue';
@Component({ components: { MostRecentSalesAmount } })
export default class RegistrationNumberBox extends Vue {
  @Prop({ type: Boolean, required: true, default: false })
  checkValue!: boolean;
}
</script>
