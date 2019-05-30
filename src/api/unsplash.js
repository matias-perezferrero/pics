import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID 1b4124b41a260ccf3bb73e1e8e2ba11b9a297d331ffefbe9405547d1eff6b3d5"
  }
});
