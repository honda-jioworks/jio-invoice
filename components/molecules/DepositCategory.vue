<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="10" sm="6" lg="4"><SelectBox :contents="test" /></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import SelectBox from '@/components/atoms/SelectBox.vue';
@Component({ components: { SelectBox } })
export default class FinancialInstitutionName extends Vue {
  private test: Array<string> = [
    '普通貯金',
    '当座貯金',
    '定期貯金',
    '定期積金',
    '通知貯金',
    '別段貯金',
    '郵便貯金',
    'その他',
  ];
}
</script>
