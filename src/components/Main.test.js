import { initializeTimes, updateTimes } from "./Main";
import { fetchAPI } from "../api";

describe("availableTimes reducer", () => {
  test("initializeTimes returns a non-empty list of times from the API", () => {
    const times = initializeTimes();
    expect(Array.isArray(times)).toBe(true);
    expect(times.length).toBeGreaterThan(0);
    expect(times).toEqual(fetchAPI(new Date()));
  });

  test("updateTimes returns the times for the selected date", () => {
    const date = "2030-05-20";
    const result = updateTimes([], { type: "UPDATE_TIMES", date });
    expect(result).toEqual(fetchAPI(new Date(date)));
  });

  test("updateTimes returns the same state for unknown actions", () => {
    const state = ["17:00"];
    expect(updateTimes(state, { type: "UNKNOWN" })).toBe(state);
  });
});
