<template>
  <v-container class="color">
    <!--1行目-->
    <v-row>
      <v-col cols="12" sm="6" md="6" lg="6" xl="6">
        <!--得意先名-->
        <CustomerName @scan-name="scanName" />
      </v-col>
      <v-spacer />
    </v-row>
    <!--2行目-->
    <v-row>
      <v-col cols="12" sm="5" md="6" lg="5" xl="5">
        <CustomerNameKana class="mt-n10" @scan-kana="scanKana" /><!--氏名とカナの行間詰め-->
      </v-col>
      <!--得意先名(カナ)-->
      <v-spacer />
    </v-row>
    <!--3行目-->
    <v-row>
      <v-col cols="12" sm="4" md="4" lg="4" xl="4">
        <!--略称-->
        <AbbreviationInput class="mt-n5" @scan-short="scanShort" />
      </v-col>
      <v-col cols="12" sm="4" md="4" lg="4" xl="4">
        <!--検索キー1-->
        <PrimarySearchInput class="mt-n5" @scan-primary="scanPrimary" />
      </v-col>
      <v-col cols="12" sm="4" md="4" lg="4" xl="4">
        <!--検索キー2-->
        <SecondSearchInput class="mt-n5" @scan-second="scanSecond" />
      </v-col>
    </v-row>
    <!--4行目-->
    <v-row>
      <v-col cols="12" sm="4" md="4" lg="5" xl="5">
        <MemoBox class="mt-n5" @scan-memo="scanMemo" />
      </v-col>
    </v-row>
    <!--5行目-->
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="12" xl="12">
        <NotShowBox class="mt-n5" @scan-check="scanCheck" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import CustomerName from '@/components/molecules/CustomerName.vue';
import CustomerNameKana from '@/components/molecules/CustomerNameKana.vue';
import AbbreviationInput from '~/components/molecules/AbbreviationInput.vue';
import PrimarySearchInput from '@/components/molecules/PrimarySearchInput.vue';
import SecondSearchInput from '@/components/molecules/SecondSearchInput.vue';
import MemoBox from '@/components/molecules/MemoBox.vue';
import NotShowBox from '~/components/molecules/NotShowBox.vue';
@Component({
  components: {
    CustomerName,
    CustomerNameKana,
    AbbreviationInput,
    PrimarySearchInput,
    SecondSearchInput,
    MemoBox,
    NotShowBox,
  },
})
export default class BasicInfomationForm extends Vue {
  public nameVal: string = '';
  public kanaVal: string = '';
  public shortVal: string = '';
  public primaryVal: string = '';
  public secondVal: string = '';
  public memoVal: string = '';
  public checkVal: boolean = false;

  scanName(val: string): void {
    //得意先名
    this.nameVal = val;
  }

  scanKana(val: string): void {
    //得意先名(カナ)
    this.kanaVal = val;
  }

  scanShort(val: string): void {
    //略称
    this.shortVal = val;
  }

  scanPrimary(val: string): void {
    //検索キー１
    this.primaryVal = val;
  }

  scanSecond(val: string): void {
    //検索キー２
    this.secondVal = val;
  }

  scanMemo(val: string): void {
    //メモ
    this.memoVal = val;
  }

  scanCheck(val: boolean): void {
    //入力候補に表示しない
    this.checkVal = val;
  }
}
</script>
<style lang="scss" scoped>
.color {
  background: white;
}
</style>
