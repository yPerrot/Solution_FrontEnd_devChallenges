import { json } from '@sveltejs/kit';

// API CALL 

export async function GET(request) {
    const skip = request.url.searchParams.get('skip') || 0;
    
    const response = await fetch('http://civiweb-api-prd.azurewebsites.net/api/Offers/latest', {
        method: "POST",
        body: JSON.stringify({
            "skip": skip,
            "limit": 5
        }),
        headers: {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }
    })

	return json(await response.json());
}
