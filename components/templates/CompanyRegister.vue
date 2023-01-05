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
                  <v-card><CompanyInformation ref="alert1" /></v-card
                ></v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>詳細情報</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row justify="center">
                <v-col cols="12"
                  ><v-card><DetailsInfomation ref="alert2" /></v-card
                ></v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>ロゴ・社印</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row justify="center">
                <v-col cols="12"
                  ><v-card><LogoSealinfo ref="alert3" /></v-card
                ></v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>登録番号</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row justify="center">
                <v-col cols="12"
                  ><v-card><RegistrationNumber ref="alert4" /></v-card
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
@Component({ components: { CompanyInformation, DetailsInfomation, LogoSealinfo, RegistrationNumber } })
export default class companyRegister extends Vue {
  @Prop({ type: String, default: '' })
  text!: string;

  @Ref()
  alert1!: CompanyInformation;

  @Ref()
  alert2!: DetailsInfomation;

  @Ref()
  alert3!: LogoSealinfo;

  @Ref()
  alert4!: RegistrationNumber;

  onSave(): void {
    this.alert1.value1();
    this.alert2.value2();
    this.alert3.value3();
    this.alert4.value4();
  }

  onJump(): void {
    let result = window.confirm('一覧ページに移動します。よろしいですか？');
    if (result) {
      location.href = '/index';
    }
  }
}
// templatesはページの大まかな配置（ワイヤーフレーム）を管轄
</script>
<style lang="scss" scoped>
.groundwork {
  background-color: gray;
}
.v-expansion-panel-header {
  font-size: 120%;
}
</style>
