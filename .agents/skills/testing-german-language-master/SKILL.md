# Testing: Agegnehu Tech German Language Master

## Setup

1. Install dependencies:
   ```bash
   npm install
   npx expo install react-dom react-native-web @expo/metro-runtime
   ```
2. Start the web dev server:
   ```bash
   npx expo start --web --port 8081
   ```
3. Open `http://localhost:8081` in Chrome

## App Architecture

- **Single-file app**: `App.js` uses `useState` for navigation (no router library)
  - `selectedChapter` state: controls chapter detail view
  - `showAbout` state: controls About Developer page
  - Priority: `showAbout` > `selectedChapter` > home list
- **Data**: `data.js` exports `chapters` (3 items), `agegnehuTechBook` (6 items, extended), `developerInfo`
- **Config**: `app.json` for Expo settings

## Navigation Flow

1. **Home Screen** → shows FlatList of chapters + "About the Developer" button at bottom
2. **Chapter Detail** → click any chapter card → shows German-Amharic lesson pairs
3. **About Developer** → click "About the Developer / ስለ ገንቢው" button → shows bilingual biography
4. **Back** → click "← ወደ ማውጫ ተመለስ" on any detail/about page

## Key Content to Verify

- **Home**: Header "Agegnehu Tech" + "German Language Master", 3 chapter cards with Amharic titles
- **Chapter 1**: 3 lesson rows (W/Wasser, V/Vater, ß/Eszett) with Amharic translations
- **About page**: Name "Agegnehu Shibiru", badge "Creator & Developer", English bio mentioning "Ethiopian Navy (Commando)" and "Hantate, Sidama", Amharic bio section, contact emails (agegnehushibiru2002@outlook.com, agegnehushibiru5@gmail.com)

## Notes

- The app renders Amharic (Ge'ez script) text. Ensure the browser/device supports this script.
- The `agegnehuTechBook` data (6 chapters with `en` field) is not yet wired into the UI — only `chapters` (3 items) are rendered.
- Email links use `Linking.openURL('mailto:...')` — on web this may open the default mail client or show a browser prompt.
- No backend or API required — all data is local/static.

## Devin Secrets Needed

None — this is a fully local/offline app with no external dependencies.
