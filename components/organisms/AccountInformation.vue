<template>
  <div class="Accountcolor">
    <!--1段目-->
    <v-row>
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"><FinancialInstitutionName class="mb-n5" /></v-col>  
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"><BranchName class="mb-n5" /></v-col>
    </v-row>
    <!--2段目-->
    <v-row>
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"><AccountNumber class="mb-n5" /></v-col>      
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"><AccountName class="mb-n5" /></v-col>
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"><DepositCategory class="mb-n5" /></v-col>
    </v-row>
    <!--3段目-->
    <v-row>
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"><SearchKeyOne class="mb-n5" /></v-col>
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"><SearchKeyTwo class="mb-n5" /></v-col>  
    </v-row>
    <!--4段目-->
    <v-row>
      <v-col cols="12" sm="6" lg="8" md="4" xl="4"><MemoBox class="mb-n5"/></v-col>
    </v-row>
    <!--5段目-->
    <v-row>
      <v-col cols="12" sm="6" lg="6" md="4" xl="4"><DefaultValue class="mb-n5" /></v-col>
      <v-col cols="12" sm="6" lg="6" md="4" xl="4"><InputCandidate /></v-col>
    </v-row>       
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import FinancialInstitutionName from '@/components/molecules/FinancialInstitutionName.vue';
import BranchName from '@/components/molecules/BranchName.vue';
import AccountNumber from '@/components/molecules/AccountNumber.vue';
import AccountName from '@/components/molecules/AccountName.vue';
import DepositCategory from '@/components/molecules/DepositCategory.vue';
import SearchKeyTwo from '@/components/molecules/SearchKeyTwo.vue';
import MemoBox from '@/components/molecules/MemoBox.vue';
import DefaultValue from '@/components/molecules/DefaultValue.vue';
import InputCandidate from '@/components/molecules/InputCandidate.vue';
import SearchKeyOne from '../molecules/SearchKeyOne.vue';

@Component({
  components: {
    FinancialInstitutionName,
    BranchName,
    AccountNumber,
    AccountName,
    DepositCategory,
    SearchKeyTwo,
    MemoBox,
    DefaultValue,
    InputCandidate,
    SearchKeyOne,
  },
})
export default class AccountInformation extends Vue {
  //登録処理を書いていく
}
</script>
<style lang="scss" scoped>
.Accountcolor {
  background-color: white;
}
</style>


