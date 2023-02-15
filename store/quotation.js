export const state = () => ({
  quotation_id: '',
  quotation_date: '',
  quotation_num: '',
  cstm_name: '',
  quotation_title: '',
  issued_check: '',
  received_check: '',
  price: '',
})

export const mutations = {
  set(state, companyData) {
    Object.keys(companyData).forEach((key) => {
      state[key] = companyData[key]
    })
  },
}
