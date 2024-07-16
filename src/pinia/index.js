// store.js
import { showAlert } from "@/alert/index";
import router from "@/router/index";
import { defineStore } from "pinia";
import { reactive } from "vue";

export const useMarvelStore = defineStore("useMarvelStore", {
  state: () => ({
    users: reactive([
      {
        id: 1,
        username: "admin@admin.com",
        password: "Admin",
        isLogueado: false,
      },
    ]),
    characters: reactive([]),
  }),
  actions: {
    Login(username, password) {
      const user = this.users.filter((user) => user.username == username);
      if (user.length == 1 && user[0].password == password) {
        showAlert("success", "te haz logueado con exito");
        router.push("/dashboard");
      } else {
        showAlert("error", "el usuario no existe en la base de datos");
      }
    },
  
  },
  getters: {},
});
