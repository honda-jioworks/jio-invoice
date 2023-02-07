<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-text-field :rules="nameRules" @blur="input" label="部署" v-model="department"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { Vue, Component, Emit, PropSync } from 'nuxt-property-decorator';
@Component({})
export default class DepartmentInput extends Vue {
  @PropSync('value', { type: String })
  department!: any;
  nameRules: Array<object> = [(v: string) => !!v || '部署名を入力してください'];
  input() {
    this.$store.commit('company/set', { department: this.department });
  }
}
</script>
