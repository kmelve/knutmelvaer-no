import { slugDate } from "../dateUtils";

test("format URL for slugs", () => {
  const dateString = "2021-01-01";
  expect(slugDate(dateString)).toBe("2021/01");

  expect(slugDate("")).toBe(undefined);
});
