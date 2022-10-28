import axios, { AxiosResponse } from "axios";
import ApiAnswer from "src/types/ApiAnswer";

describe("Axios mock test", () => {
	test("Should get data from __mocks__", async () => {
		let Response:AxiosResponse;
		await axios
			.get("./empty.json")
			.then((res) => (Response = res))
			.catch((e) => fail(e));
		expect(Response!.data.timezone).toBe("Europe/Berlin");
	});
});
