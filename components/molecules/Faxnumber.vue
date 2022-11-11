<template>
  <v-form>
    <v-row>
      <v-col cols="12" md="4">
        <v-text-field v-model="name" :rules="nameRules" label="FAX（任意）"></v-text-field>
      </v-col>
    </v-row>
  </v-form>
</template>
