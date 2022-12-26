<template>
    <editor :label="label" :rule="rule" :value.sync="productcode"></editor>
  </template>
  
  <script lang="ts">
  import { Vue, Component, PropSync, Emit } from 'nuxt-property-decorator';
  import TextEditer from '@/components/atoms/TextEditer.vue';
  
  @Component({
    components: { editor: TextEditer },
  })
  export default class ProductCodeEditer extends Vue {
    @PropSync('productname_val', {type: String})
    productcode!: string;
  
    label: string = '商品コード';
  
    rule: Array<object> = [
      (v: any) => !!v || '商品コードを入力してください。',
    ];
  }
  </script>
  