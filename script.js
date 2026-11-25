// ==========================================
// 1. DATA LAYER: "Car rides" Master Playlist (84 Built-In + Custom Songs, Tags & Album Art)
// ==========================================
const defaultPlaylistSongs = [
  { id: 1, title: "All Of The Girls You Loved Before", artist: "Taylor Swift", genre: "Pop", era: "2020s", moods: ["happy", "calm", "romantic"], duration: "3:41", icon: "💖" },
  { id: 2, title: "Where'd All the Time Go?", artist: "Dr. Dog", genre: "Indie / Folk", era: "2000s", moods: ["calm", "sad", "focus", "nostalgic"], duration: "4:27", icon: "🌅" },
  { id: 3, title: "FE!N", artist: "Travis Scott", genre: "Rap", era: "2020s", moods: ["party", "hype", "workout"], duration: "3:11", icon: "🔥" },
  { id: 4, title: "Last Night", artist: "Morgan Wallen", genre: "Country", era: "2020s", moods: ["party", "happy"], duration: "2:43", icon: "🤠" },
  { id: 5, title: "Espresso", artist: "Sabrina Carpenter", genre: "Pop", era: "2020s", moods: ["happy", "party"], duration: "2:55", icon: "☕" },
  { id: 6, title: "Heaven", artist: "Niall Horan", genre: "Pop", era: "2020s", moods: ["happy", "calm", "romantic"], duration: "3:06", icon: "🌤️" },
  { id: 7, title: "Pluto Projector", artist: "Rex Orange County", genre: "Indie / Folk", era: "2010s", moods: ["sad", "calm", "focus"], duration: "4:27", icon: "🪐" },
  { id: 8, title: "Let The Light In", artist: "Lana Del Rey", genre: "Indie / Folk", era: "2020s", moods: ["calm", "sad", "romantic"], duration: "4:38", icon: "🕯️" },
  { id: 9, title: "SICKO MODE", artist: "Travis Scott", genre: "Rap", era: "2010s", moods: ["party", "hype", "workout"], duration: "5:12", icon: "🚀" },
  { id: 10, title: "Whiskey Glasses", artist: "Morgan Wallen", genre: "Country", era: "2010s", moods: ["sad", "party"], duration: "3:54", icon: "🥃" },
  { id: 11, title: "Cruel Summer", artist: "Taylor Swift", genre: "Pop", era: "2010s", moods: ["party", "happy", "workout"], duration: "2:58", icon: "☀️" },
  { id: 12, title: "Please Please Please", artist: "Sabrina Carpenter", genre: "Pop", era: "2020s", moods: ["happy", "calm", "romantic"], duration: "3:06", icon: "💋" },
  { id: 13, title: "Mr. Brightside", artist: "The Killers", genre: "Rock / Pop-Punk", era: "2000s", moods: ["party", "happy", "nostalgic"], duration: "3:42", icon: "⚡" },
  { id: 14, title: "No Scrubs", artist: "TLC", genre: "R&B", era: "90s", moods: ["party", "happy", "nostalgic"], duration: "3:34", icon: "💿" },
  { id: 15, title: "Wonderwall", artist: "Oasis", genre: "Rock / Pop-Punk", era: "90s", moods: ["calm", "sad", "nostalgic", "acoustic"], duration: "4:18", icon: "🎸" },
  { id: 16, title: "All Too Well (10 Minute Version)", artist: "Taylor Swift", genre: "Pop", era: "2020s", moods: ["sad", "nostalgic"], duration: "10:13", icon: "🧣" },
  { id: 17, title: "Stick Season", artist: "Noah Kahan", genre: "Indie / Folk", era: "2020s", moods: ["sad", "calm", "acoustic"], duration: "3:02", icon: "🍂" },
  { id: 18, title: "goosebumps", artist: "Travis Scott", genre: "Rap", era: "2010s", moods: ["party", "calm", "workout"], duration: "4:03", icon: "🌃" },
  { id: 19, title: "Thinkin' Bout Me", artist: "Morgan Wallen", genre: "Country", era: "2020s", moods: ["happy", "party"], duration: "2:57", icon: "🛻" },
  { id: 20, title: "Yeah!", artist: "Usher", genre: "R&B", era: "2000s", moods: ["party", "happy", "nostalgic"], duration: "4:10", icon: "🎉" },
  { id: 21, title: "Dreams", artist: "Fleetwood Mac", genre: "Classic Rock", era: "70s", moods: ["calm", "happy", "nostalgic", "focus"], duration: "4:17", icon: "🌙" },
  { id: 22, title: "Take On Me", artist: "a-ha", genre: "Pop", era: "80s", moods: ["happy", "party", "nostalgic"], duration: "3:45", icon: "🕹️" },
  { id: 23, title: "Iris", artist: "Goo Goo Dolls", genre: "Rock / Pop-Punk", era: "90s", moods: ["sad", "calm", "nostalgic", "romantic"], duration: "4:49", icon: "🌧️" },
  { id: 24, title: "Feather", artist: "Sabrina Carpenter", genre: "Pop", era: "2020s", moods: ["happy", "party"], duration: "3:05", icon: "🪶" },
  { id: 25, title: "Dial Drunk", artist: "Noah Kahan", genre: "Indie / Folk", era: "2020s", moods: ["sad", "party"], duration: "3:33", icon: "☎️" },
  { id: 26, title: "Northern Attitude", artist: "Noah Kahan", genre: "Indie / Folk", era: "2020s", moods: ["calm", "sad", "focus"], duration: "4:27", icon: "🌲" },
  { id: 27, title: "Homesick", artist: "Noah Kahan", genre: "Indie / Folk", era: "2020s", moods: ["sad", "calm", "nostalgic"], duration: "3:14", icon: "🏡" },
  { id: 28, title: "Levels", artist: "Avicii", genre: "House", era: "2010s", moods: ["party", "happy", "hype", "workout"], duration: "3:19", icon: "⚡" },
  { id: 29, title: "Summer", artist: "Calvin Harris", genre: "House", era: "2010s", moods: ["party", "happy", "workout"], duration: "3:42", icon: "🌴" },
  { id: 30, title: "Wake Me Up", artist: "Avicii", genre: "House", era: "2010s", moods: ["happy", "party", "nostalgic"], duration: "4:07", icon: "🌅" },
  { id: 31, title: "Titanium", artist: "David Guetta", genre: "House", era: "2010s", moods: ["party", "hype", "workout"], duration: "4:05", icon: "🔊" },
  { id: 32, title: "Party in the U.S.A.", artist: "Miley Cyrus", genre: "Pop", era: "2000s", moods: ["party", "happy", "nostalgic"], duration: "3:22", icon: "🇺🇸" },
  { id: 33, title: "Dynamite", artist: "Taio Cruz", genre: "Pop", era: "2000s", moods: ["party", "happy", "nostalgic"], duration: "3:23", icon: "🧨" },
  { id: 34, title: "Low", artist: "Flo Rida", genre: "Rap", era: "2000s", moods: ["party", "hype", "nostalgic", "workout"], duration: "3:51", icon: "🪩" },
  { id: 35, title: "A Bar Song (Tipsy)", artist: "Shaboozey", genre: "Country", era: "2020s", moods: ["party", "happy"], duration: "2:51", icon: "🍻" },
  { id: 36, title: "I Had Some Help", artist: "Post Malone & Morgan Wallen", genre: "Country", era: "2020s", moods: ["party", "happy"], duration: "2:58", icon: "🤠" },
  { id: 37, title: "Something in the Orange", artist: "Zach Bryan", genre: "Country", era: "2020s", moods: ["sad", "calm", "acoustic"], duration: "3:48", icon: "🍊" },
  { id: 38, title: "Tennessee Whiskey", artist: "Chris Stapleton", genre: "Country", era: "2010s", moods: ["calm", "sad", "romantic"], duration: "4:53", icon: "🥃" },
  { id: 39, title: "Fast Car", artist: "Luke Combs", genre: "Country", era: "2020s", moods: ["calm", "happy", "nostalgic"], duration: "4:25", icon: "🚗" },
  { id: 40, title: "Need a Favor", artist: "Jelly Roll", genre: "Country", era: "2020s", moods: ["sad", "party"], duration: "3:17", icon: "🙏" },
  { id: 41, title: "That's So True", artist: "Gracie Abrams", genre: "Indie / Folk", era: "2020s", moods: ["sad", "happy", "acoustic"], duration: "2:46", icon: "📖" },
  { id: 42, title: "BIRDS OF A FEATHER", artist: "Billie Eilish", genre: "Pop", era: "2020s", moods: ["happy", "calm", "romantic"], duration: "3:30", icon: "🕊️" },
  { id: 43, title: "Good Luck, Babe!", artist: "Chappell Roan", genre: "Pop", era: "2020s", moods: ["party", "happy", "nostalgic"], duration: "3:38", icon: "🌟" },
  { id: 44, title: "As It Was", artist: "Harry Styles", genre: "Pop", era: "2020s", moods: ["happy", "nostalgic", "calm"], duration: "2:47", icon: "🪩" },
  { id: 45, title: "vampire", artist: "Olivia Rodrigo", genre: "Rock / Pop-Punk", era: "2020s", moods: ["sad", "hype"], duration: "3:39", icon: "🧛" },
  { id: 46, title: "Passionfruit", artist: "Drake", genre: "R&B", era: "2010s", moods: ["calm", "happy", "focus"], duration: "4:58", icon: "🥭" },
  { id: 47, title: "Not Like Us", artist: "Kendrick Lamar", genre: "Rap", era: "2020s", moods: ["party", "hype", "workout"], duration: "4:34", icon: "👑" },
  { id: 48, title: "Kill Bill", artist: "SZA", genre: "R&B", era: "2020s", moods: ["calm", "sad", "romantic"], duration: "2:33", icon: "🗡️" },
  { id: 49, title: "Pink + White", artist: "Frank Ocean", genre: "R&B", era: "2010s", moods: ["calm", "romantic", "focus", "nostalgic"], duration: "3:04", icon: "🌸" },
  { id: 50, title: "Snooze", artist: "SZA", genre: "R&B", era: "2020s", moods: ["calm", "romantic", "focus"], duration: "3:21", icon: "💤" },
  { id: 51, title: "Tití Me Preguntó", artist: "Bad Bunny", genre: "Latin / Reggaeton", era: "2020s", moods: ["party", "happy", "workout"], duration: "4:03", icon: "🌴" },
  { id: 52, title: "Dakiti", artist: "Bad Bunny", genre: "Latin / Reggaeton", era: "2020s", moods: ["party", "calm", "romantic"], duration: "3:25", icon: "🌌" },
  { id: 53, title: "All The Small Things", artist: "blink-182", genre: "Rock / Pop-Punk", era: "90s", moods: ["party", "happy", "nostalgic", "workout"], duration: "2:48", icon: "🤘" },
  { id: 54, title: "Misery Business", artist: "Paramore", genre: "Rock / Pop-Punk", era: "2000s", moods: ["party", "hype", "nostalgic", "workout"], duration: "3:31", icon: "🔥" },
  { id: 55, title: "Golden Hour", artist: "Kacey Musgraves", genre: "Country", era: "2010s", moods: ["calm", "happy", "romantic", "acoustic"], duration: "3:18", icon: "✨" },
  { id: 56, title: "Pink Pony Club", artist: "Chappell Roan", genre: "Pop", era: "2020s", moods: ["party", "happy"], duration: "4:18", icon: "🦄" },
  { id: 57, title: "I Love You, I'm Sorry", artist: "Gracie Abrams", genre: "Indie / Folk", era: "2020s", moods: ["sad", "calm", "acoustic"], duration: "2:37", icon: "💌" },
  { id: 58, title: "Late Night Talking", artist: "Harry Styles", genre: "Pop", era: "2020s", moods: ["happy", "romantic", "party"], duration: "2:57", icon: "📞" },
  { id: 59, title: "Sunflower", artist: "Post Malone", genre: "Rap", era: "2010s", moods: ["happy", "calm", "focus"], duration: "2:38", icon: "🌻" },
  { id: 60, title: "Landslide", artist: "Fleetwood Mac", genre: "Acoustic", era: "70s", moods: ["calm", "sad", "nostalgic", "focus"], duration: "3:19", icon: "🍂" },
  { id: 61, title: "drivers license", artist: "Olivia Rodrigo", genre: "Pop", era: "2020s", moods: ["sad", "heartbreak", "breakup"], duration: "4:02", icon: "🚗" },
  { id: 62, title: "traitor", artist: "Olivia Rodrigo", genre: "Pop", era: "2020s", moods: ["sad", "heartbreak", "breakup", "acoustic"], duration: "3:49", icon: "💔" },
  { id: 63, title: "Someone Like You", artist: "Adele", genre: "Pop", era: "2010s", moods: ["sad", "heartbreak", "breakup", "nostalgic"], duration: "4:45", icon: "🎹" },
  { id: 64, title: "Easy On Me", artist: "Adele", genre: "Pop", era: "2020s", moods: ["sad", "heartbreak", "breakup", "calm"], duration: "3:44", icon: "🌧️" },
  { id: 65, title: "exile", artist: "Taylor Swift", genre: "Indie / Folk", era: "2020s", moods: ["sad", "heartbreak", "breakup", "calm"], duration: "4:45", icon: "🌲" },
  { id: 66, title: "august", artist: "Taylor Swift", genre: "Indie / Folk", era: "2020s", moods: ["sad", "heartbreak", "breakup", "nostalgic"], duration: "4:21", icon: "🌊" },
  { id: 67, title: "ceilings", artist: "Lizzy McAlpine", genre: "Indie / Folk", era: "2020s", moods: ["sad", "heartbreak", "breakup", "acoustic"], duration: "3:02", icon: "🕯️" },
  { id: 68, title: "Glimpse of Us", artist: "Joji", genre: "R&B", era: "2020s", moods: ["sad", "heartbreak", "breakup", "calm"], duration: "3:53", icon: "🥀" },
  { id: 69, title: "Heather", artist: "Conan Gray", genre: "Pop", era: "2020s", moods: ["sad", "heartbreak", "breakup"], duration: "3:18", icon: "🧥" },
  { id: 70, title: "You Should Probably Leave", artist: "Chris Stapleton", genre: "Country", era: "2020s", moods: ["sad", "heartbreak", "breakup", "calm"], duration: "3:33", icon: "🚪" },
  { id: 71, title: "More Than My Hometown", artist: "Morgan Wallen", genre: "Country", era: "2020s", moods: ["sad", "heartbreak", "breakup", "nostalgic"], duration: "3:36", icon: "🏡" },
  { id: 72, title: "Sand in My Boots", artist: "Morgan Wallen", genre: "Country", era: "2020s", moods: ["sad", "heartbreak", "breakup", "acoustic"], duration: "3:22", icon: "👢" },
  { id: 73, title: "Slow Dancing in a Burning Room", artist: "John Mayer", genre: "Rock / Pop-Punk", era: "2000s", moods: ["sad", "heartbreak", "breakup", "nostalgic"], duration: "4:02", icon: "🔥" },
  { id: 74, title: "When I Was Your Man", artist: "Bruno Mars", genre: "Pop", era: "2010s", moods: ["sad", "heartbreak", "breakup", "nostalgic"], duration: "3:33", icon: "💐" },
  { id: 75, title: "we can't be friends (wait for your love)", artist: "Ariana Grande", genre: "Pop", era: "2020s", moods: ["sad", "heartbreak", "breakup", "party"], duration: "3:48", icon: "🧸" },
  { id: 76, title: "Drip Too Hard", artist: "Lil Baby & Gunna", genre: "Rap", era: "2010s", moods: ["party", "hype", "workout"], duration: "2:25", icon: "💧" },
  { id: 77, title: "Freestyle", artist: "Lil Baby", genre: "Rap", era: "2010s", moods: ["party", "hype", "workout"], duration: "2:42", icon: "🎤" },
  { id: 78, title: "The Bigger Picture", artist: "Lil Baby", genre: "Rap", era: "2020s", moods: ["hype", "workout", "focus"], duration: "4:12", icon: "✊" },
  { id: 79, title: "Woah", artist: "Lil Baby", genre: "Rap", era: "2010s", moods: ["party", "hype", "workout"], duration: "3:03", icon: "🏎️" },
  { id: 80, title: "In A Minute", artist: "Lil Baby", genre: "Rap", era: "2020s", moods: ["hype", "workout", "calm"], duration: "3:20", icon: "⏱️" },
  { id: 81, title: "Crash into Me", artist: "Dave Matthews Band", genre: "Rock / Pop-Punk", era: "90s", moods: ["calm", "romantic", "nostalgic", "acoustic"], duration: "5:16", icon: "🎸" },
  { id: 82, title: "Ants Marching", artist: "Dave Matthews Band", genre: "Rock / Pop-Punk", era: "90s", moods: ["happy", "party", "nostalgic"], duration: "4:31", icon: "🐜" },
  { id: 83, title: "Satellite", artist: "Dave Matthews Band", genre: "Rock / Pop-Punk", era: "90s", moods: ["calm", "focus", "nostalgic"], duration: "4:51", icon: "🛰️" },
  { id: 84, title: "The Space Between", artist: "Dave Matthews Band", genre: "Rock / Pop-Punk", era: "2000s", moods: ["calm", "sad", "nostalgic"], duration: "4:03", icon: "🌌" }
];

