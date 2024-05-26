import React, { useEffect, useState } from 'react'

const useFetchData = (url) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false);

     useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    setIsError(true);
                    setIsLoading(false)
                    return
                }
                const responseData = await response.json();
                setData(responseData);
            } catch(err) {
                console.log(err);
                setIsError(true);
            }
            setIsLoading(false);
        }
        fetchData();
     }, [])
    return { isError, isLoading, data}
}

export default useFetchData;