<template>
  <v-row>
    <v-col
      cols="8"
    >
    
    <v-spacer></v-spacer>
  
      <v-dialog
        ref="dialog"
        v-model="modal"
        :return-value.sync="date"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="ジャンプ"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          type="month"
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="black"
            @click="modal = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="black"
            @click="$refs.dialog.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-dialog>
</v-col>
  </v-row>
</template>



<script lang="ts">
  import { Vue, Component} from 'nuxt-property-decorator';
  @Component({ })
  export default class CalendarForm extends Vue {

  }
</script>