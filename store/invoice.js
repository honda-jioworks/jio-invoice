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

export const id = () => ({
  invoice_id: '',
})

export const mutation = {
  set(id, companyData) {
    Object.keys(companyData.invoice_id).forEach((key) => {
      id[key] = companyData[key]
    })
  },
}
