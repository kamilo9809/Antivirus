export interface InstitutionsModel {
  id: number;

  idStatus: {
    id: number;
    statusReview: string;
  };

  ubicationsInstitutions: {
    id: number;
    zona: string;
  };

  name: string;
  observation: string;
  directions: string;
  generalLink: string;
  carerLink: string;
  bienestarLink: string;
  proccesLink: string;
}