const SAVED_MIXES_KEY = "moodmix_saved_playlists_v1";
const CUSTOM_SONGS_KEY = "moodmix_custom_songs_v1";
const CUSTOM_PILLS_KEY = "moodmix_custom_pills_v1";
const EXTRA_TAGS_KEY = "moodmix_extra_song_tags_v1";
const ARTWORK_CACHE_KEY = "moodmix_artwork_urls_v1";

let customAddedSongs = loadJSON(CUSTOM_SONGS_KEY, []);
let savedMixes = loadJSON(SAVED_MIXES_KEY, []);
let customPills = loadJSON(CUSTOM_PILLS_KEY, { mood: [], genre: [], artist: [] });
let extraSongTags = loadJSON(EXTRA_TAGS_KEY, {});
let savedArtworkCache = loadJSON(ARTWORK_CACHE_KEY, {});

let playlistSongs = buildMasterPlaylist();
let activeSavedMixId = null;
let currentDisplayedSongs = [...playlistSongs];
let currentPlayingSongId = null;
let editingMoodSongId = null;
const previewCache = {};
const inFlightArtwork = new Set();
let audioCtx = null;
let synthInterval = null;

function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    return fallback;
  }
}

function saveJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // Ignore storage quota issues safely
  }
}

function buildMasterPlaylist() {
  const combined = [...customAddedSongs, ...defaultPlaylistSongs];
  return combined.map((song) => {
    const extra = extraSongTags[String(song.id)] || [];
    const mergedMoods = extra.length > 0 ? Array.from(new Set([...song.moods, ...extra])) : song.moods;
    const resolvedArt = song.artworkUrl || savedArtworkCache[String(song.id)] || null;
    return { ...song, moods: mergedMoods, artworkUrl: resolvedArt };
  });
}

