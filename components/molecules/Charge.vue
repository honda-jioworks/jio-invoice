<template>
    <v-form v-model="valid">
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field v-model="name" :rules="nameRules" label="担当者名"></v-text-field>
            <select name="敬称" id=""></select>
  
          </v-col>
        
    <!-- <v-select
    :items="items"
 
    ></v-select> -->
        </v-row>
     
  
    </v-form>
  </template>
  