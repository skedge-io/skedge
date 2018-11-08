import React from "react";
import React, { craete } from "react-test-renderer";
import Details from "../Details";

test("snapshot", () => {
  const c = create(<Details />);
  expect(c.toJson()).toMatchSnapshot();
});
