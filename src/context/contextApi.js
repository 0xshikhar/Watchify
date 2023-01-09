import React, {createContext, useState, useEffect} from "react";
import {fetchDataFromApi} from "../utils/fetchDataFromApi";

export const ContextApi = createContext();

export const ContextApiProvider = ({children}) => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
            const {data} = await fetchDataFromApi();
            setVideos(data.items);
            setSelectedVideo(data.items[0]);
        };
        fetchVideos();
    }, []);

    const onVideoSelect = (video) => {
        setSelectedVideo(video);
    };

    return (
        <ContextApi.Provider value={{videos, selectedVideo, onVideoSelect}}>
            {children}
        </ContextApi.Provider>
    );
}