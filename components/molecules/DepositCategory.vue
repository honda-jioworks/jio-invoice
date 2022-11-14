<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="2">貯金区分：</v-col>
        <v-col cols="5"><SelectBox :contents="test" /></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import SelectBox from '@/components/atoms/SelectBox.vue';
@Component({ components: { SelectBox } })
export default class FinancialInstitutionName extends Vue {
  private test: Array<string> = ['aa', 'bb', 'cc'];
}
</script>
