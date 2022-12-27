<template>
    <editor :label="label" :rule="rule" :value.sync="productname"></editor>
  </template>
  
  <script lang="ts">
  import { Vue, Component, PropSync, Emit } from 'nuxt-property-decorator';
  import TextEditer from '@/components/atoms/TextEditer.vue';
  
  @Component({
    components: { editor: TextEditer },
  })
  export default class ProductNameEditer extends Vue {
    @PropSync('productname_val', {type: String})
    productname!: string;
  
    label: string = '品名';
  
    rule: Array<object> = [
      (v: any) => !!v || '品名を入力してください。',
    ];
  }
  </script>
  