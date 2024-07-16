<template>
  <div class="container mt-4">
    <button class="btn btn-danger" @click="router.push('/dashboard')">Volver</button>
    <div v-if="loading" class="character-details card">
      <div class="card-header text-center">
        <h1>{{ character.name }}</h1>
      </div>
      <div class="card-body">
        <div class="text-center">
          <img
            :src="
              character.thumbnail.path + '.' + character.thumbnail.extension
            "
            :alt="character.name"
            class="img-fluid rounded mx-auto d-block"
          />
        </div>
        <p class="mt-3">
          {{ character.description || "No description available." }}
        </p>

        <div>
          <h2>Comics</h2>
          <ul class="list-group list-group-flush">
            <li
              v-for="comic in character.comics.items"
              :key="comic.resourceURI"
              class="list-group-item"
            >
              {{ comic.name }}
            </li>
          </ul>
        </div>

        <div class="mt-3">
          <h2>Series</h2>
          <ul class="list-group list-group-flush">
            <li
              v-for="series in character.series.items"
              :key="series.resourceURI"
              class="list-group-item"
            >
              {{ series.name }}
            </li>
          </ul>
        </div>

        <div class="mt-3">
          <h2>Stories</h2>
          <ul class="list-group list-group-flush">
            <li
              v-for="story in character.stories.items"
              :key="story.resourceURI"
              class="list-group-item"
            >
              {{ story.name }} ({{ story.type }})
            </li>
          </ul>
        </div>

        <div class="mt-3">
          <h2>Events</h2>
          <ul class="list-group list-group-flush">
            <li
              v-for="event in character.events.items"
              :key="event.resourceURI"
              class="list-group-item"
            >
              {{ event.name }}
            </li>
          </ul>
        </div>

        <div class="mt-3">
          <h2>Links</h2>
          <ul class="list-group list-group-flush">
            <li
              v-for="url in character.urls"
              :key="url.url"
              class="list-group-item"
            >
              <a :href="url.url" target="_blank">{{ url.type }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div v-else class="text-center mt-5">
      <h2>Mostrando detalles del personaje...</h2>
    </div>
  </div>
</template>

<script setup>
import marvelServices from "@/marverServices";
import router from "@/router/index";
import { onBeforeMount, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

// Definición de las propiedades reactivas
const character = ref({});
const characterId = ref(null);
const loading = ref(false);
const error = ref(false);

const route = useRoute();
onBeforeMount(() => {
  characterId.value = route.params.id;
});

onMounted(async () => {
  loading.value = false;
  try {
    const response = await marvelServices.getCharacterForId(characterId.value);
    if (response?.data?.data?.results?.length > 0) {
      character.value = response.data.data.results[0];
    } else {
      throw new Error("No se encontraron los detalles del personaje");
    }
  } catch (err) {
    console.error("Error al cargar los detalles:", err);
    error.value = true;
  } finally {
    loading.value = true;
  }
});
</script>

<style scoped>
.character-details {
  font-family: Arial, sans-serif;
}

.character-details img {
  max-width: 100%;
  height: auto;
}

.character-details h1 {
  font-size: 2em;
  margin-bottom: 0.5em;
}

.character-details h2 {
  font-size: 1.5em;
  margin-top: 1em;
}

.character-details ul {
  list-style-type: none;
  padding: 0;
}

.character-details li {
  margin: 0.5em 0;
}

.text-center {
  text-align: center;
  font-family: Arial, sans-serif;
}
</style>
