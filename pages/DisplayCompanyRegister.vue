<template>
  <div>
    <v-sheet class="groundwork">
      <v-container>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>事務所情報</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row justify="center">
                <v-col cols="12">
                  <v-card><CompanyInformation :desserts="companyInfo_items" @test-send="testSend" /></v-card
                ></v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>詳細情報</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row justify="center">
                <v-col cols="12"
                  ><v-card
                    ><DetailsInfomation
                      :desserts="DetailsInfo_items"
                      :consumption_items="consumption_items"
                      :taxrounding_items="taxrounding_items"
                      :check_items="check_items"
                      :keta_items="keta_items"
                      :taxRate_items="taxRate_items"
                      :date_items="date_items" /></v-card
                ></v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>ロゴ・社印</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row justify="center">
                <v-col cols="12"
                  ><v-card><LogoSealinfo :desserts="logosealInfo_items" /></v-card
                ></v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>登録番号</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row justify="center">
                <v-col cols="12"
                  ><v-card><RegistrationNumber :desserts="RegistrationNum_items" /></v-card
                ></v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>
    </v-sheet>
    <v-btn color="primary" @click="onSave">保存する</v-btn>
    <v-btn @click="onJump">トップページに戻る</v-btn>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Ref } from 'nuxt-property-decorator';
import CompanyInformation from '~/components/organisms/CompanyInformation.vue';
import DetailsInfomation from '@/components/organisms/DetailsInfomation.vue';
import LogoSealinfo from '@/components/organisms/LogoSealinfo.vue';
import RegistrationNumber from '@/components/organisms/RegistrationNumber.vue';
import axios from 'axios';
@Component({ components: { CompanyInformation, DetailsInfomation, LogoSealinfo, RegistrationNumber } })
export default class DisplayCompanyRegister extends Vue {
  sample: any[] = [];
  testSend(val: any) {
    this.sample = val;
  }
  consumption_items: Array<string> = ['自動', '軽減自動', 'しない'];
  taxrounding_items: Array<string> = ['切り上げ', '切り捨て', '四捨五入'];
  check_items: Array<string> = ['する', 'しない'];
  keta_items: Array<string> = ['整数7桁 小数なし', '整数6桁 小数第1位', '整数5桁 小数第2位', '整数4桁 小数第3位'];
  taxRate_items: Array<string> = ['平成24年まで', '平成25年以降'];
  date_items: Array<string> = [
    '1日',
    '2日',
    '3日',
    '4日',
    '5日',
    '6日',
    '7日',
    '8日',
    '9日',
    '10日',
    '11日',
    '12日',
    '13日',
    '14日',
    '15日',
    '16日',
    '17日',
    '18日',
    '19日',
    '20日',
    '21日',
    '22日',
    '23日',
    '24日',
    '25日',
    '26日',
    '27日',
    '28日',
    '29日',
    '30日',
    '31日',
    '末日',
  ];

  companyInfo_items: any[] = [];
  DetailsInfo_items: any[] = [];
  logosealInfo_items: any[] = [];
  RegistrationNum_items: any[] = [];

  onJump(): void {
    let result = window.confirm('一覧ページに移動します。よろしいですか？');
    if (result) {
      location.href = '/index';
    }
  }

  onSave() {
    console.log(this.$store.state.company.officeName);
    axios
      .post('/company', {
        officeName_id: this.$store.state.company.officeName_id,
        officeName: this.$store.state.company.officeName,
        CEOName_id: this.$store.state.company.CEOName_id,
        CEOName: this.$store.state.company.CEOName,
        postalCode_id: this.$store.state.company.postalCode_id,
        postalCode: this.$store.state.company.postalCode,
        addressOne_id: this.$store.state.company.addressOne_id,
        addressOne: this.$store.state.company.addressOne,
        addressTwo_id: this.$store.state.company.addressTwo_id,
        addressTwo: this.$store.state.company.addressTwo,
        telNumber_id: this.$store.state.company.telNumber_id,
        telNumber: this.$store.state.company.telNumber,
        faxNumber_id: this.$store.state.company.faxNumber_id,
        faxNumber: this.$store.state.company.faxNumber,
        officeUrl_id: this.$store.state.company.officeUrl_id,
        officeUrl: this.$store.state.company.officeUrl,
        fileName_id: this.$store.state.company.fileName_id,
        fileName: this.$store.state.company.fileName,
      })
      .then(function (response) {
        alert(response.data);
      });
  }
}
</script>

<style lang="scss" scoped>
.groundwork {
  background-color: gray;
}
.v-expansion-panel-header {
  font-size: 120%;
}
</style>
