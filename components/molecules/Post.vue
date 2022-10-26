<template>
    <v-form v-model="valid">
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field v-model="name" :rules="nameRules" label="役職"></v-text-field>
  
          </v-col>
         
        </v-row>
     
  
    </v-form>
  </template>
  