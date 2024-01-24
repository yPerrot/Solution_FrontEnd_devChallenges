interface Root {
    id: number

    // Missopn
    missionTitle: string
    missionType: string
    missionTypeEn: string
    missionDescription: string
    missionProfile: string
    missionDuration: number
    missionStartDate: string
    missionEndDate: string

    // Organization
    organizationId: number
    organizationName: string
    organizationPresentation: string
    organizationExpertise: any
    organizationCountryCounter: string
    organizationPathImage: string
    organizationUrlImage: string

    // Location
    cityAffectationId: number
    cityName: string
    cityNameEn: string
    cityAffectation: string
    countryId: string
    countryName: string
    countryNameEn: string


    viewCounter: number
    candidateCounter: number
    pathImage: string

    activitySectorN1: string
    activitySectorN2: any
    activitySectorN3: any
    activitySectorN1Id: number

    ca: string
    effectif: number
    activitySectorOfferId: number
    levelStudyIds: any
    specializations: Specialization[]
    creationDate: string
    startBroadcastDate: string
    durationBroadcast: number
    reference: string
    contactName: string
    indemnite: number
    idMotifDesactivationOffre: number
    contactEmail: string
    idNomenclatureSecteur: any
    externalJobId: any
    dateCandidature: any
}

interface Specialization {
    specializationId: number
    specializationParentId: number
    specializationLabel: string
    specializationLabelEn: string
}


type QueryParams = {
    query?: string;
    locationId?: number;
    duration: {
        "12": boolean;
        "18": boolean;
        "24": boolean;
    };
}