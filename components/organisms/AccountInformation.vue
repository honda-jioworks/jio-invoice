<template>
  <div>
    <FinancialInstitutionName />
    <AccountNumber />
    <AccountName />
    <DepositCategory />
    <SearchKeyOne />
    <SearchKeyTwo />
    <Memo />
    <DefaultValue />
    <InputCandidate />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import FinancialInstitutionName from '@/components/molecules/FinancialInstitutionName.vue';
import BranchName from '@/components/molecules/BranchName.vue';
import AccountNumber from '@/components/molecules/AccountNumber.vue';
import AccountName from '@/components/molecules/AccountName.vue';
import DepositCategory from '@/components/molecules/DepositCategory.vue';
import SearchKeyOne from '@/components/molecules/SearchKeyOne.vue';
import SearchKeyTwo from '@/components/molecules/SearchKeyTwo.vue';
import Memo from '@/components/molecules/Memo.vue';
import DefaultValue from '@/components/molecules/DefaultValue.vue';
import InputCandidate from '@/components/molecules/InputCandidate.vue';

@Component({
  components: {
    FinancialInstitutionName,
    BranchName,
    AccountNumber,
    AccountName,
    DepositCategory,
    SearchKeyOne,
    SearchKeyTwo,
    Memo,
    DefaultValue,
    InputCandidate,
  },
})
export default class AccountInformation extends Vue {}
</script>
