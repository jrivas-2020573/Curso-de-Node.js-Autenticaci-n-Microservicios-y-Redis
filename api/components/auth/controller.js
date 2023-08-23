const auth = require("../../../auth");
const bcrypt = require("bcrypt");
const TABLA = "auth";

module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require("../../../store/dummy");
  }


  async function login(username, password) {
    console.log("Attempting login with username:", username); // Agrega este registro
  
    try {
      const data = await store.query(TABLA, { username: username });
  
      console.log("Retrieved user data:", data); // Agrega este registro
  
      const sonIguales = await bcrypt.compare(password, data.password);
  
      if (sonIguales) {
        console.log("Password comparison successful"); // Agrega este registro
        const token = await auth.sign(data);
        return token;
      } else {
        console.log("Password comparison failed"); // Agrega este registro
        throw new Error("Invalid information");
      }
    } catch (error) {
      console.error("Error during login:", error); // Agrega este registro
      throw error;
    }
  }
  
  async function upsert(data) {
    const authData = {
      id: data.id,
    };

    if (data.username) {
      authData.username = data.username;
    }

    if (data.password) {
      authData.password = await bcrypt.hash(data.password, 5);
    }

    return store.upsert(TABLA, authData);
  }




  return {
    upsert,
    login,
  };
};
