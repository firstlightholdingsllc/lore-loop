# Lore-Loop — Your life. Your cast. Your next episode.

Next.js mobile-first creative prototype for Lore-Loop. The core social experience is planned to be free, while AI video generation will be subject to transparent usage limits and credits.

## Current prototype

- Vibrant coral, purple, cyan and blue mobile-first styling
- Home feed with sample stories and local likes
- Create Lore with **1–3 blended genres** (Comedy, Horror, Drama, Mystery, Action, Fantasy, Romance, Documentary, Nostalgia, Sci-Fi)
- Local **four-scene storyboard previews** and season/episode numbering
- Save episodes locally, with private/Loop/public **preview-only** intent selection
- **Your Series** page and an outline for a monthly recap movie
- Avatar emoji and multi-select character vibes, profiles, sample Loops

**Important:** This is a browser-local demo. Neither the privacy selection nor a group label changes server access because there is no shared backend yet. No AI text, images, video or narration is generated. No video costs are incurred by using the demo. Video recap is an **outline only**, not a rendered movie. Real authentication, cloud sync, consent, moderation, private Loop permissions and billing must be implemented before launching to real users.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Development roadmap

1. Validate interface and run a production build in connected deployment environment.
2. Create a **dedicated Lore-Loop Supabase project**, Auth, profiles, posts, Loops, memberships, characters, episodic metadata and row-level security.
3. Real AI story and storyboard endpoint: server-side API, prompt/input moderation, cost/usage budgets and human review before publication.
4. Character image consistency, optional video-generation queue, signed/private media, generation retries and credit limits.
5. Monthly movie *assembler* that reuses saved clips and photos, optionally producing a few new transitions.
6. Collaborative story perspectives with consent, followable series, notifications and analytics.
7. Accessibility, browser/mobile testing, production security review and PWA-to-native packaging.

Never commit API secrets to this public repository.
