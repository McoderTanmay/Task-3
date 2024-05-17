import { createContext, useEffect, useState } from "react";
import PropType from "prop-types"
import { getRequest, baseUrl } from "../utils/services";

export const fetchContext = createContext();

export const FetchContextProvider = ({children, fetchRecords}) =>{
    const [records, setRecords] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false); 
    useEffect(()=>{
        const getAllDocuments = async()=>{
            try {
                setIsLoading(true);
                let response = await getRequest(`${baseUrl}`);
                response = await response.json()
                console.log(response);
                setRecords(response);
                setIsLoading(false);
            } catch (error) {
                setError(error);
            }
        }
        getAllDocuments();
    },[fetchRecords])
    
    FetchContextProvider.propType ={
        children : PropType.node.isRequired,
        fetchBtn : PropType.bool.isRequired
    }

    return (<fetchContext.Provider
        value={{records,
                error,
                isLoading}}
    >{children}</fetchContext.Provider>)
}
