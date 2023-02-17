import axios from 'axios';

namespace API_URL {
  export const HOST = 'http://localhost:8000';
  export const CUSTOMER_ALL = HOST + '/invoice/customer/getAll';
  export const HANYO_EDITOR_TRHK_KBN = HOST + '/invoice/hanyo/v-select-editor/GM0001';
  export const HANYO_EDITOR_TAX = HOST + '/invoice/hanyo/v-select-editor/GM0002';
  export const HANYO_EDITOR_CLOSE_DAY = HOST + '/invoice/hanyo/v-select-editor/GM0003';
  export const HANYO_EDITOR_COLL_CYCLE = HOST + '/invoice/hanyo/v-select-editor/GM0004';
  export const HANYO_EDITOR_SHAIN = HOST + '/invoice/shain/v-select-editor';
  export const CUSTOMER_CREATE_UPDATE = HOST + '/invoice/customer';
  export const AC_EDITOR = HOST + '/invoice/ac/v-select-editor/';
}

export default API_URL

