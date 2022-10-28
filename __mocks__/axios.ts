import * as data from "./Weatherdata.json";

const mockedResp = {
	data: data,
	status: 200,
	statusText: "OK",
	headers: {},
	config: {},
};

export default {
	get: jest.fn(() => Promise.resolve(mockedResp))
}