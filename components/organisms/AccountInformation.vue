<template>
  <div class="color">
    <!--1段目-->
    <v-row>
      <v-col cols="12" sm="6" lg="4">
        <FinancialInstitutionName />
      </v-col>  
      <v-col cols="12" sm="6" lg="4">
        <BranchName />
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <!--2段目-->
    <v-row>
      <v-col cols="12" sm="6" lg="4">
        <AccountNumber />
      </v-col>      
      <v-col cols="12" sm="6" lg="4">
        <AccountName />
      </v-col>
      <v-col cols="12" sm="6" lg="4">
        <DepositCategory @test-select="testSelect" />
      </v-col>
    </v-row>
    <!--3段目-->
    <v-row>  
      <v-col cols="12" sm="6" lg="4">
        <SearchKeyOne />
      </v-col>
        <v-col cols="12" sm="6" lg="4">
        <SearchKeyTwo />
      </v-col>  
      <v-spacer></v-spacer>
    </v-row>
    <!--4段目-->
    <v-row>
      <v-col cols="12" sm="6" lg="8">
        <MemoBox />
      </v-col>
    </v-row>
    <!--5段目-->
    <v-row>
      <v-col cols="12" sm="6" lg="6">
        <DefaultValue />
      </v-col>
      <v-col cols="12" sm="6" lg="6">
        <InputCandidate />
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
    SearchKeyOne
  },
})
export default class AccountInformation extends Vue {
  private selectVal: string = '';
  testSelect(val: string): void {
    this.selectVal = val;
    console.log(this.selectVal)
  }
}
</script>


<style lang="scss" scoped>
.color {
  background-color: white;
}