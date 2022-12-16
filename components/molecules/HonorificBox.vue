<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="5">
        <v-text-field :rules="nameRules" :value="manager" label="担当者名" @input="getManager"></v-text-field>
      </v-col>
      <v-col cols="1">
        <v-select :rules="serectRules" :value="honorific" :items="keisyo" label="敬称" @input="getHonorific"></v-select>
      </v-col>
    </v-row>

  </v-container>
</template>
<script lang="ts">
import { Vue, Component, Emit} from 'nuxt-property-decorator';
@Component({})
export default class HonorificBox extends Vue {

  nameRules: Array<object> = [(v: string) => !!v || '名前を入力してください'];
  manager: string = '';
  serectRules: Array<object> = [(v: string) => !!v || '項目を選択してください'];
  keisyo: Array<string> = ['殿', '様'];
  honorific: string = '';

@Emit()
getManager(manager: string): string{
  return manager;
  }

@Emit()  
getHonorific(honorific: string): string{
  return honorific;
  }
}
</script>
