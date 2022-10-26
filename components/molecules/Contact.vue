<template>
  <v-form v-model="valid">
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="name" :rules="nameRules" label="名称"></v-text-field>

        </v-col>
        <v-btn large min-width="30" :to="url">

          会社を検索
        </v-btn>
      </v-row>
      <v-col cols="12" md="4">
      <v-text-field v-model="text" :rules="text" label="フリガナ"></v-text-field></v-col>
    </v-container>
  </v-form>
</template>