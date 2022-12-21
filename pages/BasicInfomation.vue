<template>
  <v-sheet class="groundwork">
    <v-row>
      <v-col cols="12">
        <CustomerName @scan-name="scanName" />
        <CustomerNameKana @scan-kana="scanKana" />
        <AbbreviationInput @scan-short="scanShort" />
        <PrimarySearchInput @scan-primary="scanPrimary" />
        <SecondSearchInput @scan-second="scanSecond" />
        <MemoBox @scan-memo="scanMemo" />
        <NotShowBox @scan-check="scanCheck" />
        <v-btn @click="onsave"> OK </v-btn>
        <v-btn @click="oncansel"> キャンセル </v-btn>
      </v-col>
    </v-row>
  </v-sheet>
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
export default class BasicInfomation extends Vue {
  private nameVal: string = '';
  private kanaVal: string = '';
  private shortVal: string = '';
  private primaryVal: string = '';
  private secondVal: string = '';
  private memoVal: string = '';
  private checkVal: boolean = false;
  private saveVal: string = '';


    scanName(val: string): void {
      this.nameVal = val;
    }
  
    scanKana(val: string): void {
      this.kanaVal = val;
    }
  
    scanShort(val: string): void {
      this.shortVal = val;
    }
  
    scanPrimary(val: string): void {
      this.primaryVal = val;
    }
  
    scanSecond(val: string): void {
      this.secondVal = val;
    }
  
    scanMemo(val: string): void {
      this.memoVal = val;
    }
  
    scanCheck(val: boolean): void {
      this.checkVal = val;
    }

    onsave(): void {
      alert('保存されました。')
    }

    oncansel(): void {

    }
  }
</script>
<style lang="scss" scoped>
.groundwork {
  background-color: white;
}
</style>
