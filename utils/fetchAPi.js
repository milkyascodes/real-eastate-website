import axios from "axios";


export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '295d2a03bemsh028c4896ca2bc2dp16ddfajsn81d638536bd8',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })

    return data;

}