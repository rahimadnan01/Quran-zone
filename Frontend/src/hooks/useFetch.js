import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url, method = "GET", requestData) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            console.log(url, method);
            try {
                let response = await axios({
                    url,
                    method,
                    data: requestData

                });

                if (response.status >= 200 && response.status < 300) {
                    setData(response.data.data);
                    setLoading(false)
                } else {
                    throw new Error(`HTTP error: ${response.status}`);
                }
            } catch (error) {
                console.log(error)
            }
        };

        if (url) fetchData(); // Ensure URL is provided before calling

    }, [url, method]); // Correct dependencies

    return { data, loading };
};

export default useFetch;

