import { json } from '@sveltejs/kit';

// API CALL 

export async function GET(request) {
    const skip = request.url.searchParams.get('skip') || 0;
    const search = request.url.searchParams.get('search');
    
    console.log(search);
    
    const response = search ? await searchJobs(skip, search) : await getLastest(skip);

	return json(await response.json());
}

async function getLastest(skip: string | number) {
    return await fetch('http://civiweb-api-prd.azurewebsites.net/api/Offers/latest', {
        method: "POST",
        body: JSON.stringify({
            "skip": skip,
            "limit": 5,
        }),
        headers: {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }
    })
}

async function searchJobs(skip: string | number, search: string) {
    return await fetch('http://civiweb-api-prd.azurewebsites.net/api/Offers/search', {
        method: "POST",
        body: JSON.stringify({
            "skip": skip,
            "limit": 5,
            "query": search,

            "activitySectorId": [],
            "missionsTypesIds": [],
            "missionsDurations": [],
            "gerographicZones": [],
            "countriesIds": [],
            "studiesLevelId": [],
            "companiesSizes": [],
            "specializationsIds": [],
            "entreprisesIds": [
              0
            ]
        }),
        headers: {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }
    })
}