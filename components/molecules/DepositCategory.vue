<template>
  <div>
    <v-container>
      <v-row>
        <v-col><SelectBox :contents="test" /></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import SelectBox from '@/components/atoms/SelectBox.vue';
@Component({ components: { SelectBox } })
export default class FinancialInstitutionName extends Vue {
   test: Array<string> = [
    '普通預金',
    '当座預金',
    '定期預金',
    '定期積金',
    '通知預金',
    '別段預金',
    '郵便預金',
    'その他',
  ];
}
</script>
