<template>
    <v-row>
      <v-col cols="4">
          <v-text-field type="date"/>
      </v-col>
    </v-row>
</template>

<script lang="ts">
  import { Vue, Component} from 'nuxt-property-decorator';
  @Component({  })
  export default class CalendarForm extends Vue {
    
  }
</script>