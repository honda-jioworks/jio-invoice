import axios from 'axios';

namespace API_URL {
  export const HOST = 'http://localhost:8000';
  export const CUSTOMER_ALL = HOST + '/invoice/customer/getAll';
  export const HANYO_EDITOR_TRHK_KBN = HOST + '/invoice/v-select-editor/GM0001';
  export const HANYO_EDITOR_TAX = HOST + '/invoice/v-select-editor/GM0002';
  export const HANYO_EDITOR_CLOSE_DAY = HOST + '/invoice/v-select-editor/GM0003';
  export const HANYO_EDITOR_COLL_CYCLE = HOST + '/invoice/v-select-editor/GM0004';
  export const HANYO_EDITOR_SHAIN = HOST + '/invoice/v-select-editor/shain';
}

export default API_URL

