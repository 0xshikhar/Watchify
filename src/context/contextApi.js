import React, {createContext, useState, useEffect} from "react";
import {fetchDataFromApi} from "../utils/fetchDataFromApi";

export const ContextApi = createContext();

export const ContextApiProvider = (props) => {
    const [loading , setLoading ] = useState(false)
    const [searchResults, setSearchResults] = useState(false)
    const [ selectCategories, setSelectCategories]= useState(false);
    const [ mobileMenu, setMobleMenu]= useState(false);

    useEffect(()={

    },[])

    return (
        <ContextApi.Provider value={{
            loading,
            setLoading,
            searchResults,
            setSearchResults,
            selectCategories,
            setSelectCategories,
            mobileMenu,
            setMobleMenu
        }}>
            {props.children}
        </ContextApi.Provider>
    )

    // const [videos, setVideos] = useState([]);
    // const [selectedVideo, setSelectedVideo] = useState(null);

    // useEffect(() => {
    //     const fetchVideos = async () => {
    //         const {data} = await fetchDataFromApi();
    //         setVideos(data.items);
    //         setSelectedVideo(data.items[0]);
    //     };
    //     fetchVideos();
    // }, []);

    // const onVideoSelect = (video) => {
    //     setSelectedVideo(video);
    // };

    // return (
    //     <ContextApi.Provider value={{videos, selectedVideo, onVideoSelect}}>
    //         {children}
    //     </ContextApi.Provider>
    // );
}