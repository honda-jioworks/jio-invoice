<template>
  <v-form>
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field :rules="nameRules" label="部署" @change="getDepertment"></v-text-field>
      </v-col>
    </v-row>
  </v-form>
</template>
<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({})
export default class DepartmentInput extends Vue {
  nameRules: Array<object> = [(v: string) => !!v || '部署名を入力してください'];
  depertment: string = "";

  @Emit()
  getDepertment(depertment: string): string{
    return depertment;
  }
}
</script>
