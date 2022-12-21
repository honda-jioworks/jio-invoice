<template>
    <v-row>
      <v-col cols="4">
          <v-text-field type="date" v-model="date" @input="scanDate"/>
      </v-col>
    </v-row>
</template>

<script lang="ts">
  import { Vue, Component, Emit} from 'nuxt-property-decorator';
  @Component({  })
  export default class CalendarForm extends Vue {
    date: string ='';
  
  @Emit()
  scanDate(): string{
    return this.date
  }
  }
</script>