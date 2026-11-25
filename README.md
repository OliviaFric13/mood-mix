# MoodMix

MoodMix is an interactive streaming-style playlist web app built for a class assignment and personal listening. Instead of creating and managing dozens of separate playlists, you can filter a single master playlist (**"Car rides"**) by mood, genre/era, or artist, preview 30-second tracks live, and invite friends to look up and add new songs with their own custom vibe tags.

## Features

- **Smart MoodMix Filtering:** Filter your playlist in real time by **Mood/Vibe**, **Genre/Era**, or **Artist(s)** using either quick-click pills or custom search terms.
- **Save Standalone Sub-Playlists:** Save any filtered combination (like *80s Road Trip* or *Heartbreak Drive*) into the sidebar and quick-switcher bar without altering your master **Car rides** list.
- **Live Song Lookup & Custom Tagging:** Search the live iTunes catalog to preview songs and add recommendations to the playlist—choosing your own mood and genre tags (or skipping tagging to add right away).
- **Inline `+ mood` Tags:** Click `+ mood` on any track row to tag it with a new vibe, which automatically creates a reusable filter pill.
- **Live Audio Player & Dynamic Artwork:** Play 30-second song previews (with an offline Web Audio chord backup), view live vibe analytics (mix length, top mood, top genre), and see a dynamic 4-album cover collage that updates as you filter.
- **Responsive Design:** Adapts cleanly between desktop (with sidebar navigation) and mobile screens.

## How to Use

1. **Browse & Play:** Open `index.html` (or your GitHub Pages link) and click any song row—or **▶ Play** / **🔀 Shuffle**—to start listening.
2. **Filter by Vibe:** Click **✨ MoodMix**, then click quick-filter pills or type into the **Mood**, **Genre/Era**, or **Artist** boxes. Click **💾 Save These Songs as a Playlist** to keep a filtered mix in your sidebar.
3. **Add & Tag New Songs:** Click **➕ Look Up Song**, search for any artist or track, click **▶ Preview** to listen, or click **➕ Add to Playlist** to assign custom mood and genre tags before adding it.
4. **Tag Existing Songs:** Click **+ mood** in the Moods column of any track row to add a custom vibe tag on the spot.

## Project Structure

- `index.html` — Main page structure, hero header, collapsible MoodMix & Lookup drawers, tracklist table, and bottom audio player.
- `style.css` — Dark streaming-inspired theme, dynamic 4-tile album collage styles, and mobile responsive rules.
- `script.js` — Master 84-song dataset, `localStorage` persistence, iTunes JSONP search & preview fetcher, filtering logic, and audio controls.
