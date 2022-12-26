<template>
  <v-row>
    <v-col>
      <v-dialog
      v-model="dialog"
      max-width="290px"
      >
      <template v-slot:activator="{on,attrs}">
        <v-btn text 
        v-bind="attrs"
        v-on="on"
        >ソート</v-btn>
      </template>
      </v-dialog>
      </v-col>
      </v-row>
</template>

<script lang="ts">
import{Vue,Component} from 'nuxt-property-decorator';
@Component({})
export default class Sortbtn extends Vue {

  dialog:boolean = false;

  }
</script>