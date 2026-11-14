# Lore-Loop

Mobile-first Lore-Loop starter built with Next.js App Router and React. This is a **working local prototype**, not a deployed social network.

## Get started

```bash
npm install
npm run dev
```

Open http://localhost:3000. The site includes a feed, local story-card maker, avatar selection, sample groups, and a profile. Content persists only in the browser's localStorage. It does **not** call any AI API, store cloud records, or authenticate users.

## Deployment

Import this GitHub repository into a **separate** Vercel project named `lore-loop-staging`, with framework Next.js. Do not connect the production domain until the preview is reviewed.

## Next steps

1. Create a dedicated Lore-Loop Supabase project, configure Auth and row-level security.
2. Implement profiles, avatars, posts, group memberships and permissions.
3. Add server-only story generation, moderation, consent checks, and per-user limits.
4. Add image generation and asynchronous video jobs with usage budgets.
5. Build PWA installation and then evaluate iOS/Android packaging.

**Privacy:** This repo is public and contains no secrets. Do not put user data or AI keys into source files. Browser-local prototype stories are visible to others sharing that browser profile.
