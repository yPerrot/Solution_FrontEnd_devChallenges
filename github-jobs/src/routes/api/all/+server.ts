import { json } from '@sveltejs/kit';

// API CALL 

export async function GET(request) {
    const skip = request.url.searchParams.get('skip') || 0;
    const search = request.url.searchParams.get('search') || "";
    const locationId = request.url.searchParams.get('locationId') || "";
    const duration = request.url.searchParams.get('duration');
    
    const response = await searchJobs(skip, search, locationId, duration);

	return json(await response.json());
}

async function searchJobs(skip: string | number, search: string, locationId: string, duration: string | null) {

    const parsedLocationId = parseInt(locationId)
    const countriesIds = !isNaN(parsedLocationId) ? [ locationId ] : [] 
    const missionsDurations = duration ? [ ...duration.split(',') ] : [];

    return await fetch('http://civiweb-api-prd.azurewebsites.net/api/Offers/search', {
        method: "POST",
        body: JSON.stringify({
            "skip": skip,
            "limit": 5,
            "query": search,

            "activitySectorId": [],
            "missionsTypesIds": [],
            "missionsDurations": missionsDurations,
            "gerographicZones": [],
            "countriesIds": countriesIds,
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