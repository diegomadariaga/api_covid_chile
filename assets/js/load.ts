import axios from "axios";

//fetches data from url with axios
const fetchData = async (url:any) => {
    try {
        const response = await axios.get(url);

        return response.data.data;
    } catch (error) {
        console.log(error);
    }
};

//iife
(async function () {
    let respuesta = await fetchData("https://atlas.jifo.co/api/connectors/e465a67e-df65-4576-8d6b-c6cb25184de1");
    console.log(respuesta[0][respuesta[0].length - 1]);
    /* respuesta.forEach((element:any) => {
        console.log(element);
    }); */
})();