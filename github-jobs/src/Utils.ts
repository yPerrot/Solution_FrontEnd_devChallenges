export function getReleaseDate(date: string) {
    var t1 = new Date(date);
    var t2 = new Date();

    return Math.floor((t2.valueOf() - t1.valueOf()) / (24 * 3600 * 1000));
}

export function getLogoURL(url: string | null) {
    if (url && url !== "null") return url;
    return "";
}