export interface LaunchResponse {
    id: string;
    name: string;
    links: {
        patch: {
            large: string;
        }
        webcast?: string;
    };
    date_utc: string;
    rocket: string;
    success: boolean;
    flight_number: number;
    details?: string;
}