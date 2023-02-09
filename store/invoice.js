export const state = () => ({
  invoice_id: '',
  invoice_date: '',
  invoice_num: '',
  cstm_name: '',
  invoice_title: '',
  issued_check: '',
  price: '',
})

export const mutations = {
  set(state, companyData) {
    Object.keys(companyData).forEach((key) => {
      state[key] = companyData[key]
    })
  },
}
