<template>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="CustomerName"
              :rules="nameRules"
              :counter="10"
              label="得意先名"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      CustomerName: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
    }),
  }
</script>