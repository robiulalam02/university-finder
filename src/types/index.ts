export interface University {
    id: string;
    name: string;
    country: string;
    city: string;
    tuitionFee: number;
    ranking: number;
    establishedYear: number;
    logo: string;
    ieltsScore: number;
    hasScholarship: boolean;
    workPermit: boolean;
    courses: string[];
    setting: "Metropolitan" | "Suburban" | "Town"; 
}

export type FilterParams = {
    name?: string;
    country?: string;
    minFee?: string;
    maxFee?: string;
    minRanking?: string;
    ielts?: string;
    page?: string;
    course?: string;
    workPermit?: string;
    setting?: string;
};