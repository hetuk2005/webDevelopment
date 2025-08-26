import { SearchParam } from "./Param";

test("Test The Search Param", () => {
  expect(
    SearchParam(
      `https://jsonplaceholder.typicode.com/todos?_limit=10&_page=4`,
      `_limit`
    )
  ).toBe("10");
});
