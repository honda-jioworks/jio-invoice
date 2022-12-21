<template>
    <v-row>
        <v-col>
            <v-text-field v-model="tellNumber" @input="scanTel" label=TEL></v-text-field>
            <v-text-field v-model="faxNumber" @input="scanFax" label=FAX></v-text-field>
        </v-col>
    </v-row>
  </template>

  <script lang="ts">
  import { Vue, Component, Emit} from 'nuxt-property-decorator';
  @Component({ components: {} })
  export default class NumberForm extends Vue {
    tellNumber: string ='';
    faxNumber: string ='';

    @Emit()
    scanTel(): string{
        return this.tellNumber
    }

    @Emit()
    scanFax(): string{
        return this.faxNumber
    }
  }
</script>