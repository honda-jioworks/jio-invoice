<template>
    <editor :label="label" :rule="rule" :selected.sync="unit_in" :items="unit_items"></editor>
  </template>
  
  <script lang="ts">
  import { Vue, Component, Prop, PropSync, Emit } from 'nuxt-property-decorator';
  import SelectEditer from '@/components/atoms/SelectEditer.vue';
  
  @Component({
    components: { editor: SelectEditer },
  })
  export default class UnitEditer extends Vue {
  
    @PropSync('unit_val', {type: String})
    unit_in!: string;
  
    @Prop()
    unit_items!: Array<string>;
  
    label: string = '単位';
  
    rule: Array<object> = [
      (v: any) => !!v || '単位を選択してください。',
    ];
  }
  </script>