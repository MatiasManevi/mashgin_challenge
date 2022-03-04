import axios from 'axios';

const API = {
	init(baseURL) {
		axios.defaults.baseURL = baseURL;
		axios.defaults.headers.common['content-type'] = 'application/json';
		axios.defaults.headers.common['Accept'] = 'application/json';
		axios.defaults.timeout = 30000;
		axios.interceptors.response.use((response) => response.data);
	},

	getItems(query) {
		return this._get(`/items?${query}`);
	},

	_get(resource) {
		return axios.get(resource);
	},

	_post(resource, data) {
		return axios.post(resource, data);
	},
};

export default API;
