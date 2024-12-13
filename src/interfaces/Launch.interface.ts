
export interface Launch {
    id: string,
    name: string;
    img: string,
    missionName: string,
    launchDate: string,
    rocketName: string,
    success: boolean,
    flightNumber: number;
    link?: string;
    description?: string;
}

