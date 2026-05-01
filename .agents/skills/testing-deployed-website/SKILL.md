# Testing: Agegnehu Tech German Language Master (Deployed Website)

## Overview
This skill covers end-to-end testing of the German Language Master app deployed to GitHub Pages.

## Devin Secrets Needed
- `EXPO_TOKEN` — Expo access token for triggering APK builds (org-scoped)

## Deployed URLs
- **Website**: `https://agegnehuagegnehu900-ops.github.io/agegnehu-tech-apps/`
- **APK**: Check the `DOWNLOAD APP` button on the website or the PR description for the current Expo artifact URL
- **sitemap.xml**: Append `/sitemap.xml` to the website URL
- **robots.txt**: Append `/robots.txt` to the website URL

## Pre-Test Verification (via curl)
Before launching the browser, verify the site is live and SEO is in place:
```bash
# Check site is live
curl -s -o /dev/null -w "%{http_code}" "https://agegnehuagegnehu900-ops.github.io/agegnehu-tech-apps/"
# Should return 200

# Check SEO meta tags
curl -s "https://agegnehuagegnehu900-ops.github.io/agegnehu-tech-apps/" | grep -i 'meta name="keywords"'

# Check sitemap
curl -s "https://agegnehuagegnehu900-ops.github.io/agegnehu-tech-apps/sitemap.xml"

# Check robots.txt
curl -s "https://agegnehuagegnehu900-ops.github.io/agegnehu-tech-apps/robots.txt"

# Check APK URL is valid (returns 200)
curl -s -o /dev/null -w "%{http_code}" -L "<APK_URL>"
```

## Browser GUI Testing Flow
1. **Navigate** to the GitHub Pages URL in Chrome
2. **Home screen** — Verify:
   - "Agegnehu Tech" header + "German Language Master" subtitle
   - "489+ Vocabulary Items | 8 Chapters" counter (may change as content grows)
   - All 8 chapter cards with item counts
   - Search bar at top
3. **Scroll down** — Verify:
   - Chapter 8 (Grammar) visible at bottom
   - Green "DOWNLOAD APP (APK)" button
   - "About the Developer" button
4. **Click DOWNLOAD APP** — Verify APK download starts (check Chrome download notification for file size)
5. **Click a chapter** (e.g., Travel) — Verify:
   - Chapter title and description
   - German vocabulary items with Amharic translations
   - Pro Tips in Amharic below each item
   - Section headers with emoji icons
6. **Click back button** ("← ወደ ማውጫ ተመለስ") — Returns to home
7. **Click search bar** — Opens search page
   - Type "Arbeit" or any German/Amharic word
   - Verify results appear with chapter labels
8. **Click About Developer** — Verify:
   - "Agegnehu Shibiru" name and avatar
   - English biography mentioning Ethiopian Navy (Commando), Hantate, Sidama
   - Amharic biography section
   - Contact emails: agegnehushibiru2002@outlook.com, agegnehushibiru5@gmail.com

## Expected Chapter Data
| Chapter | Title | Items |
|---------|-------|-------|
| 1 | Alphabet | 32 |
| 2 | Greetings | 44 |
| 3 | Numbers | 66 |
| 4 | Travel | 110 |
| 5 | Family & Emotions | 75 |
| 6 | Work & Career | 61 |
| 7 | Emergency & Health | 71 |
| 8 | Grammar | 30 |

Note: Item counts may change as content is expanded. Verify against the data files if counts differ.

## App Architecture Notes
- React Native (Expo) app with web export via `npx expo export --platform web`
- Static files deployed to `gh-pages` branch via `git subtree`
- GitHub Pages serves from the `gh-pages` branch root
- The app is a single-page application; `404.html` handles SPA routing
- `.nojekyll` file disables Jekyll to allow `_expo/` directory serving
- Content is in modular data files (`vocabulary.js`, `grammar.js`, `data.js`)
- The DOWNLOAD APP button only renders when `Platform.OS === 'web'`

## Common Issues
- **GitHub Pages cache**: After deploying, the site may take 1-2 minutes to update. If you see stale content, try a hard refresh or open in an incognito window.
- **APK URL expiration**: Expo artifact URLs might expire after some time. If the DOWNLOAD APP button link returns 404, a new EAS build may be needed.
- **Bundle hash changes**: Each `expo export` generates a new JS bundle hash. The `index.html` script tag must reference the correct hash.
- **OAuth scope for GitHub Releases**: The git credential proxy may not support GitHub API calls for creating releases. Use Expo artifact URLs or ask the user to manually upload APK to GitHub Releases.
