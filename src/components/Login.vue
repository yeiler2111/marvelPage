<template>
  <div class="container my-3">
    <div class="card p-5">
      <div class="card-top text-center bg-light">
        <!-- Ajustar el tamaño de la imagen SVG -->
        <img
          class="card-img-top"
          src="../assets/marvel.svg"
          alt=""
          style="max-width: 100px"
        />
        <h1>Iniciar sesión</h1>
      </div>
      <div class="card-body">
        <form @submit.prevent="onSubmit" id="login-form" class="mt-4">
          <div class="form-group">
            <label for="username">Usuario:</label>
            <input
              type="text"
              class="form-control"
              id="username"
              name="username"
              v-model="username"
              required
            />
          </div>
          <div class="form-group">
            <label for="password">Contraseña:</label>
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
              v-model="password"
              required
            />
          </div>
          <div class="form-group">
            <div class="form-check mb-3">
              <!-- Checkbox para reCAPTCHA -->
              <input
                class="form-check-input"
                type="checkbox"
                id="recaptchaCheckbox"
                v-model="agreeCatchap"
                required
              />
              <label class="form-check-label" for="recaptchaCheckbox">
                Soy humano (verificación reCAPTCHA)
              </label>
            </div>
          </div>
          <button
            :disabled="!agreeCatchap"
            type="submit"
            class="btn btn-primary"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { showAlert } from "@/alert/index";
import { useMarvelStore } from "@/pinia/index";
import { defineComponent, ref } from "vue";


defineComponent({
  name: "LoginVue",
});
const agreeCatchap = ref(false);
const username = ref("");
const password = ref("");

const onSubmit = () => {
  if (username.value == "" && password.value == "") {
    showAlert("error", "ingresa tus credenciales de forma correcta");
    return;
  }
  const store = useMarvelStore();
  store.Login(username.value, password.value);
};
</script>

<style scoped>
/* Estilos adicionales si es necesario */
</style>
