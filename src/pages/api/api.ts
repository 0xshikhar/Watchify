import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com/";

const options = {
    // method: 'GET',
    // url: 'https://youtube138.p.rapidapi.com/auto-complete/',
    params: { q: 'desp', hl: 'en', gl: 'US' },
    headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

// console.log("Youtube",process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,);
// console.log("env local access",process.env.YOUTUBE_API_KEY,);

// axios.request(options).then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     console.error(error);
// });

const fetchDataFromApi = async () => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
    // const response = await axios.request(options);
    // return response.data;
}