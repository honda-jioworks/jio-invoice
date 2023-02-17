<template>
   <v-edit-dialog
    :return-value.sync="ac_in"
    @open="openAc(cstmr_id)"
    persistent
  >
    {{ ac_in }}
    <template v-slot:input>
      <v-select
        v-model="ac_in"
        :items="ac_items"
        v-bind:rules="rule"
        v-bind:label="label"
      ></v-select>
      <v-btn color="primary" @click="editAc()"> 口座登録 </v-btn>
    </template>
  </v-edit-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync, Emit } from 'nuxt-property-decorator';
import DialogTextEditer from '@/components/atoms/DialogSelectEditer.vue';
@Component({
  components: { editor: DialogTextEditer },
})
export default class DialogAcEditor extends Vue {

  @PropSync('ac', {type: String})
  ac_in!: string;

  @Prop()
  cstmr_id!: string;

  @Prop()
  ac_items!: Array<string>;

  label: string = '入金先';

  rule: Array<object> = [
    (v: any) => !!v || this.label + 'を入力してください。',
  ];

  editAc() {
    alert('口座登録');
  }

  @Prop()
  openAc!: (cstmr_id: String) => {};

}
</script>
