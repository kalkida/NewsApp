import {articles_url , _api_key,country_code, catagory} from '../config/rest_config'

export async function getArticles(){

    try {
        let articles =await fetch(`${articles_url}?country=${country_code}&
        catagory=${catagory}`,{
            headers:{
                'X_API_KEY': _api_key
            }
        });

        let result = await articles.json();
        articles=null;
        return result.articles;
    }
    catch(error){
        throw error;
    }
}