export function getReleaseDate(date: string) {
    var t1 = new Date(date);
    var t2 = new Date();

    return Math.floor((t2.valueOf() - t1.valueOf()) / (24 * 3600 * 1000));
}

export function getLogoURL(url: string | null) {
    if (url && url !== "null") return url;
    return "";
}

export function getCurrentPage() {
    const pageAsString = localStorage.getItem("page") || '';
    const page = parseInt(pageAsString); 

    if (!page) {
      localStorage.setItem("page", "1");
      return 1;
    }

    return page;
}

export function getConfig(): QueryParams {
    const queryParams = JSON.parse(localStorage.getItem("queryParams") || 'null');

    if (!queryParams) {
      localStorage.setItem("page", "1");
      return {
        duration: {
            "12": false,
            "18": false,
            "24": false,
        }
      }
    }

    return queryParams;
}