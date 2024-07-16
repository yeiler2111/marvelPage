<template>
  <div class="container text-center my-3" v-show="loading">
    <h1 class="mb-5">Lista de Personajes Disponibles</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Fecha de Modificación</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.modified }}</td>
          <td>
            <button @click="verDetalles(item.id)" class="btn btn-info btn-sm">
              Ver Detalles
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import marvelServices from "@/marverServices/index";
import { useMarvelStore } from "@/pinia/index";
import router from "@/router/index";
import { defineComponent, onMounted, ref } from "vue";
defineComponent({
  name: "DashboardPages",
});
let loading = ref(false);
const data = ref("");
onMounted(async () => {
  try {
    const res = await marvelServices.getCharacters();
    data.value = res.data.data.results;
    useMarvelStore.characters = data;
    loading.value = true;
  } catch (e) {
    console.log("el error es: " + e);
  }
});
const verDetalles = (id) => {
  // Aquí puedes implementar la lógica para mostrar detalles del ítem seleccionado
  console.log("Ver detalles de:", id);
  router.push({ name: "detalles", params: { id: id } });
};
</script>
