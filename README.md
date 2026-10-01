# Little Lemon – Table Booking Web App

Front-End Developer Capstone project (Meta / Coursera).
A responsive React web app for the Little Lemon Mediterranean restaurant in Chicago,
with an accessible, validated table reservation form.

## Features

- **Home page** – hero section, weekly specials, testimonials and "About" section (based on the Figma wireframe).
- **Reservations page** (`/booking`) – booking form with date, time, number of guests and occasion.
- **Confirmation page** (`/confirmed`) – shown after a successful booking.
- **Client-side validation** – HTML5 attributes (`required`, `min`, `max`) plus JavaScript validation with
  clear error messages; the submit button stays disabled until the form is valid.
- **State management** – `availableTimes` is managed in the parent `Main` component with `useReducer`
  (`initializeTimes` / `updateTimes`) and passed down to the child `BookingForm` component.
- **Accessibility** – semantic HTML (`header`, `nav`, `main`, `section`, `article`, `footer`, `address`),
  labels for every field, `aria-label`, `aria-invalid`, `aria-describedby`, `role="alert"` errors, alt text on images.
- **Responsive design** – desktop, tablet and mobile layouts with a mobile menu.
- **SEO** – meta description and Open Graph tags in `public/index.html`.
- **Unit tests** – Jest + React Testing Library.

## Getting started

Requirements: [Node.js](https://nodejs.org/) 18 or newer.

```bash
git clone <this-repository-url>
cd little-lemon
npm install
npm start
```

The app opens at http://localhost:3000.

## Running the tests

```bash
npm test
```

Press `a` to run all tests. Tests are in:

- `src/components/BookingForm.test.js` – rendering, HTML5 validation attributes, error messages, submit behaviour, `validate()` function
- `src/components/Main.test.js` – `initializeTimes` and `updateTimes` reducer functions

## Project structure

```
src/
  api.js                     # mock fetchAPI / submitAPI (course API logic)
  App.js                     # Header + Main + Footer
  components/
    Header.js, Nav.js, Footer.js
    Main.js                  # routes + availableTimes reducer (parent)
    HomePage.js              # hero, specials, testimonials, about
    BookingPage.js
    BookingForm.js           # child component with validation
    ConfirmedBooking.js
```
