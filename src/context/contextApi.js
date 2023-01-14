// import React, { createContext, useState, useEffect } from "react";
// import { fetchDataFromApi } from "../pages/api/api";

// export const ContextApi = createContext();

// export const ContextApiProvider = (props) => {
//     const [loading, setLoading] = useState(false);
//     const [searchResults, setSearchResults] = useState(false);
//     const [selectCategories, setSelectCategories] = useState("New");
//     const [mobileMenu, setMobleMenu] = useState(false);

//     useEffect(() => {
//         fetchSelectedCategoryData(selectCategories);
//     }, [selectCategories]);

//     const fetchSelectedCategoryData = (query) => {
//         setLoading(true);
//         fetchDataFromApi(`search/?=${query}`).then((res) => {
//             console.log(res);
//             // setSearchResults(res);
//             setLoading(false);
//         });
//     };

//     return (
//         <ContextApi.Provider
//             value={{
//                 loading,
//                 setLoading,
//                 searchResults,
//                 setSearchResults,
//                 selectCategories,
//                 setSelectCategories,
//                 mobileMenu,
//                 setMobleMenu,
//             }}
//         >
//             {props.children}
//         </ContextApi.Provider>
//     );

//     // const [videos, setVideos] = useState([]);
//     // const [selectedVideo, setSelectedVideo] = useState(null);

//     // useEffect(() => {
//     //     const fetchVideos = async () => {
//     //         const {data} = await fetchDataFromApi();
//     //         setVideos(data.items);
//     //         setSelectedVideo(data.items[0]);
//     //     };
//     //     fetchVideos();
//     // }, []);

//     // const onVideoSelect = (video) => {
//     //     setSelectedVideo(video);
//     // };

//     // return (
//     //     <ContextApi.Provider value={{videos, selectedVideo, onVideoSelect}}>
//     //         {children}
//     //     </ContextApi.Provider>
//     // );
// };

import React, { createContext, useState, useEffect } from "react";

import { fetchDataFromApi } from "../pages/api/api";
export const Context = createContext();

export const ContextApiProvider = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        fetchSelectedCategoryData(selectedCategory);
    }, [selectedCategory]);

    const fetchSelectedCategoryData = (query) => {
        setLoading(true);
        fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
            // destructing res = {contents}
            console.log(contents);
            setSearchResults(contents);
            setLoading(false);
        });
    };

    return (
        <Context.Provider
            value={{
                loading,
                setLoading,
                searchResults,
                selectedCategory,
                setSelectedCategory,
                mobileMenu,
                setMobileMenu,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};