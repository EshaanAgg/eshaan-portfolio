<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      scrollable
      fullscreen
      style="background-color: white; width: 800px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
          Or send me a quick text here!
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <v-spacer>
            <h2>Send me a Message!</h2>
          </v-spacer>
        </v-card-title>
        <v-card-text>
          <form
            class="px-3 gform"
            method="POST"
            action="https://script.google.com/macros/s/AKfycbyp-PfcrVoMa9p8GjJslIFkyy13Q4KZvbAw1yZNTirW_DVRGwt0UeHErZa3hv4bG8xjCA/exec"
            data-email="eshaanagg@gmail.com"
          >
            <v-text-field
              class="px-2 mx-2"
              v-model="name"
              name="name"
              label="Name"
              :error-messages="nameErrors"
              :counter="25"
              required
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
              prepend-icon="mdi-account"
            ></v-text-field>
            <v-text-field
              v-model="email"
              label="E-mail"
              name="email"
              prepend-icon="mdi-email"
              class="px-2 mx-2"
              required
              @blur="$v.email.$touch()"
              @input="$v.email.$touch()"
              :error-messages="emailErrors"
            ></v-text-field>
            <v-textarea
              v-model="content"
              name="content"
              label="Message"
              prepend-icon="mdi-message"
              class="px-2 mx-2"
              :error-messages="contentErrors"
              :counter="200"
              required
              @input="$v.content.$touch()"
              @blur="$v.content.$touch()"
              rows="2"
            ></v-textarea>
            <v-btn
              @click="submit"
              color="primary"
              rounded
              dark
              class="mx-2 mt-3"
              >Submit</v-btn
            >
            <v-btn @click="clear" color="primary" rounded dark class="mx-2 mt-3"
              >Clear</v-btn
            >
          </form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(25) },
    email: { required, email },
    content: { required },
  },

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Your name is tooo long! Maybe a nickname instead?");
      !this.$v.name.required &&
        errors.push("Please let me know your name atleast :(");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email &&
        errors.push("This E-mail seems fishy. I won't spam, promise.");
      !this.$v.email.required &&
        errors.push("Leave me your e-mail so that I can reach you!");
      return errors;
    },
    contentErrors() {
      const errors = [];
      if (!this.$v.content.$dirty) return errors;
      !this.$v.content.required && errors.push("Please leave me a message :(");
      return errors;
    },
  },

  data() {
    return {
      name: "",
      content: "",
      email: "",
      dialog: false,
    };
  },
  methods: {
    submit() {
      this.$v.$touch();
      console.log(this.name, this.content, this.email);
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.content = "";
    },
  },
};
</script>
