# HANDOFF

**Goal:** MoodMix — an interactive personal playlist filter (mood, genre/era, artist) with live song lookup, custom mood tagging, and 30-second audio previews built for a class assignment and personal use.

**Live link and repo:** None yet

**Files:**
- `index.html` - Main page layout, desktop sidebar navigation, playlist hero header, collapsible MoodMix & Look Up Song drawers, tracklist table, and fixed bottom audio player.
- `style.css` - Dark streaming-inspired theme, dynamic 4-album cover collage, filter pills, inline mood tag inputs, and mobile responsive layout (`@media (max-width: 860px)`).
- `script.js` - Master 84-song "Car rides" dataset, `localStorage` persistence for custom songs/pills/tags/saved mixes, iTunes JSONP search & 30s preview fetcher, Web Audio synth fallback, filtering/stats logic, and DOM rendering.
- `README.md` - Project overview, feature list, usage guide, and file structure.
- `HANDOFF.md` - Current project state and handoff notes for future sessions.

**Working now:** Full app runs cleanly in plain HTML, CSS, and JavaScript with no build step: 84 built-in songs, live multi-field filtering (mood, genre/era, artist), saved standalone sub-playlists, live iTunes song search + custom mood/genre tagging, inline `+ mood` tagging on track rows, 30-second audio previews with album artwork hydration, and responsive phone/laptop layout.

**Last session:** Reviewed `index.html`, `script.js`, and `style.css` for submission readiness, confirmed the app is complete without adding extra UI clutter, and generated `README.md` and `HANDOFF.md`[cite: 16, 17, 18].

**Next step:** Paste this into `HANDOFF.md` at the top level of your repo, commit it (along with your updated `README.md`), test your live GitHub Pages link on desktop and mobile, and submit the assignment.

**Decisions:**
- Kept the existing flat file structure (`index.html`, `style.css`, `script.js`) since all three files are clean, well-organized, and working[cite: 16, 17, 18].
- Avoided adding extra export/clipboard buttons before submission so the user experience stays clean and easy to understand.
- Used browser `localStorage` for user-added songs, custom mood tags, and saved sub-playlists so no API keys or backend servers are needed[cite: 17].

**APIs and data:**
- **iTunes Search API (JSONP):** `https://itunes.apple.com/search?term=<query>&entity=song&limit=<n>&callback=<cb>` (no API key required; uses `trackName`, `artistName`, `primaryGenreName`, `releaseDate`, `trackTimeMillis`, `previewUrl`, and `artworkUrl100`)[cite: 17].
- **Browser `localStorage` keys:** `moodmix_saved_playlists_v1`, `moodmix_custom_songs_v1`, `moodmix_custom_pills_v1`, `moodmix_extra_song_tags_v1`, `moodmix_artwork_urls_v1`[cite: 17].
- **Built-in dataset:** `defaultPlaylistSongs` array (84 built-in tracks) inside `script.js`[cite: 17].

**How to check it:**
1. Create a file named `HANDOFF.md` at the top level of your repository, paste the text above into it, and commit with the message `Add HANDOFF.md for submission`.
2. Open your live GitHub Pages URL (or `index.html`) on both a laptop and a phone.
3. Click **▶ Play** on a song to verify 30-second previews play and album covers load, click **✨ MoodMix** to test filtering and saving a sub-playlist, and click **➕ Look Up Song** to search, preview, and add a track with custom mood tags.