import { ParsedUrlQuery } from "querystring";

export type ApiRequest = GetRequest | PostRequest;

export type GetRequest = {
    type: "GET";
    query?: ParsedUrlQuery;
    path?: string;
}

export type PostRequest = {
    type: "POST";
    body?: Record<string, unknown>;
    path?: string;
}

const BASE_URL = "http://cyclop-backend.ru/";

export default async function request(
    requestData: ApiRequest
): Promise<unknown>{
    const { path = '' } = requestData;
    const url = new URL(path, BASE_URL);

    if (requestData.type === 'GET') {
        const { query = {} } = requestData;
        Object.entries(query).forEach(([key, value = '']) => {
            url.searchParams.append(key, value.toString());
        });
    console.log("url - ", url);
    console.log("url.toString - ", url.toString());
        
        try {
            const res = await fetch(url);
            const result = await res.json();
            return result;
        } catch (err) {
            console.error("Error while GET request: ", err)
        }


    }

    if (requestData.type === 'POST') {
        const { body = {} } = requestData;

        try {
            const res = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(body)
            });
            const result = await res.json();
            return result;
        } catch (err) {
            console.error("Error while POST request: ", err)
        }


    }

    return;
}
