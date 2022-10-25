import axios from "axios";
import ApiAnswer from "src/types/ApiAnswer";
// import * as data from "__mocks__/Weatherdata.json"
// import * as data from "./empty.json"

describe("Axios mock test", () => {
	test("Should get data from __mocks__", async () => {
		let data: ApiAnswer;
		await axios
			.get("./empty.json")
			.then((res) => expect(res.data.timezone).toBe("Europe/Berlin"))
			.catch((e) => console.log(e));
	});
});
