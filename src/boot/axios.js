import Vue from "vue";
import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

Vue.prototype.$axios = axios;
