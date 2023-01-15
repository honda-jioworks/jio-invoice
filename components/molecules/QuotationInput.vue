<template>
  <div>
    <v-row class="lll1">
      <v-subheader>納入期限</v-subheader>
      <v-col cols="3">
        <v-select
          v-model="deliveryDeadline"
          outlined
          @input="scanDeadline"
          :items="deadlineItems"
          label="納入期限"
        ></v-select>
      </v-col>
    </v-row>
    <v-row class="lll1">
      <v-subheader>納入場所</v-subheader>
      <v-col cols="3">
        <v-select v-model="deliveryPlace" outlined @input="scanPlace" :items="placeItems" label="納入場所"></v-select>
      </v-col>
    </v-row>
    <v-row class="lll1">
      <v-subheader>取引方法</v-subheader>
      <v-col cols="3">
        <v-select
          v-model="transactionSystem"
          outlined
          @input="scanTransaction"
          :items="transactionItems"
          label="取引方法"
        ></v-select>
      </v-col>
    </v-row>
    <v-row class="lll1">
      <v-subheader>有効期限</v-subheader>
      <v-col cols="3">
        <v-select v-model="dateExpiry" outlined @input="scanExpiry" :items="expiryItems" label="有効期限"></v-select>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class QuotationInfomation extends Vue {
  deadlineItems: Array<string> = ['別途打ち合わせにて'];
  placeItems: Array<string> = ['別途打ち合わせにて'];
  transactionItems: Array<string> = ['別途打ち合わせにて'];
  expiryItems: Array<string> = ['２週間'];

  deliveryDeadline: string = '';
  deliveryPlace: string = '';
  transactionSystem: string = '';
  dateExpiry: string = '';

  @Emit()
  scanDeadline(): string {
    return this.deliveryDeadline;
  }
  scanPlace(): string {
    return this.deliveryPlace;
  }
  scanTransaction(): string {
    return this.transactionSystem;
  }
  scanExpiry(): string {
    return this.dateExpiry;
  }
}
</script>
<style lang="scss" scoped>
.v-subheader {
  font-size: 71%;
  background-color: blue;
  color: white;
  margin-top: 1.5%;
  margin-left: 1%;
}

.lll1 {
  margin-left: 1%;
}
</style>
