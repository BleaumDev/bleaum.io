// The fallback is the ID that used to be hardcoded in layout.tsx, so analytics keeps working when the env var is unset.
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-NB2W40DTPK";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
// gtag is defined by the afterInteractive script in layout.tsx, which can run after the first effect.
// That script sends the first page view itself, so skipping the call before it exists loses nothing.
export const pageview = (url) => {
  window.gtag?.('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag?.('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
}; 