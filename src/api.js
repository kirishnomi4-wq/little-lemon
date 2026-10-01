// Mock booking API (same logic as the course-provided api.js).
// fetchAPI(date) returns the available booking times for a date.
// submitAPI(formData) simulates sending the reservation to a server.

const seededRandom = (seed) => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return () => (s = (s * a) % m) / m;
};

export const fetchAPI = (date) => {
  const result = [];
  const random = seededRandom(date.getDate());
  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) result.push(`${i}:00`);
    if (random() < 0.5) result.push(`${i}:30`);
  }
  return result;
};

export const submitAPI = (formData) => Boolean(formData);
