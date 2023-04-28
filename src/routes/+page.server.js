
import { username, password, domain} from '$env/static/private';
let headers = new Headers();

let basicAuth = Buffer.from(username + ":" + password).toString('base64');

headers.set(
    "Authorization", 
    "Basic " + basicAuth,
    
        
);

async function getApiData() {
    return await fetch(
        `https://${domain}/rest/api/latest/search`, {
        method: "GET",
        headers: headers,
        
    }
    ).then((data) => {
             return data.json()
        })
    .catch((reason) => {
        return reason.json()
    })
    }     


export async function load() {
    return await getApiData();

}
