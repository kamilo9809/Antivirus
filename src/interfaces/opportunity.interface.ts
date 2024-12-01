export interface OpportunityModel{
    id: number;
    idCategories: {
        id: number;
        categories: string;
    },
    idStatus: {
        id: number;
        status: string;
    },
    typeOpportunities: {
        id: number;
        oportunityType: string;
    },
    observations: string;
    name: string;
    descriptions: string;
    applications: string;
    requeriments: string;
    guide: string;
    adicionalDates: string;
    contactChannels: string;
}