// ==========================================
// 1B. SMART AUTO-MATCHING & CUSTOM CATEGORIES
// ==========================================
function registerCustomPill(category, rawValue) {
  const clean = rawValue.trim();
  if (!clean) return;
  const normalized = category === "mood" ? clean.toLowerCase() : clean;
  if (!customPills[category]) customPills[category] = [];

  const exists = customPills[category].some(
    (item) => item.toLowerCase() === normalized.toLowerCase()
  );
  if (!exists) {
    customPills[category].push(normalized);
    saveJSON(CUSTOM_PILLS_KEY, customPills);
  }
}

function addSingleMoodToSong(songId, rawMood) {
  const cleanMood = rawMood.trim().toLowerCase();
  if (!cleanMood) return;

  const key = String(songId);
  if (!extraSongTags[key]) extraSongTags[key] = [];
  if (!extraSongTags[key].includes(cleanMood)) {
    extraSongTags[key].push(cleanMood);
    saveJSON(EXTRA_TAGS_KEY, extraSongTags);
  }

  registerCustomPill("mood", cleanMood);
  playlistSongs = buildMasterPlaylist();
}

function propagateCategoryToMatchingSongs(newTagRaw) {
  const tag = newTagRaw.trim().toLowerCase();
  if (!tag) return 0;

  let updatedCount = 0;

  playlistSongs.forEach((song) => {
    const alreadyHasTag = song.moods.some((m) => m.toLowerCase() === tag);
    if (alreadyHasTag) return;

    const eraMatch = song.era.toLowerCase() === tag;
    const genreMatch = song.genre.toLowerCase().includes(tag) && tag.length >= 3;
    const artistMatch = song.artist.toLowerCase().includes(tag) && tag.length >= 3;

    if (eraMatch || genreMatch || artistMatch) {
      const key = String(song.id);
      if (!extraSongTags[key]) extraSongTags[key] = [];
      if (!extraSongTags[key].includes(tag)) {
        extraSongTags[key].push(tag);
        updatedCount++;
      }
    }
  });

  if (updatedCount > 0) {
    saveJSON(EXTRA_TAGS_KEY, extraSongTags);
    playlistSongs = buildMasterPlaylist();
  }

  return updatedCount;
}

// ==========================================
// 1C. API DATA FETCHER: Free iTunes 30s Previews, Live Search & Cover Art
// ==========================================
function searchItunesSongs(searchTerm, limit = 3) {
  return new Promise((resolve) => {
    const callbackName = `itunesSearchCb_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
    const query = encodeURIComponent(searchTerm);
    const scriptEl = document.createElement("script");

    const cleanup = () => {
      delete window[callbackName];
      if (scriptEl.parentNode) {
        scriptEl.parentNode.removeChild(scriptEl);
      }
    };

    const timeoutId = setTimeout(() => {
      cleanup();
      resolve([]);
    }, 6000);

    window[callbackName] = (data) => {
      clearTimeout(timeoutId);
      cleanup();
      if (!data || !data.results || data.results.length === 0) {
        resolve([]);
        return;
      }
      resolve(data.results.filter((item) => item.previewUrl || item.artworkUrl100));
    };

    scriptEl.onerror = () => {
      clearTimeout(timeoutId);
      cleanup();
      resolve([]);
    };

    scriptEl.src = `https://itunes.apple.com/search?term=${query}&entity=song&limit=${limit}&callback=${callbackName}`;
    document.body.appendChild(scriptEl);
  });
}

async function fetchSongPreview(song) {
  if (song.directPreviewUrl) {
    return {
      previewUrl: song.directPreviewUrl,
      artworkUrl: song.artworkUrl || null
    };
  }

  if (previewCache[song.id]) {
    return previewCache[song.id];
  }

  const results = await searchItunesSongs(`${song.artist} ${song.title}`, 3);
  if (!results || results.length === 0) {
    return null;
  }

  const playable = results.find((r) => r.previewUrl) || results[0];
  const artworkUrl = playable.artworkUrl100 || null;

  if (artworkUrl) {
    savedArtworkCache[String(song.id)] = artworkUrl;
    saveJSON(ARTWORK_CACHE_KEY, savedArtworkCache);
    song.artworkUrl = artworkUrl;
    updateRowArtworkInPlace(song.id, artworkUrl, song.title);
    renderHeroCollage(currentDisplayedSongs);
  }

  const match = {
    previewUrl: playable.previewUrl,
    artworkUrl
  };
  previewCache[song.id] = match;
  return match;
}

function updateRowArtworkInPlace(songId, artworkUrl, title) {
  const artSlot = document.querySelector(`.track-art[data-song-id="${songId}"]`);
  if (artSlot && artworkUrl) {
    artSlot.innerHTML = `<img src="${artworkUrl}" alt="${title} cover" loading="lazy" />`;
  }
}

