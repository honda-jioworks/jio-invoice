<template>
  <div class="Accountcolor">
    <!--1段目-->
    <v-row>
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"
        ><FinancialInstitutionName class="mb-n5" @scan-financialname="scanFinancialname"
      /></v-col>
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"
        ><BranchName class="mb-n5" @scan-branchname="scanBranchname"
      /></v-col>
    </v-row>
    <!--2段目-->
    <v-row>
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"><AccountNumber class="mb-n5" @scan-number="scanNumber" /></v-col>
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"
        ><AccountName class="mb-n5" @scan-accountname="scanAccountname"
      /></v-col>
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"><DepositCategory class="mb-n5" @test-select="testSelect" /></v-col>
    </v-row>
    <!--3段目-->
    <v-row>
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"
        ><SearchKeyOne class="mb-n5" @scan-searchone="scanSearchone"
      /></v-col>
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"
        ><SearchKeyTwo class="mb-n5" @scan-searchtwo="scanSearchtwo"
      /></v-col>
    </v-row>
    <!--4段目-->
    <v-row>
      <v-col cols="12" sm="6" lg="8" md="4" xl="4"><MemoBox class="mb-n5" @scan-memo="scanMemo" /></v-col>
    </v-row>
    <!--5段目-->
    <v-row>
      <v-col cols="12" sm="6" lg="6" md="4" xl="4"><DefaultValue class="mb-n5" @scan-default="scanDefault" /></v-col>
      <v-col cols="12" sm="6" lg="6" md="4" xl="4"><InputCandidate @scan-candidate="scanCandidate" /></v-col>
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
  public financialnameVal: string = '';
  public branchnameVal: string = '';
  public numberVal: string = '';
  public accountnameVal: string = '';
  public selectVal: string = '';
  public seachoneVal: string = '';
  public searchtwoVal: string = '';
  public memoVal: string = '';
  public defaultVal: boolean = false;
  public candidateVal: boolean = false;

  scanFinancialname(val: string): void {
    //金融機関名
    this.financialnameVal = val;
  }

  scanBranchname(val: string): void {
    //支店名
    this.branchnameVal = val;
  }

  scanNumber(val: string): void {
    //口座番号
    this.numberVal = val;
  }

  scanAccountname(val: string): void {
    //口座名義
    this.accountnameVal = val;
  }

  testSelect(val: string): void {
    //預金区分
    this.selectVal = val;
  }
  scanSearchone(val: string): void {
    //検査キー１
    this.seachoneVal = val;
  }

  scanSearchtwo(val: string): void {
    //検索キー２
    this.searchtwoVal = val;
  }

  scanMemo(val: string): void {
    //メモ
    this.memoVal = val;
  }

  scanDefault(val: boolean): void {
    //初期値として使用する
    this.defaultVal = val;
  }

  scanCandidate(val: boolean): void {
    //入力候補に表示しない
    this.candidateVal = val;
  }
}
</script>
<style lang="scss" scoped>
.Accountcolor {
  background-color: white;
}
</style>
