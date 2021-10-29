import { test, expect } from "@jest/globals";
import main from "../src/index";

test("echo", () => {
  expect(main("echo2")).toBe("echo2");
});