async function hydrateVisibleAlbumCovers(songs) {
  const missing = songs.filter(
    (s) => !s.artworkUrl && !savedArtworkCache[String(s.id)] && !inFlightArtwork.has(String(s.id))
  );
  if (missing.length === 0) return;

  const batchSize = 4;
  for (let i = 0; i < missing.length; i += batchSize) {
    const batch = missing.slice(i, i + batchSize);
    await Promise.all(
      batch.map(async (song) => {
        const key = String(song.id);
        inFlightArtwork.add(key);
        const results = await searchItunesSongs(`${song.artist} ${song.title}`, 1);
        inFlightArtwork.delete(key);

        if (results && results.length > 0) {
          const hit = results[0];
          if (hit.artworkUrl100) {
            savedArtworkCache[key] = hit.artworkUrl100;
            song.artworkUrl = hit.artworkUrl100;
            updateRowArtworkInPlace(song.id, hit.artworkUrl100, song.title);
          }
          if (hit.previewUrl) {
            previewCache[song.id] = {
              previewUrl: hit.previewUrl,
              artworkUrl: hit.artworkUrl100 || null
            };
          }
        }
      })
    );
    saveJSON(ARTWORK_CACHE_KEY, savedArtworkCache);
    renderHeroCollage(currentDisplayedSongs);
    await new Promise((r) => setTimeout(r, 220));
  }
}

// ==========================================
// 1D. OFFLINE DEMO BACKUP: Gentle Web Audio Chords
// ==========================================
function stopFallbackSynth() {
  if (synthInterval) {
    clearInterval(synthInterval);
    synthInterval = null;
  }
}

function startFallbackSynth(song, onTick, onDone) {
  stopFallbackSynth();
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;
  if (!audioCtx) audioCtx = new AudioContextClass();

  const isUpbeat = song.moods.includes("party") || song.moods.includes("happy");
  const notes = isUpbeat ? [261.63, 329.63, 392.0, 523.25] : [220.0, 261.63, 329.63, 392.0];
  let step = 0;
  let elapsed = 0;

  function playNote(freq) {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.45);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.45);
  }

  playNote(notes[0]);
  synthInterval = setInterval(() => {
    elapsed += 0.5;
    step = (step + 1) % notes.length;
    playNote(notes[step]);
    onTick(elapsed, 15);
    if (elapsed >= 15) {
      stopFallbackSynth();
      onDone();
    }
  }, 500);
}

// ==========================================
// 2. PROCESSING LAYER: Filtering, Stats & Shuffle
// ==========================================
function formatTrackDurationMs(ms) {
  if (!Number.isFinite(ms) || ms <= 0) return "3:15";
  const totalSec = Math.round(ms / 1000);
  const mins = Math.floor(totalSec / 60);
  const secs = totalSec % 60;
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

function deriveEraFromReleaseDate(releaseDate) {
  if (!releaseDate) return "2020s";
  const year = Number(String(releaseDate).slice(0, 4));
  if (!Number.isFinite(year)) return "2020s";
  if (year < 1980) return "70s";
  if (year < 1990) return "80s";
  if (year < 2000) return "90s";
  if (year < 2010) return "2000s";
  if (year < 2020) return "2010s";
  return "2020s";
}

function filterSongs(moodQuery, genreQuery, artistQuery) {
  const cleanMood = moodQuery.trim().toLowerCase();
  const cleanGenre = genreQuery.trim().toLowerCase();
  const cleanArtist = artistQuery.trim().toLowerCase();

  const artistTerms = cleanArtist
    .split(",")
    .map((name) => name.trim())
    .filter((name) => name.length > 0);

  return playlistSongs.filter((song) => {
    const combinedMoodSearch = `${song.moods.join(" ")} ${song.era} ${song.genre}`.toLowerCase();
    const matchesMood =
      !cleanMood || combinedMoodSearch.includes(cleanMood);

    const combinedGenreEra = `${song.genre} ${song.era} ${song.moods.join(" ")}`.toLowerCase();
    const matchesGenre =
      !cleanGenre || combinedGenreEra.includes(cleanGenre);

    const matchesArtist =
      artistTerms.length === 0 ||
      artistTerms.some((term) => song.artist.toLowerCase().includes(term));

    return matchesMood && matchesGenre && matchesArtist;
  });
}

function calculateMixStats(songs) {
  if (songs.length === 0) {
    return { formattedDuration: "0 min", topMood: "—", topGenre: "—" };
  }

  let totalSeconds = 0;
  const moodCounts = {};
  const genreCounts = {};

  songs.forEach((song) => {
    const parts = song.duration.split(":").map(Number);
    if (parts.length === 2) {
      totalSeconds += parts[0] * 60 + parts[1];
    }
    song.moods.forEach((m) => {
      moodCounts[m] = (moodCounts[m] || 0) + 1;
    });
    genreCounts[song.genre] = (genreCounts[song.genre] || 0) + 1;
  });

  const totalMins = Math.round(totalSeconds / 60);
  const hours = Math.floor(totalMins / 60);
  const mins = totalMins % 60;
  const formattedDuration = hours > 0 ? `${hours} hr ${mins} min` : `${mins} min`;

  const topMood = Object.entries(moodCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "—";
  const topGenre = Object.entries(genreCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "—";

  return { formattedDuration, topMood, topGenre };
}

function shuffleSongs(songsArray) {
  const copy = [...songsArray];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// ==========================================
// 3. PRESENTATION LAYER: Dynamic Hero Collage, Track Table & Stats
// ==========================================
function upgradeArtworkResolution(url) {
  if (!url) return null;
  return url.replace("100x100bb", "300x300bb");
}

function renderHeroCollage(songs) {
  const coverEl = document.getElementById("hero-collage-cover");
  if (!coverEl) return;

  const sourceList = songs && songs.length > 0 ? songs : playlistSongs;

  // Pick up to 4 unique album covers from the current mix
  const seenUrls = new Set();
  const featured = [];
  for (const song of sourceList) {
    const rawArt = song.artworkUrl || savedArtworkCache[String(song.id)] || null;
    if (rawArt) {
      const hiRes = upgradeArtworkResolution(rawArt);
      if (!seenUrls.has(hiRes)) {
        seenUrls.add(hiRes);
        featured.push({ song, art: hiRes });
      }
    } else if (featured.length < 4 && sourceList.length <= 4) {
      featured.push({ song, art: null });
    }
    if (featured.length === 4) break;
  }

  // Fallback to first 4 songs if artwork hasn't loaded yet
  if (featured.length === 0) {
    sourceList.slice(0, 4).forEach((song) => featured.push({ song, art: null }));
  }

  coverEl.classList.remove("single-tile", "two-tile");

  if (featured.length === 1) {
    coverEl.classList.add("single-tile");
    const item = featured[0];
    coverEl.innerHTML = `<div class="collage-tile tile-1">${
      item.art ? `<img src="${item.art}" alt="${item.song.title} album art" />` : item.song.icon
    }</div>`;
    return;
  }

  if (featured.length === 2 || featured.length === 3) {
    coverEl.classList.add("two-tile");
    coverEl.innerHTML = featured
      .slice(0, 2)
      .map(
        (item, idx) =>
          `<div class="collage-tile tile-${idx + 1}">${
            item.art ? `<img src="${item.art}" alt="${item.song.title} album art" />` : item.song.icon
          }</div>`
      )
      .join("");
    return;
  }

  coverEl.innerHTML = featured
    .slice(0, 4)
    .map(
      (item, idx) =>
        `<div class="collage-tile tile-${idx + 1}">${
          item.art ? `<img src="${item.art}" alt="${item.song.title} album art" />` : item.song.icon
        }</div>`
    )
    .join("");
}

function renderVibeStats(songs) {
  const stats = calculateMixStats(songs);
  document.getElementById("stat-duration").textContent = stats.formattedDuration;
  document.getElementById("stat-top-mood").textContent = stats.topMood;
  document.getElementById("stat-top-genre").textContent = stats.topGenre;
  document.getElementById("playlist-duration").textContent = stats.formattedDuration;
}

function renderTracklist(songs) {
  currentDisplayedSongs = songs;
  renderVibeStats(songs);
  renderHeroCollage(songs);

  const listEl = document.getElementById("song-list");
  const countBadge = document.getElementById("song-count-badge");

  countBadge.textContent = `${songs.length} ${songs.length === 1 ? "song" : "songs"}`;
  listEl.innerHTML = "";

  if (songs.length === 0) {
    listEl.innerHTML = `
      <div class="empty-state">
        <p><strong>No matching songs found in "Car rides".</strong></p>
        <p>Try clearing one of your MoodMix filters or clicking Reset All.</p>
      </div>
    `;
    return;
  }

  songs.forEach((song, index) => {
    const row = document.createElement("div");
    row.className = "track-row";
    if (song.id === currentPlayingSongId) {
      row.classList.add("playing");
    }

    const coverURL = song.artworkUrl || savedArtworkCache[String(song.id)] || null;
    const artInnerHTML = coverURL
      ? `<img src="${coverURL}" alt="${song.title} cover" loading="lazy" />`
      : song.icon;

    const moodsHTML = song.moods
      .map((m) => `<span class="mood-chip">${m}</span>`)
      .join("");

    const isEditingThisRow = editingMoodSongId === song.id;
    const inlineControlHTML = isEditingThisRow
      ? `<form class="inline-mood-form">
           <input type="text" class="inline-mood-input" placeholder="e.g., 80s, drive..." autocomplete="off" />
           <button type="submit" class="inline-mood-save">Save</button>
         </form>`
      : `<button type="button" class="add-row-mood-btn" title="Add a custom mood to ${song.title}">+ mood</button>`;

    row.innerHTML = `
      <span class="track-num">${song.id === currentPlayingSongId ? "🔊" : index + 1}</span>
      <div class="track-title-cell">
        <div class="track-art" data-song-id="${song.id}" aria-hidden="true">${artInnerHTML}</div>
        <div class="track-title">${song.title}</div>
      </div>
      <div class="track-artist">${song.artist}</div>
      <div class="track-genre col-hide-mobile">${song.genre} • ${song.era}</div>
      <div class="track-moods col-hide-mobile">${moodsHTML}${inlineControlHTML}</div>
      <div class="col-duration">${song.duration}</div>
    `;

    if (isEditingThisRow) {
      const formEl = row.querySelector(".inline-mood-form");
      const inputEl = row.querySelector(".inline-mood-input");

      formEl.addEventListener("click", (e) => e.stopPropagation());
      inputEl.addEventListener("click", (e) => e.stopPropagation());

      inputEl.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          e.stopPropagation();
          editingMoodSongId = null;
          renderTracklist(currentDisplayedSongs);
        }
      });

      formEl.addEventListener("submit", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const val = inputEl.value.trim();
        if (val) {
          addSingleMoodToSong(song.id, val);
          if (typeof window.onInlineMoodAdded === "function") {
            window.onInlineMoodAdded(song.title, val.toLowerCase());
          }
        }
        editingMoodSongId = null;
        if (typeof window.refreshActiveView === "function") {
          window.refreshActiveView();
        }
      });

      setTimeout(() => inputEl.focus(), 0);
    } else {
      const addBtn = row.querySelector(".add-row-mood-btn");
      if (addBtn) {
        addBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          editingMoodSongId = song.id;
          renderTracklist(currentDisplayedSongs);
        });
      }
    }

    row.addEventListener("click", () => {
      playSongById(song.id);
    });

    listEl.appendChild(row);
  });

  hydrateVisibleAlbumCovers(songs);
}

