export const state = () => ({
  officeName_id: '',
  officeName: '',
  CEOName_id: '',
  CEOName: '',
  postalCode_id: '',
  postalCode: '',
  addressOne_id: '',
  addressOne: '',
  addressTwo_id: '',
  addressTwo: '',
  telNumber_id: '',
  telNumber: '',
  faxNumber_id: '',
  faxNumber: '',
  officeUrl_id: '',
  officeUrl: '',
  fileName_id: '',
  fileName: '',
});

export const mutations = {
  set(state, companyData) {
    Object.keys(companyData).forEach((key) => {
      state[key] = companyData[key];
    });
  },
};
