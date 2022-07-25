<template>
  <v-container class="pa-0">
    <h1 class=" teal--text">Categories</h1>
    <v-divider class="my-7"></v-divider>
    <v-row>
      <v-col md="6" sm="12">

        <h3>Create</h3>

        <v-form class="my-5">
          <v-text-field
              v-model.trim="name"
              :error-messages="nameErrors"
              label="Name"
              aria-autocomplete="both"
              required
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
          ></v-text-field>

          <v-text-field
              v-model.trim="limit"
              :error-messages="limitErrors"
              label="Limit"
              aria-autocomplete="both"
              required
              @input="$v.limit.$touch()"
              @blur="$v.limit.$touch()"
          ></v-text-field>

          <v-btn class="my-5" color="success">Create
            <v-icon right>mdi-send</v-icon>
          </v-btn>

        </v-form>
      </v-col>

      <v-col md="6" sm="12">
        <h3>Edit</h3>

        <v-form class="my-5">
          <v-select
              v-model="category"
              :items="categories"
              :error-messages="categoryErrors"
              label="Category"
              required
              @change="$v.category.$touch()"
              @blur="$v.category.$touch()"
          ></v-select>

          <v-text-field
              v-model.trim="limit"
              :error-messages="limitErrors"
              label="Limit"
              aria-autocomplete="both"
              required
              @input="$v.limit.$touch()"
              @blur="$v.limit.$touch()"
          ></v-text-field>

          <v-btn class="my-5" color="error">Update
            <v-icon right>mdi-send</v-icon>
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'

export default {

  name: 'CategoriesView',

  validations: {
    name: { required, minLength: minLength(8) },
    limit: { required, minLength: minLength(8) },
    category: { required }
  },

  data: () => ({
    name: '',
    limit: '',
    category: null,
    categories: []
  }),

  computed: {
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.minLength && errors
          .push(`Must be at least ${this.$v.name.$params.minLength.min} characters long`)
      !this.$v.name.required && errors.push('Name is required')
      return errors
    },
    limitErrors() {
      const errors = []
      if (!this.$v.limit.$dirty) return errors
      !this.$v.limit.minLength && errors
          .push(`Must be at least ${this.$v.limit.$params.minLength.min} characters long`)
      !this.$v.limit.required && errors.push('Limit is required')
      return errors
    },
    categoryErrors () {
      const errors = []
      if (!this.$v.category.$dirty) return errors
      !this.$v.category.required && errors.push('Category is required')
      return errors
    }
  }

}
</script>
