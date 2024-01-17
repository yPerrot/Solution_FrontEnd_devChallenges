
export const load = async ({ cookies, params }) => {
	const response = await fetch('https://civiweb-api-prd.azurewebsites.net/api/Offers/details/' + params.jobid, {
        method: "GET",
        headers: {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }
    })

	return await response.json();
};