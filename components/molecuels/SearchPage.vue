<template>
  <v-card>
    <v-card-title>
     請求書一覧表
     <v-spacer></v-spacer>
      <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
     <v-text-field
     v-model="search"
     label="検索"
     append-icon="mdi-magnify"
        single-line
        hide-details
     >
   
     </v-text-field>
     
      <v-select
      v-model="enabled"
      :items="slots"
      label="得意先"
      clearable
      ></v-select>

    </v-card-title>
  </v-card>
</template>
