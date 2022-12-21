<template>
    <v-row>
        <v-col>
            <v-text-field :value="tellNumber" @input="scanTel" label=TEL></v-text-field>
            <v-text-field :value="faxNumber" @input="scanFax" label=FAX></v-text-field>
        </v-col>
    </v-row>
  </template>

  <script lang="ts">
  import { Vue, Component, Emit} from 'nuxt-property-decorator';
  @Component({ components: {} })
  export default class NumberForm extends Vue {
    tellNumber: string ="";
    faxNumber: string ="";

    @Emit()
    scanTel(_:string): string{
        return this.tellNumber
    }

    @Emit()
    scanFax(_:string): string{
        return this.faxNumber
    }
  }
</script>