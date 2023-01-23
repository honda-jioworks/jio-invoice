<template>
  <v-container class="Accountcolor">
    <!--1段目-->
    <v-row>
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"
        ><FinancialInstitutionName
          v-for="item in desserts"
          :key="item.financialname_id"
          :value.sync="item.financialname"
          class="mb-n5"
      /></v-col>
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"
        ><BranchName v-for="item in desserts" :key="item.branchname_id" :value.sync="item.branchname" class="mb-n5"
      /></v-col>
    </v-row>
    <!--2段目-->
    <v-row>
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"
        ><AccountNumber
          v-for="item in desserts"
          :key="item.accountnumber_id"
          :value.sync="item.accountnumber"
          class="mb-n5"
      /></v-col>
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"
        ><AccountName v-for="item in desserts" :key="item.accountname_id" :value.sync="item.accountname" class="mb-n5"
      /></v-col>
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"
        ><DepositCategory
          v-for="item in desserts"
          :key="item.depositcategory_id"
          :value.sync="item.depositcategory"
          :items="categoryitems"
          item
          class="mb-n5"
      /></v-col>
    </v-row>
    <!--3段目-->
    <v-row>
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"
        ><SearchKeyOne v-for="item in desserts" :key="item.keyone_id" :value.sync="item.keyone" class="mb-n5"
      /></v-col>
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"
        ><SearchKeyTwo v-for="item in desserts" :key="item.keytwo_id" :value.sync="item.keytwo" class="mb-n5"
      /></v-col>
    </v-row>
    <!--4段目-->
    <v-row>
      <v-col cols="12" sm="6" lg="8" md="4" xl="4"
        ><MemoBox v-for="item in desserts" :key="item.memobox_id" :value.sync="item.memobox" class="mb-n5"
      /></v-col>
    </v-row>
    <!--5段目-->
    <v-row>
      <v-col cols="12" sm="6" lg="6" md="4" xl="4"
        ><DefaultValue
          v-for="item in desserts"
          :key="item.defaultvalue_id"
          :value.sync="item.defaultvalue"
          class="mb-n5"
      /></v-col>
      <v-col cols="12" sm="6" lg="6" md="4" xl="4"
        ><InputCandidate v-for="item in desserts" :key="item.inputcandidate_id" :value.sync="item.inputcandidate"
      /></v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import FinancialInstitutionName from '@/components/molecules/FinancialInstitutionName.vue';
import BranchName from '@/components/molecules/BranchName.vue';
import AccountNumber from '@/components/molecules/AccountNumber.vue';
import AccountName from '@/components/molecules/AccountName.vue';
import DepositCategory from '@/components/molecules/DepositCategory.vue';
import SearchKeyOne from '../molecules/SearchKeyOne.vue';
import SearchKeyTwo from '@/components/molecules/SearchKeyTwo.vue';
import MemoBox from '@/components/molecules/MemoBox.vue';
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
    MemoBox,
    DefaultValue,
    InputCandidate,
  },
})
export default class AccountInformation extends Vue {
  categoryitems: Array<string> = [
    '普通預金',
    '当座預金',
    '定期預金',
    '定期積金',
    '通知預金',
    '別段預金',
    '郵便貯金',
    'その他',
  ];
  desserts = [
    {
      financialname_id: '',
      financialname: '',
      branchname_id: '',
      branchname: '',
      accountnumber_id: '',
      accountnumber: '',
      accountname_id: '',
      accountname: '',
      depositcategory_id: '',
      depositcategory: '',
      keyone_id: '',
      keyone: '',
      keytwo_id: '',
      keytwo: '',
      memobox_id: '',
      memobox: '',
      defaultvalue_id: '',
      defaultvalue: false,
      inputcandidate_id: '',
      inputcandidate: false,
    },
  ];
}
</script>
<style lang="scss" scoped>
.Accountcolor {
  background-color: white;
}
</style>
