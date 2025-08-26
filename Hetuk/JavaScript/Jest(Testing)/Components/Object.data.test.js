import { filter } from "./Object.data";

import data from "./Object.json";

test("Testing The Filter Object Is Similar Or Not", () => {
  expect(filter(data, 4)).toEqual(data[3]);
});
