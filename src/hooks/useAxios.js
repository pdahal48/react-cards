import { useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";

function useAxios(baseUrl) {
    const [state, setState] = useState([]);
  
    const addResponseData = async () => {
        const response = await axios.get(`${baseUrl}`);
        setState(pokemon => [...pokemon, {...response.data, id: uuid()}]);
    }
    
    return [state, addResponseData];

}

export default useAxios;