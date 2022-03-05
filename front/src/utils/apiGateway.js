import axios from 'axios';

const API = {
	init(baseURL) {
		axios.defaults.baseURL = baseURL;
		axios.defaults.headers.common['Content-Type'] = 'application/json;charset=utf-8';
		axios.defaults.headers.common['Accept'] = 'application/json';
		axios.defaults.timeout = 30000;
		axios.interceptors.response.use((response) => response.data);
	},

	getItems(query) {
		return this._get(`/items?${query}`);
	},

	getCategories(query) {
		return this._get(`/categories`);
	},

	createOrder(data) {
		return this._post(`/orders`, data);
	},

	_get(resource) {
		return axios.get(resource);
	},

	_post(resource, data) {
		return axios.post(resource, data);
	},
};

export default API;
