<template>
  <div class="color">
    <!--1段目-->
    <v-row>
      <v-col cols="12" sm="6" lg="4">
        <FinancialInstitutionName @scan-financialname="scanFinancialname" />
      </v-col>  
      <v-col cols="12" sm="6" lg="4">
        <BranchName @scan-branchname="scanBranchname" />
      </v-col>
      <v-spacer />
    </v-row>
    <!--2段目-->
    <v-row>
      <v-col cols="12" sm="6" lg="4">
        <AccountNumber @scan-number="scanNumber" />
      </v-col>      
      <v-col cols="12" sm="6" lg="4">
        <AccountName @scan-accountname="scanAccountname" />
      </v-col>
      <v-col cols="12" sm="6" lg="4">
        <DepositCategory @test-select="testSelect" />
      </v-col>
    </v-row>
    <!--3段目-->
    <v-row>  
      <v-col cols="12" sm="6" lg="4">
        <SearchKeyOne @scan-searchone="scanSearchone" />
      </v-col>
        <v-col cols="12" sm="6" lg="4">
        <SearchKeyTwo @scan-searchtwo="scanSearchtwo" />
      </v-col>  
      <v-spacer />
    </v-row>
    <!--4段目-->
    <v-row>
      <v-col cols="12" sm="6" lg="8">
        <MemoBox @scan-memo="scanMemo" />
      </v-col>
    </v-row>
    <!--5段目-->
    <v-row>
      <v-col cols="12" sm="6" lg="6">
        <DefaultValue @scan-default="scanDefault" />
      </v-col>
      <v-col cols="12" sm="6" lg="6">
        <InputCandidate @scan-candidate="scanCandidate" />
      </v-col>
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
  private financialnameVal: string = '';
  private branchnameVal: string = '';
  private numberVal: string = '';
  private accountnameVal: string = '';
  private selectVal: string = '';
  private seachoneVal: string = '';
  private searchtwoVal: string = '';
  private memoVal: string = '';
  private defaultVal: boolean = false;
  private candidateVal: boolean = false;

  scanFinancialname(val: string): void {  //金融機関名
    this.financialnameVal = val;
  }

  scanBranchname(val: string): void {  //支店名
    this.branchnameVal = val;
  }

  scanNumber(val: string): void {  //口座番号
    this.numberVal = val;
  }

  scanAccountname(val: string): void {  //口座名義
    this.accountnameVal = val;
  }

  testSelect(val: string): void {  //預金区分
    this.selectVal = val;

  }
  scanSearchone(val: string): void {  //検査キー１
    this.seachoneVal = val;

  }

  scanSearchtwo(val: string): void {  //検索キー２
    this.searchtwoVal = val;
  }

  scanMemo(val: string): void {  //メモ
    this.memoVal = val;
  }

  scanDefault(val: boolean): void {  //初期値として使用する
    this.defaultVal = val;
  }

  scanCandidate(val: boolean): void {  //入力候補に表示しない
    this.candidateVal = val; 
  }

  



}
</script>


<style lang="scss" scoped>
.color {
  background-color: white;
}