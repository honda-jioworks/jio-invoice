<template>
  <v-container class="groundcolor" :items="desserts">
    <v-row>
      <v-col cols="12">
        <BasicInfomationForm />
      </v-col>
      <v-col cols="12">
        <ContactAddressForm />
      </v-col>
      <v-col cols="12">
        <TransactionForm />
      </v-col>
      <v-col cols="12">
        <AccountInformation />
      </v-col>
    </v-row>
    <v-btn color="primary" @click="editCostomer(desserts)" small>保存する</v-btn>
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
