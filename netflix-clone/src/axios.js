// every single request that we would send would be having the same structure
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
// instance.get('123'); => // https://api.themoviedb.org/3/123

export default instance;
