// src/config.js
const BASE_URL = 'http://10.58.52.121:8000';
const BASE_URL_ADMIN = 'http://10.58.52.146:8000';
const BASE_URL_ORDER = 'http://10.58.52.206:8000';

export const GET_MOCK_API = `${BASE_URL}/MOCK`;
export const GET_ORDER_API = `${BASE_URL_ORDER}/order`;
export const GET_ADMIN_SELECTLIST_API = `${BASE_URL_ADMIN}/admin/selectList`;
export const GET_ADMIN_UPDATELIST_API = `${BASE_URL_ADMIN}/admin/updateList`;
