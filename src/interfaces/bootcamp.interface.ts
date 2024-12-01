export interface BootcampModel {
    id: number;
    idGeneral: {
        id: number;
        description: string;
    },
    idTemas: {
        id: number;
        topics: string;
    },
    nombre: string;
    informacion: string;
    idCostos: {
        id: number;
        costs: string;
    },
    idEstado: {
        id: number;
        status: string;
    }
}