function updateFilterStatus(moodVal, genreVal, artistVal, customPlaylistName = null) {
  const statusEl = document.getElementById("filter-status-text");
  const activeFilters = [];

  if (moodVal.trim()) activeFilters.push(`Mood: "${moodVal.trim()}"`);
  if (genreVal.trim()) activeFilters.push(`Genre/Era: "${genreVal.trim()}"`);
  if (artistVal.trim()) activeFilters.push(`Artist: "${artistVal.trim()}"`);

  if (customPlaylistName) {
    statusEl.innerHTML = `Saved Mix: <strong>${customPlaylistName}</strong> (${activeFilters.join(" • ") || "All tracks"})`;
  } else if (activeFilters.length === 0) {
    statusEl.innerHTML = `Showing all songs in <strong>Car rides</strong>`;
  } else {
    statusEl.innerHTML = `MoodMix Active → <strong>${activeFilters.join(" • ")}</strong>`;
  }
}

// ==========================================
// 4. STARTUP, LIVE LOOKUP, SAVED MIXES & EVENT LISTENERS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  const moodMixBtn = document.getElementById("btn-toggle-moodmix");
  const moodMixPanel = document.getElementById("moodmix-panel");
  const moodInput = document.getElementById("input-mood");
  const genreInput = document.getElementById("input-genre");
  const artistInput = document.getElementById("input-artist");
  const resetBtn = document.getElementById("btn-reset-filters");
  const shuffleBtn = document.getElementById("btn-shuffle");

  const toggleLookupBtn = document.getElementById("btn-toggle-lookup");
  const closeLookupBtn = document.getElementById("btn-close-lookup");
  const lookupPanel = document.getElementById("lookup-panel");
  const lookupForm = document.getElementById("lookup-form");
  const lookupInput = document.getElementById("input-song-lookup");
  const lookupStatus = document.getElementById("lookup-status");
  const lookupResultsEl = document.getElementById("lookup-results");

  const navCarRides = document.getElementById("nav-car-rides");
  const savedPlaylistsNav = document.getElementById("saved-playlists-nav");
  const saveMixCallout = document.getElementById("save-mix-callout");
  const saveMixPromptRow = document.getElementById("save-mix-prompt-row");
  const saveMixSummaryText = document.getElementById("save-mix-summary-text");
  const openSaveMixBtn = document.getElementById("btn-open-save-mix");
  const saveMixStep2 = document.getElementById("save-mix-step2");
  const mixNameInput = document.getElementById("input-mix-name");
  const confirmSaveMixBtn = document.getElementById("btn-confirm-save-mix");
  const cancelSaveMixBtn = document.getElementById("btn-cancel-save-mix");
  const saveMixFeedback = document.getElementById("save-mix-feedback");
  const savedMixesStrip = document.getElementById("saved-mixes-strip");
  const savedMixesChips = document.getElementById("saved-mixes-chips");
  const heroTypeEl = document.getElementById("hero-playlist-type");
  const heroTitleEl = document.getElementById("hero-playlist-title");
  const heroDescEl = document.getElementById("hero-playlist-desc");

  function syncCustomPillsToDOM() {
    const map = [
      { key: "mood", containerId: "pills-mood", inputEl: moodInput },
      { key: "genre", containerId: "pills-genre", inputEl: genreInput },
      { key: "artist", containerId: "pills-artist", inputEl: artistInput }
    ];

    map.forEach(({ key, containerId, inputEl }) => {
      const container = document.getElementById(containerId);
      if (!container) return;

      (customPills[key] || []).forEach((val) => {
        const existingBtns = Array.from(container.querySelectorAll(".pill"));
        const alreadyInDom = existingBtns.some(
          (btn) => (btn.dataset.value || "").toLowerCase() === val.toLowerCase()
        );
        if (!alreadyInDom) {
          const btn = document.createElement("button");
          btn.type = "button";
          btn.className = "pill";
          btn.dataset.value = val;
          btn.textContent = `✨ ${val}`;
          btn.addEventListener("click", () => {
            inputEl.value = val;
            applyLiveFilters();
          });
          container.appendChild(btn);
        }
      });
    });
  }

  window.onInlineMoodAdded = function (songTitle, addedMood) {
    syncCustomPillsToDOM();
    saveMixFeedback.textContent = `✅ Added "${addedMood}" to "${songTitle}" and saved it to your MoodMix filter pills!`;
    saveMixFeedback.classList.remove("hidden");
  };

  window.refreshActiveView = function () {
    const filtered = filterSongs(moodInput.value, genreInput.value, artistInput.value);
    renderTracklist(filtered);
  };

  function addSongToMasterPlaylist(item, customMoods, customGenre) {
    const defaultGenre = item.primaryGenreName || "Pop";
    const era = deriveEraFromReleaseDate(item.releaseDate);
    const cleanGenre = customGenre && customGenre.trim() ? customGenre.trim() : defaultGenre;
    const moodsList =
      customMoods && customMoods.length > 0
        ? customMoods
        : ["happy"];

    moodsList.forEach((m) => registerCustomPill("mood", m));
    registerCustomPill("genre", cleanGenre);
    registerCustomPill("artist", item.artistName);

    const newId = `custom_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    if (item.artworkUrl100) {
      savedArtworkCache[newId] = item.artworkUrl100;
      saveJSON(ARTWORK_CACHE_KEY, savedArtworkCache);
    }

    const newSong = {
      id: newId,
      title: item.trackName,
      artist: item.artistName,
      genre: cleanGenre,
      era,
      moods: moodsList,
      duration: formatTrackDurationMs(item.trackTimeMillis),
      icon: "🆕",
      directPreviewUrl: item.previewUrl,
      artworkUrl: item.artworkUrl100 || null
    };

    customAddedSongs = [newSong, ...customAddedSongs];
    saveJSON(CUSTOM_SONGS_KEY, customAddedSongs);
    playlistSongs = buildMasterPlaylist();

    let autoMatchedTotal = 0;
    moodsList.forEach((m) => {
      autoMatchedTotal += propagateCategoryToMatchingSongs(m);
    });

    syncCustomPillsToDOM();
    switchToMasterCarRides();

    const autoNote =
      autoMatchedTotal > 0
        ? ` Auto-matched ${autoMatchedTotal} existing playlist ${autoMatchedTotal === 1 ? "song" : "songs"} too!`
        : "";
    saveMixFeedback.textContent = `✅ Added "${newSong.title}" (${cleanGenre} • ${moodsList.join(", ")}).${autoNote}`;
    saveMixFeedback.classList.remove("hidden");
  }

  toggleLookupBtn.addEventListener("click", () => {
    const isHidden = lookupPanel.classList.toggle("hidden");
    toggleLookupBtn.classList.toggle("active", !isHidden);
    toggleLookupBtn.setAttribute("aria-expanded", String(!isHidden));
    if (!isHidden) {
      lookupInput.focus();
    }
  });

  closeLookupBtn.addEventListener("click", () => {
    lookupPanel.classList.add("hidden");
    toggleLookupBtn.classList.remove("active");
    toggleLookupBtn.setAttribute("aria-expanded", "false");
  });

  lookupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const query = lookupInput.value.trim();
    if (!query) return;

    lookupResultsEl.innerHTML = "";
    lookupStatus.textContent = `Searching live catalog for "${query}"...`;
    lookupStatus.classList.remove("hidden");

    const matches = await searchItunesSongs(query, 3);
    if (matches.length === 0) {
      lookupStatus.textContent = `No playable previews found for "${query}". Try another song title or artist!`;
      return;
    }

    lookupStatus.textContent = `Found ${matches.length} playable matches — preview first or add to Car rides:`;

    matches.forEach((item) => {
      const card = document.createElement("div");
      card.className = "lookup-result-card";
      const genre = item.primaryGenreName || "Pop";
      const era = deriveEraFromReleaseDate(item.releaseDate);
      const artHTML = item.artworkUrl100
        ? `<img src="${item.artworkUrl100}" alt="${item.trackName} cover" />`
        : "🎵";

      const extraMoodPillsHTML = (customPills.mood || [])
        .map((m) => `<button type="button" class="pill" data-val="${m}">✨ ${m}</button>`)
        .join("");

      const extraGenrePillsHTML = (customPills.genre || [])
        .map((g) => `<button type="button" class="pill" data-val="${g}">✨ ${g}</button>`)
        .join("");

      card.innerHTML = `
        <div class="lookup-result-top">
          <div class="lookup-result-info">
            <div class="lookup-result-art">${artHTML}</div>
            <div class="lookup-result-meta">
              <div class="lookup-result-title">${item.trackName}</div>
              <div class="lookup-result-sub">${item.artistName} • ${genre} (${era})</div>
            </div>
          </div>
          <div class="lookup-card-actions">
            <button type="button" class="btn btn-secondary btn-sm btn-preview-only">▶ Preview</button>
            <button type="button" class="btn btn-save-mix-cta btn-sm btn-open-tagger">➕ Add to Playlist</button>
          </div>
        </div>

        <div class="lookup-tagger-box hidden">
          <div class="lookup-tagger-header">
            <strong>✨ Optional: Pick or Create Your Own Mood &amp; Genre</strong>
            <button type="button" class="btn btn-ghost btn-sm btn-skip-tagger">Skip &amp; Add Now</button>
          </div>

          <div class="lookup-tagger-grid">
            <div class="lookup-tagger-field">
              <label>Mood or Custom Vibe (type your own like "80s" or click a pill)</label>
              <input type="text" class="input-custom-mood" placeholder="e.g., 80s, roadtrip, party, nostalgic..." />
              <div class="quick-pills tagger-mood-pills">
                <button type="button" class="pill" data-val="party">party</button>
                <button type="button" class="pill" data-val="happy">happy</button>
                <button type="button" class="pill" data-val="calm">calm</button>
                <button type="button" class="pill" data-val="sad">sad</button>
                <button type="button" class="pill" data-val="heartbreak">heartbreak</button>
                <button type="button" class="pill" data-val="nostalgic">nostalgic</button>
                <button type="button" class="pill" data-val="romantic">romantic</button>
                <button type="button" class="pill" data-val="focus">focus</button>
                <button type="button" class="pill" data-val="workout">workout</button>
                <button type="button" class="pill" data-val="80s">80s</button>
                <button type="button" class="pill" data-val="90s">90s</button>
                ${extraMoodPillsHTML}
              </div>
            </div>

            <div class="lookup-tagger-field">
              <label>Genre or Era (keep default, click a pill, or type your own)</label>
              <input type="text" class="input-custom-genre" value="${genre}" placeholder="e.g., Pop, Classic Rock, 80s..." />
              <div class="quick-pills tagger-genre-pills">
                <button type="button" class="pill" data-val="Pop">Pop</button>
                <button type="button" class="pill" data-val="Country">Country</button>
                <button type="button" class="pill" data-val="Rap">Rap</button>
                <button type="button" class="pill" data-val="Indie / Folk">Indie / Folk</button>
                <button type="button" class="pill" data-val="Rock / Pop-Punk">Rock / Pop-Punk</button>
                <button type="button" class="pill" data-val="R&B">R&amp;B</button>
                <button type="button" class="pill" data-val="Latin / Reggaeton">Latin</button>
                <button type="button" class="pill" data-val="80s">80s</button>
                <button type="button" class="pill" data-val="90s">90s</button>
                ${extraGenrePillsHTML}
              </div>
            </div>
          </div>

          <div class="lookup-tagger-footer">
            <button type="button" class="btn btn-save-mix-cta btn-sm btn-save-with-tags">✅ Save Tags &amp; Add to Car rides</button>
            <button type="button" class="btn btn-ghost btn-sm btn-cancel-tagger">Cancel</button>
          </div>
        </div>
      `;

      const previewBtn = card.querySelector(".btn-preview-only");
      const openTaggerBtn = card.querySelector(".btn-open-tagger");
      const taggerBox = card.querySelector(".lookup-tagger-box");
      const skipBtn = card.querySelector(".btn-skip-tagger");
      const cancelTaggerBtn = card.querySelector(".btn-cancel-tagger");
      const saveWithTagsBtn = card.querySelector(".btn-save-with-tags");
      const customMoodInput = card.querySelector(".input-custom-mood");
      const customGenreInput = card.querySelector(".input-custom-genre");

      previewBtn.addEventListener("click", () => {
        playExternalPreview({
          title: item.trackName,
          artist: item.artistName,
          genre,
          previewUrl: item.previewUrl,
          artworkUrl: item.artworkUrl100 || null
        });
      });

      openTaggerBtn.addEventListener("click", () => {
        taggerBox.classList.toggle("hidden");
        if (!taggerBox.classList.contains("hidden")) {
          customMoodInput.focus();
        }
      });

      cancelTaggerBtn.addEventListener("click", () => {
        taggerBox.classList.add("hidden");
      });

      card.querySelectorAll(".tagger-mood-pills .pill").forEach((pill) => {
        pill.addEventListener("click", () => {
          const val = pill.dataset.val;
          const existing = customMoodInput.value
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean);
          if (!existing.includes(val)) {
            existing.push(val);
            customMoodInput.value = existing.join(", ");
          }
        });
      });

      card.querySelectorAll(".tagger-genre-pills .pill").forEach((pill) => {
        pill.addEventListener("click", () => {
          customGenreInput.value = pill.dataset.val;
        });
      });

      skipBtn.addEventListener("click", () => {
        addSongToMasterPlaylist(item, ["happy"], genre);
        taggerBox.classList.add("hidden");
        openTaggerBtn.textContent = "✔ Added";
      });

      saveWithTagsBtn.addEventListener("click", () => {
        const parsedMoods = customMoodInput.value
          .split(",")
          .map((m) => m.trim().toLowerCase())
          .filter(Boolean);
        addSongToMasterPlaylist(item, parsedMoods, customGenreInput.value);
        taggerBox.classList.add("hidden");
        openTaggerBtn.textContent = "✔ Added";
      });

      lookupResultsEl.appendChild(card);
    });
  });

  function renderSidebarPlaylists() {
    navCarRides.classList.toggle("active", activeSavedMixId === null);
    savedPlaylistsNav.innerHTML = "";
    savedMixesChips.innerHTML = "";

    if (savedMixes.length > 0) {
      savedMixesStrip.classList.remove("hidden");
      const allChip = document.createElement("button");
      allChip.type = "button";
      allChip.className = `saved-chip ${activeSavedMixId === null ? "active" : ""}`;
      allChip.textContent = `🚗 All Car rides (${playlistSongs.length})`;
      allChip.addEventListener("click", switchToMasterCarRides);
      savedMixesChips.appendChild(allChip);
    } else {
      savedMixesStrip.classList.add("hidden");
    }

    savedMixes.forEach((mix) => {
      const item = document.createElement("div");
      item.className = "nav-item saved-mix-item";
      if (activeSavedMixId === mix.id) {
        item.classList.add("active");
      }

      item.innerHTML = `
        <span class="saved-mix-name">✨ ${mix.name}</span>
        <button type="button" class="delete-mix-btn" title="Delete saved mix" aria-label="Delete ${mix.name}">✕</button>
      `;

      item.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete-mix-btn")) return;
        activateSavedMix(mix);
      });

      item.querySelector(".delete-mix-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        savedMixes = savedMixes.filter((m) => m.id !== mix.id);
        saveJSON(SAVED_MIXES_KEY, savedMixes);
        if (activeSavedMixId === mix.id) {
          switchToMasterCarRides();
        } else {
          renderSidebarPlaylists();
        }
      });

      savedPlaylistsNav.appendChild(item);

      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = `saved-chip ${activeSavedMixId === mix.id ? "active" : ""}`;
      chip.textContent = `✨ ${mix.name}`;
      chip.addEventListener("click", () => activateSavedMix(mix));
      savedMixesChips.appendChild(chip);
    });
  }

  function updateSaveCalloutVisibility(filteredSongs) {
    const hasFilter =
      moodInput.value.trim() !== "" ||
      genreInput.value.trim() !== "" ||
      artistInput.value.trim() !== "";

    if (hasFilter && filteredSongs.length > 0 && activeSavedMixId === null) {
      saveMixCallout.classList.remove("hidden");
      saveMixPromptRow.classList.remove("hidden");
      saveMixStep2.classList.add("hidden");
      openSaveMixBtn.textContent = `💾 Save These ${filteredSongs.length} Songs as a Playlist`;
      saveMixSummaryText.textContent = `Create a standalone playlist from these ${filteredSongs.length} matching tracks—your Car rides list stays untouched.`;
    } else {
      saveMixCallout.classList.add("hidden");
    }
  }

  function switchToMasterCarRides() {
    activeSavedMixId = null;
    heroTypeEl.textContent = "PLAYLIST";
    heroTitleEl.textContent = "Car rides";
    heroDescEl.innerHTML = `A massive mixed-genre playlist. Click <strong>MoodMix</strong> to filter by your exact vibe without deleting a single song.`;
    moodInput.value = "";
    genreInput.value = "";
    artistInput.value = "";
    saveMixCallout.classList.add("hidden");
    renderSidebarPlaylists();
    renderTracklist(playlistSongs);
    updateFilterStatus("", "", "");
  }

  function activateSavedMix(mix) {
    activeSavedMixId = mix.id;
    moodInput.value = mix.mood;
    genreInput.value = mix.genre;
    artistInput.value = mix.artist;
    saveMixCallout.classList.add("hidden");

    heroTypeEl.textContent = "SAVED MOODMIX";
    heroTitleEl.textContent = mix.name;
    heroDescEl.textContent = `Custom sub-playlist filtered from Car rides — your full master list remains untouched.`;

    const filtered = filterSongs(mix.mood, mix.genre, mix.artist);
    renderSidebarPlaylists();
    renderTracklist(filtered);
    updateFilterStatus(mix.mood, mix.genre, mix.artist, mix.name);
  }

  navCarRides.addEventListener("click", switchToMasterCarRides);

  function applyLiveFilters() {
    saveMixFeedback.classList.add("hidden");
    if (activeSavedMixId !== null) {
      activeSavedMixId = null;
      heroTypeEl.textContent = "PLAYLIST";
      heroTitleEl.textContent = "Car rides";
      heroDescEl.innerHTML = `A massive mixed-genre playlist. Click <strong>MoodMix</strong> to filter by your exact vibe without deleting a single song.`;
      renderSidebarPlaylists();
    }
    const filtered = filterSongs(moodInput.value, genreInput.value, artistInput.value);
    renderTracklist(filtered);
    updateFilterStatus(moodInput.value, genreInput.value, artistInput.value);
    updateSaveCalloutVisibility(filtered);
  }

  openSaveMixBtn.addEventListener("click", () => {
    saveMixPromptRow.classList.add("hidden");
    saveMixStep2.classList.remove("hidden");
    saveMixFeedback.classList.add("hidden");

    if (moodInput.value.trim()) {
      registerCustomPill("mood", moodInput.value.trim());
      propagateCategoryToMatchingSongs(moodInput.value.trim());
    }
    if (genreInput.value.trim()) registerCustomPill("genre", genreInput.value.trim());
    if (artistInput.value.trim()) registerCustomPill("artist", artistInput.value.trim());
    syncCustomPillsToDOM();

    const suggested = [moodInput.value.trim(), genreInput.value.trim(), artistInput.value.trim()]
      .filter(Boolean)
      .join(" + ");
    mixNameInput.value = suggested ? `${suggested} Mix` : "My Custom Mix";
    mixNameInput.focus();
    mixNameInput.select();
  });

  cancelSaveMixBtn.addEventListener("click", () => {
    saveMixStep2.classList.add("hidden");
    saveMixPromptRow.classList.remove("hidden");
  });

  function saveCurrentMix() {
    const cleanName = mixNameInput.value.trim();
    if (!cleanName) {
      saveMixFeedback.textContent = "⚠️ Please type a name for your new playlist first, then click Save Playlist.";
      saveMixFeedback.classList.remove("hidden");
      mixNameInput.focus();
      return;
    }

    const newMix = {
      id: `mix_${Date.now()}`,
      name: cleanName,
      mood: moodInput.value.trim(),
      genre: genreInput.value.trim(),
      artist: artistInput.value.trim()
    };

    savedMixes.push(newMix);
    saveJSON(SAVED_MIXES_KEY, savedMixes);
    saveMixCallout.classList.add("hidden");
    saveMixFeedback.textContent = `✅ Saved "${cleanName}"! Switch between your saved mixes anytime using the bar below or the Playlists sidebar.`;
    saveMixFeedback.classList.remove("hidden");
    activateSavedMix(newMix);
  }

  confirmSaveMixBtn.addEventListener("click", saveCurrentMix);
  mixNameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      saveCurrentMix();
    }
  });

  moodMixBtn.addEventListener("click", () => {
    const isHidden = moodMixPanel.classList.toggle("hidden");
    moodMixBtn.classList.toggle("active", !isHidden);
    moodMixBtn.setAttribute("aria-expanded", String(!isHidden));
  });

  moodInput.addEventListener("input", applyLiveFilters);
  genreInput.addEventListener("input", applyLiveFilters);
  artistInput.addEventListener("input", applyLiveFilters);

  document.querySelectorAll(".quick-pills").forEach((group) => {
    const targetInput = document.getElementById(group.dataset.target);
    if (!targetInput) return;
    group.querySelectorAll(".pill").forEach((pill) => {
      pill.addEventListener("click", () => {
        targetInput.value = pill.dataset.value;
        applyLiveFilters();
      });
    });
  });

  resetBtn.addEventListener("click", () => {
    saveMixCallout.classList.add("hidden");
    saveMixFeedback.classList.add("hidden");
    switchToMasterCarRides();
  });

  shuffleBtn.addEventListener("click", () => {
    const shuffled = shuffleSongs(currentDisplayedSongs);
    renderTracklist(shuffled);
    if (shuffled.length > 0) {
      playSongById(shuffled[0].id);
    }
  });

  // ==========================================
  // 5. AUDIO PLAYER CONTROLS
  // ==========================================
  const audioEl = document.getElementById("audio-player");
  const playAllBtn = document.getElementById("btn-play-all");
  const playPauseBtn = document.getElementById("btn-play-pause");
  const prevBtn = document.getElementById("btn-prev");
  const nextBtn = document.getElementById("btn-next");
  const seekSlider = document.getElementById("player-seek");
  const currentTimeEl = document.getElementById("player-current-time");
  const durationEl = document.getElementById("player-duration");
  const playerTitleEl = document.getElementById("player-title");
  const playerArtistEl = document.getElementById("player-artist");
  const playerArtEl = document.getElementById("player-art");
  const statusBadgeEl = document.getElementById("player-status-badge");

  function formatSeconds(sec) {
    if (!Number.isFinite(sec)) return "0:00";
    const mins = Math.floor(sec / 60);
    const secs = Math.floor(sec % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  }

  function triggerBackupPlayback(song) {
    playPauseBtn.textContent = "⏸";
    statusBadgeEl.textContent = "Playing demo synth";
    startFallbackSynth(
      song,
      (elapsed, total) => {
        currentTimeEl.textContent = formatSeconds(elapsed);
        durationEl.textContent = formatSeconds(total);
        seekSlider.value = String((elapsed / total) * 100);
      },
      () => {
        nextBtn.click();
      }
    );
  }

  window.playExternalPreview = async function (previewItem) {
    stopFallbackSynth();
    currentPlayingSongId = null;
    renderTracklist(currentDisplayedSongs);

    playerTitleEl.textContent = previewItem.title;
    playerArtistEl.textContent = `${previewItem.artist} • ${previewItem.genre} (Search Preview)`;
    if (previewItem.artworkUrl) {
      playerArtEl.innerHTML = `<img src="${previewItem.artworkUrl}" alt="${previewItem.title} cover" />`;
    } else {
      playerArtEl.textContent = "🔍";
    }
    statusBadgeEl.textContent = "Loading preview...";
    playPauseBtn.textContent = "⏳";

    try {
      audioEl.src = previewItem.previewUrl;
      await audioEl.play();
      playPauseBtn.textContent = "⏸";
      statusBadgeEl.textContent = "Previewing search result";
    } catch (error) {
      statusBadgeEl.textContent = "Preview unavailable";
      playPauseBtn.textContent = "▶";
    }
  };

  window.playSongById = async function (songId) {
    const song = currentDisplayedSongs.find((s) => s.id === songId) || playlistSongs.find((s) => s.id === songId);
    if (!song) return;

    stopFallbackSynth();
    currentPlayingSongId = song.id;
    renderTracklist(currentDisplayedSongs);

    playerTitleEl.textContent = song.title;
    playerArtistEl.textContent = `${song.artist} • ${song.genre}`;
    if (song.artworkUrl) {
      playerArtEl.innerHTML = `<img src="${song.artworkUrl}" alt="${song.title} cover" />`;
    } else {
      playerArtEl.textContent = song.icon;
    }
    statusBadgeEl.textContent = "Loading preview...";
    playPauseBtn.textContent = "⏳";

    try {
      const previewData = await fetchSongPreview(song);
      if (!previewData) {
        audioEl.pause();
        audioEl.removeAttribute("src");
        triggerBackupPlayback(song);
        return;
      }

      if (previewData.artworkUrl) {
        playerArtEl.innerHTML = `<img src="${previewData.artworkUrl}" alt="${song.title} cover" />`;
      }

      audioEl.src = previewData.previewUrl;
      await audioEl.play();
      playPauseBtn.textContent = "⏸";
      statusBadgeEl.textContent = "Playing 30s preview";
    } catch (error) {
      triggerBackupPlayback(song);
    }
  };

  playAllBtn.addEventListener("click", () => {
    if (currentDisplayedSongs.length > 0) {
      playSongById(currentDisplayedSongs[0].id);
    }
  });

  playPauseBtn.addEventListener("click", () => {
    if (synthInterval) {
      stopFallbackSynth();
      playPauseBtn.textContent = "▶";
      statusBadgeEl.textContent = "Paused";
      return;
    }

    if (!audioEl.src) {
      if (currentDisplayedSongs.length > 0) {
        playSongById(currentDisplayedSongs[0].id);
      }
      return;
    }

    if (audioEl.paused) {
      audioEl.play();
      playPauseBtn.textContent = "⏸";
      statusBadgeEl.textContent = "Playing 30s preview";
    } else {
      audioEl.pause();
      playPauseBtn.textContent = "▶";
      statusBadgeEl.textContent = "Paused";
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentDisplayedSongs.length === 0) return;
    const idx = currentDisplayedSongs.findIndex((s) => s.id === currentPlayingSongId);
    const prevIdx = idx <= 0 ? currentDisplayedSongs.length - 1 : idx - 1;
    playSongById(currentDisplayedSongs[prevIdx].id);
  });

  nextBtn.addEventListener("click", () => {
    if (currentDisplayedSongs.length === 0) return;
    const idx = currentDisplayedSongs.findIndex((s) => s.id === currentPlayingSongId);
    const nextIdx = idx === -1 || idx >= currentDisplayedSongs.length - 1 ? 0 : idx + 1;
    playSongById(currentDisplayedSongs[nextIdx].id);
  });

  audioEl.addEventListener("timeupdate", () => {
    currentTimeEl.textContent = formatSeconds(audioEl.currentTime);
    if (audioEl.duration) {
      durationEl.textContent = formatSeconds(audioEl.duration);
      seekSlider.value = String((audioEl.currentTime / audioEl.duration) * 100);
    }
  });

  audioEl.addEventListener("ended", () => {
    nextBtn.click();
  });

  seekSlider.addEventListener("input", () => {
    if (audioEl.duration) {
      audioEl.currentTime = (Number(seekSlider.value) / 100) * audioEl.duration;
    }
  });

  // Initial render
  syncCustomPillsToDOM();
  renderSidebarPlaylists();
  renderTracklist(playlistSongs);
});
