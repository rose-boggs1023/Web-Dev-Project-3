# Web-Dev-Project-3


# Web-Dev-Project-3

## Accessibility Improvements

- Fixed navigation links to ensure every link has accessible text.
- Updated text and background colors to meet WCAG AA contrast requirements.
- Added labels to all contact form fields.
- Added instructions using `aria-describedby` to help users understand the form requirements.
- Grouped contact form fields using a `fieldset` and `legend`.
- Added required-field and email format validation.

## Gestalt Design Principles

- **Proximity:** Related content is grouped together in sections and project cards to help visitors understand which information belongs together.
- **Similarity:** Consistent colors, fonts, spacing, and styling across all three pages create a unified visual experience.

## Color Palette

- **Primary:** `#0b0b0b` (Black)
- **Secondary:** `#087a3e` (Green)
- **Background:** `#ffffff` (White)
- **Text:** `#333333` (Dark Gray)
- **Footer:** `#243746` (Dark Blue-Gray)

## Milestone 3: JavaScript Functionality

### DOM Manipulation
- Added a Show More / Show Less button using JavaScript.
- Used `querySelector()` to select page elements.
- Used `addEventListener()` to respond to button clicks.
- Content appears and disappears without reloading the page.

### Form Validation
- Added JavaScript validation for the contact form.
- Prevented form submission when required fields are empty or the email address is invalid.
- Displayed accessible error messages directly on the page.
- Used `aria-invalid` to identify fields with errors.
- Automatically cleared error messages when fields are corrected.
- Moved keyboard focus to the first invalid field.

### API Fetch 
- Connected to the free Open-Meteo weather API.
- Displayed current weather information for Chicago, Illinois.
- Retrieved temperature, humidity, wind speed, and update time.
- Added error handling to display a message if weather data cannot be loaded.


