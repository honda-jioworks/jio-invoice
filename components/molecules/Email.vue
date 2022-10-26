<template>
    <v-form v-model="valid">
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field v-model="name" :rules="nameRules" label="担当者メール"></v-text-field>
  
          </v-col>
          <v-btn large min-width="30" :to="url">

            送る
            </v-btn>
        </v-row>
     
  
    </v-form>
  </template>
  