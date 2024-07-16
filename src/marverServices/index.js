import axios from "axios";

//convertir a variables de entorno
const dominio = "gateway.marvel.com";
const hash = "b86e2a6f7ff9956fe0acacf8de8eaa01";
const apikey = "ae6b4d4db088cbf3dea2657b9c6e17ad";
const ts = 1721089079;

const marvelServices = {
  getCharacters: async () => {
    return await axios(`https://${dominio}/v1/public/characters`, {
      params: {
        ts: ts,
        apikey: apikey,
        hash: hash,
      },
    });
  },
  getCharacterForId: async (id) => {
    return await axios(`https://${dominio}/v1/public/characters/${id}`, {
      params: {
        ts: ts,
        apikey: apikey,
        hash: hash,
      },
    });
  },
};

export default marvelServices;
