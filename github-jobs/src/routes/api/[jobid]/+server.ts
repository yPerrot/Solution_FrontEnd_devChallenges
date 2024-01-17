import { json } from '@sveltejs/kit';

// API CALL 

export async function GET(request) {
    const jobid = request.params.jobid;
    
    const response = await fetch('https://civiweb-api-prd.azurewebsites.net/api/Offers/details/' + jobid, {
        method: "GET",
        headers: {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }
    })

	return json(await response.json());
}
