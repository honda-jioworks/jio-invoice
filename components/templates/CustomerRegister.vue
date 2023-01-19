<template>
  <v-container class="groundcolor">
    <v-row>
      <v-col cols="12">
        <BasicInfomationForm ref="sample1" />
      </v-col>
      <v-col cols="12">
        <ContactAddressForm ref="sample2" />
      </v-col>
      <v-col cols="12">
        <TransactionForm ref="sample3" />
      </v-col>
      <v-col cols="12">
        <AccountInformation ref="sample4" />
      </v-col>
    </v-row>
    <v-btn color="primary" @click="onSave" small>保存する</v-btn>
    <v-btn @click="onJump" small>トップページに戻る</v-btn>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Ref } from 'nuxt-property-decorator';
import BasicInfomationForm from '~/components/organisms/BasicInfomationForm.vue';
import ContactAddressForm from '~/components/organisms/ContactAddressForm.vue';
import TransactionForm from '~/components/organisms/TransactionForm.vue';
import AccountInformation from '~/components/organisms/AccountInformation.vue';

@Component({
  components: { BasicInfomationForm, ContactAddressForm, TransactionForm, AccountInformation },
})
export default class CustomerRegister extends Vue {
  @Ref()
  sample1!: BasicInfomationForm;

  @Ref()
  sample2!: ContactAddressForm;

  @Ref()
  sample3!: TransactionForm;

  @Ref()
  sample4!: AccountInformation;

  onSave(): void {
    this.sample4.test4();
  }
  onJump(): void {
    let result = window.confirm('一覧ページへ移動します。よろしいですか？');
    if (result) {
      location.href = '/DashBoard';
    }
  }
}
</script>

<style lang="scss" scoped>
.groundcolor {
  background: gray;
}
</style>
