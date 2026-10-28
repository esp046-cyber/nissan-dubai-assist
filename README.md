# Nissan Dubai Assist
Vanilla PWA: UAE driving guide, checklists, Nissan parts catalog, service calculator, emergency dial.
## Deploy from iPhone
1. Download the zip, unzip in Files, upload the files to a new GitHub repo with Working Copy (or the web uploader).
2. Settings > Pages > Branch `main` / root.
3. Open the Pages URL in Safari > Share > Add to Home Screen.
## Run locally
`npm start` then open http://localhost:8080. Tests: `npm test`.
## Standards
Severe-duty intervals: oil 10,000 km / 6 months, CVT fluid 40,000 km, brake fluid 24 months, battery check at 12 months. Always confirm against your owner manual.

## Verification
GCC Reference Specifications & UAE Market Estimates. Always verify exact OEM part supersessions by 17-digit VIN with an authorized UAE Nissan distributor (Arabian Automobiles in Dubai/Northern Emirates or Al Masaood Automobiles in Abu Dhabi) and consult your vehicle's factory Owner's Manual and B-pillar tyre placard.

## Tests
`npm install` then `npm test` (uses jsdom, dev-only; the app itself has no dependencies).
