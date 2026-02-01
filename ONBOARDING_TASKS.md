# RecipeShare – Onboarding & Task List (Team of 3)

This document is for **three people**: two new members each build **one full page with features**, and one person (you) implements **all the cross-cutting and existing-page features**. Everyone gets clear ownership and hands-on experience.

---

## Table of contents

1. [Team split](#1-team-split)
2. [Project overview](#2-project-overview)
3. [Getting started](#3-getting-started)
4. [Git workflow](#4-git-workflow)
5. [Member 1 – Build the Saved Recipes page](#5-member-1--build-the-saved-recipes-page)
6. [Member 2 – Build the Collections page](#6-member-2--build-the-collections-page)
7. [Person 3 (you) – Cross-cutting & existing-page features](#7-person-3-you--cross-cutting--existing-page-features)
8. [Coordination](#8-coordination)
9. [Resources](#9-resources)

---

## 1. Team split

| Person      | Role        | What they build |
|------------|-------------|------------------|
| **Member 1** | New member | **One full page:** Saved Recipes (`/saved`) + save/unsave feature + localStorage + nav link. |
| **Member 2** | New member | **One full page:** Collections (`/collections`) + mock collections data + recipe grids + nav link. |
| **Person 3** | You        | **All other tasks:** Dark mode, Surprise me, Print recipe, Scale recipe, Related recipes, Loading/empty states. |

Each new member owns **one route and its features** end-to-end. You own **improvements across the rest of the site**.

---

## 2. Project overview

**RecipeShare** is a frontend-only recipe site. Users can browse recipes, search/filter, open recipe details, and visit About, Contact, Careers, FAQ.

**Tech stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS.

**Important folders:**

- `app/` – Pages and routes (`app/page.tsx` = home, `app/recipe/[id]/page.tsx` = recipe detail)
- `components/` – Navbar, Footer, RecipeCard
- `lib/` – `mockData.ts` (Recipe type, mockRecipes array)

**Data:** Recipes from `lib/mockData.ts`. No backend; use `localStorage` where persistence is needed.

---

## 3. Getting started

**For both new members (and you, if needed):**

1. **Clone and install**
   ```bash
   git clone https://github.com/DaphneDana/Web-development.git
   cd Web-development
   npm install
   ```

2. **Run the app**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) and click through: Home → a recipe → About, Contact, FAQ, Careers.

3. **Create your branch** (see [Git workflow](#4-git-workflow)).

4. **Skim the codebase**
   - `app/page.tsx` – home with search/filter
   - `app/recipe/[id]/page.tsx` – single recipe
   - `components/RecipeCard.tsx` – card used on home
   - `lib/mockData.ts` – Recipe type and mockRecipes

---

## 4. Git workflow

- **One branch per person/feature:** e.g. `feature/saved-recipes-page`, `feature/collections-page`, `feature/dark-mode-and-features`.
- **Commit often** with clear messages.
- **Open a Pull Request** when your work is done (or in logical chunks). Another teammate reviews and merges.
- **Stay in sync:** Before new work, pull `main` and merge into your branch:
  ```bash
  git checkout main && git pull origin main
  git checkout your-branch && git merge main
  ```

---

## 5. Charles – Build the Saved Recipes page

**Goal:** You own the **Saved recipes** feature: a new page at `/saved` plus the ability to save/unsave recipes. Users can save recipes from the recipe detail page and see all saved recipes on your page.

---

### 5.1 – Create the Saved Recipes page (`/saved`)

**Steps:**

1. Create **`app/saved/page.tsx`** (client component: `'use client';`).
2. Read saved recipe IDs from **localStorage** (use a key like `recipeshare-saved-ids`, store an array of strings: `["1", "3", "5"]`).
3. Filter **`mockRecipes`** (from `lib/mockData.ts`) to only recipes whose `id` is in that array.
4. Render the list using the existing **`RecipeCard`** component (same grid/layout as the home page).
5. If there are **no saved recipes**, show an empty state: short message (e.g. “No saved recipes yet”) and a link or button to “Browse recipes” (link to `/`).
6. Add **Navbar** and **Footer** at the top/bottom so the page matches the rest of the site (import from `@/components/Navbar` and `@/components/Footer`).
7. Add a **link to “Saved”** (or “My recipes”) in **`components/Navbar.tsx`** and **`components/Footer.tsx`** so users can reach your page.

**Files you’ll create/touch:**  
`app/saved/page.tsx` (new), `components/Navbar.tsx`, `components/Footer.tsx`.

**Acceptance criteria:**

- [ ] Visiting `/saved` shows a page with Navbar and Footer.
- [ ] When localStorage has no saved IDs (or empty array), the page shows an empty state with a link to browse recipes.
- [ ] When localStorage has some saved IDs, the page shows only those recipes using RecipeCard.
- [ ] Navbar and Footer include a “Saved” (or “My recipes”) link to `/saved`.

---

### 5.2 – Save/unsave on the recipe detail page

**Steps:**

1. **Data layer:** Create **`lib/savedRecipes.ts`** with helpers:
   - `getSavedIds(): string[]` – read from localStorage, return array of recipe IDs (or `[]` if missing).
   - `addSavedId(id: string)` – add id to the array, write back to localStorage.
   - `removeSavedId(id: string)` – remove id from the array, write back to localStorage.
   - `isSaved(id: string): boolean` – return whether id is in the saved list.
2. On **`app/recipe/[id]/page.tsx`** you need **client-side** logic. Either:
   - Make the whole page a client component and use the helpers + `useState` for saved state, or
   - Add a small **client component** (e.g. `SaveRecipeButton`) that receives `recipeId`, uses `getSavedIds` / `addSavedId` / `removeSavedId` and `useState`, and shows “Save” vs “Saved” (e.g. heart outline vs filled heart). On click, toggle and update localStorage.
3. Place the button somewhere clear on the recipe page (e.g. next to the title or in the meta row). When the user clicks “Save”, add the recipe id to localStorage; when they click “Saved”, remove it. State should update immediately and persist after refresh.

**Files you’ll create/touch:**  
`lib/savedRecipes.ts` (new), `app/recipe/[id]/page.tsx` (and optionally a small `components/SaveRecipeButton.tsx`).

**Acceptance criteria:**

- [ ] On a recipe detail page, user can click Save/Saved and the button state updates immediately.
- [ ] After refresh, the button still shows the correct state (Saved if it was saved).
- [ ] Saved IDs persist in localStorage; the Saved page shows those recipes.

---

### 5.3 – (Optional) Show saved state on home page cards

**Steps:**

1. On **`app/page.tsx`**, read `getSavedIds()` (e.g. in `useState` or on mount) and pass `isSaved={savedIds.includes(recipe.id)}` to each **`RecipeCard`**.
2. In **`components/RecipeCard.tsx`**, accept an optional prop `isSaved?: boolean` and show a small heart or bookmark icon that’s filled when `isSaved` is true (read-only on the card; actual save/unsave stays on the recipe page).

**Files you’ll touch:**  
`app/page.tsx`, `components/RecipeCard.tsx`.

**Acceptance criteria:**

- [ ] On the home page, saved recipes show a filled heart (or similar); unsaved show outline. Optional; you can skip if short on time.

---

**Member 1 summary**

| Task              | What you learn |
|-------------------|----------------|
| Saved page        | New route, localStorage, filtering data, reusing RecipeCard, empty state |
| Save/unsave       | Client state, localStorage helpers, optional client component |
| Nav/Footer link   | Adding a link across shared components |

**Rough total time:** 4–6 hours.

---

## 6. Shimon – Build the Collections page

**Goal:** You own a new **Collections** page at `/collections`. Users see curated groups of recipes (e.g. “Quick weeknight”, “Date night”, “Holiday favorites”). Each collection has a name, short description, and a list of recipes displayed with the existing RecipeCard.

---

### 6.1 – Collections data

**Steps:**

1. Create **`lib/collections.ts`** (or add to `lib/mockData.ts` if you prefer). Define a **Collection** type, for example:
   - `id: string`
   - `title: string`
   - `description: string`
   - `recipeIds: string[]` (ids of recipes from mockRecipes)
2. Export an array of **3–4 collections** with mock data. Example:
   - **Quick weeknight** – recipeIds like `["2", "3", "4"]` (pasta, salad, tacos).
   - **Date night** – recipeIds like `["2", "5"]` (e.g. pasta, pizza).
   - **Holiday favorites** – recipeIds like `["1", "4", "5"]` (cookies, tacos, pizza).
   - **Healthy picks** – recipeIds like `["3", "6"]` (salad, smoothie).
   Use real recipe IDs from `lib/mockData.ts` so the links work.

**Files you’ll create/touch:**  
`lib/collections.ts` (new), or `lib/mockData.ts`.

**Acceptance criteria:**

- [ ] You have a `Collection` type and an array of collections, each with `recipeIds` that exist in `mockRecipes`.

---

### 6.2 – Collections page UI

**Steps:**

1. Create **`app/collections/page.tsx`**.
   - You can make it a **server component** that imports the collections data and passes it to the page, or a **client component** if you prefer (e.g. for future filters).
2. Page structure:
   - **Navbar** and **Footer** (same as other pages).
   - A **hero or title** section: e.g. “Collections” and a short subtitle.
   - For **each collection**:
     - Collection **title** and **description**.
     - **Grid of recipes**: resolve each `recipeId` to a recipe from `mockRecipes` (filter by id), then render each with **`RecipeCard`** (same as home page). If a recipe id doesn’t exist, skip it.
   - Layout: you can do one section per collection (title + description + recipe grid) stacked vertically. Use the same grid style as the home page for consistency.
3. Add a **link to “Collections”** in **`components/Navbar.tsx`** and **`components/Footer.tsx`** (e.g. next to “Browse Recipes” or “Saved”).

**Files you’ll create/touch:**  
`app/collections/page.tsx` (new), `components/Navbar.tsx`, `components/Footer.tsx`.

**Acceptance criteria:**

- [ ] Visiting `/collections` shows a page with Navbar and Footer.
- [ ] Each collection shows its title, description, and a grid of recipes (using RecipeCard).
- [ ] Clicking a recipe card goes to that recipe’s detail page (`/recipe/[id]`).
- [ ] Navbar and Footer include a “Collections” link to `/collections`.

---

### 6.3 – (Optional) Collection detail page

**Steps:**

1. Create **`app/collections/[id]/page.tsx`** (dynamic route). Given a collection id from the URL, find that collection and render only that collection’s title, description, and recipe grid. Add a “Back to all collections” link to `/collections`.
2. On the main Collections page, make each collection title (or a “View all” link) link to `/collections/[id]` so users can open a single collection.  
   This is optional; the main requirement is the single Collections page that lists all collections and their recipes.

**Files you’ll create/touch:**  
`app/collections/[id]/page.tsx` (new), optionally update `app/collections/page.tsx` to link to each collection.

**Acceptance criteria:**

- [ ] (If implemented) Clicking a collection goes to `/collections/[id]` and shows only that collection’s recipes.

---

**Member 2 summary**

| Task           | What you learn |
|----------------|----------------|
| Collections data | Types, mock data, mapping recipe IDs to recipes |
| Collections page | New route, layout, reusing RecipeCard, Navbar/Footer |
| Optional [id]   | Dynamic route, single collection view |

**Rough total time:** 4–6 hours.

---

## 7. Person 3 (you) – Cross-cutting & existing-page features

You implement the following across the existing site. Order is flexible; you can do them in any order.

---

### 7.1 – Dark mode toggle

**Goal:** Add a theme toggle (light/dark) that persists across pages and reloads.

**Steps:**

1. Use **localStorage** (e.g. key `recipeshare-theme`) to store `'light' | 'dark'`. Create a small helper or **client component** that reads/writes this and applies a class (e.g. `dark`) to `document.documentElement` so Tailwind’s `dark:` classes apply.
2. In **`app/layout.tsx`**, wrap the app in a client **ThemeProvider** (or similar) that runs on mount, reads the saved theme, and sets the class. Ensure there’s no flash (optional: suppress initial render until theme is read).
3. Enable **dark mode** in Tailwind (class-based: `dark` on the root). Add `dark:bg-gray-900`, `dark:text-gray-100`, etc. to layout, Navbar, Footer, and at least the home and recipe detail pages so they look good in both themes.
4. Add a **toggle button** (sun/moon icon) in **`components/Navbar.tsx`** that toggles theme and updates localStorage. Navbar (or a child) must be a client component to use state/effects.

**Files you’ll touch:**  
`app/layout.tsx`, `components/Navbar.tsx`, `app/globals.css` (and Tailwind config if needed). Optionally `components/ThemeProvider.tsx` or `lib/theme.ts`.

**Acceptance criteria:**

- [ ] Toggle switches between light and dark; theme persists after refresh and across pages.
- [ ] Navbar, Footer, home, and recipe detail pages are readable in both themes.

**Rough time:** 2–4 hours.

---

### 7.2 – “Surprise me” random recipe

**Goal:** A button on the home page that sends the user to a random recipe.

**Steps:**

1. On **`app/page.tsx`**, add a **“Surprise me”** (or “Random recipe”) button near the hero or search area.
2. On click, pick a random recipe from `mockRecipes` (e.g. `mockRecipes[Math.floor(Math.random() * mockRecipes.length)]`) and navigate to `/recipe/[id]` using `useRouter().push()` or similar.
3. Style the button to match the site (e.g. secondary style, optional icon).

**Files you’ll touch:**  
`app/page.tsx`.

**Acceptance criteria:**

- [ ] Clicking “Surprise me” navigates to a recipe detail page; each click can show a different recipe.

**Rough time:** ~1 hour.

---

### 7.3 – Print-friendly recipe page

**Goal:** When printing the recipe detail page, only the recipe content is shown (no navbar, footer, or back button).

**Steps:**

1. In **`app/recipe/[id]/page.tsx`**, add a class like `no-print` to the Navbar, Footer, back button, and any “Print” button. In **`app/globals.css`** (or a CSS module), add `@media print { .no-print { display: none !important; } }`.
2. Optionally add a **“Print recipe”** button that calls `window.print()`; hide that button when printing.
3. Ensure the recipe title, image (optional), ingredients, and instructions are readable when printed (good font size, no cut-off).

**Files you’ll touch:**  
`app/recipe/[id]/page.tsx`, `app/globals.css`.

**Acceptance criteria:**

- [ ] Print (or “Print recipe”) shows only the recipe content; layout is readable.

**Rough time:** 1–2 hours.

---

### 7.4 – Scale recipe (servings)

**Goal:** On the recipe detail page, the user can change the number of servings; the ingredients list updates proportionally.

**Steps:**

1. Add a **servings control** on **`app/recipe/[id]/page.tsx`** (e.g. “Servings: X” with minus/plus or a dropdown). You’ll need client state: `useState(recipe.servings)`. The recipe detail page (or a client child component) must be client to use state.
2. For each ingredient string, parse the **first number** (e.g. “2 cups flour” → 2, “1/2 tsp salt” → 0.5). Scale it: `(originalQuantity * currentServings / recipe.servings)`. Round or format nicely; if an ingredient has no number, show it unchanged.
3. Render the scaled quantities in the ingredients list; keep instructions and the rest of the recipe unchanged. Don’t allow 0 or negative servings; optionally cap at 24.

**Files you’ll touch:**  
`app/recipe/[id]/page.tsx` (likely need a client component for the control and scaled list).

**Acceptance criteria:**

- [ ] User can change servings; ingredient quantities update. Instructions stay the same.

**Rough time:** 2–4 hours.

---

### 7.5 – Related recipes

**Goal:** At the bottom of the recipe detail page, show 2–3 “Related recipes” (same category or similar tags), excluding the current recipe.

**Steps:**

1. Write a helper (e.g. in **`lib/recipeUtils.ts`** or in the page): `getRelatedRecipes(currentRecipe, allRecipes, limit = 3)`. Filter out the current recipe; prefer same `category`; if needed, use `tags`; return up to `limit` recipes.
2. In **`app/recipe/[id]/page.tsx`**, call this and render the results with **`RecipeCard`** in a row or small grid. Add a heading like “You might also like”. If there are no related recipes, you can show nothing or fall back to 2–3 random recipes.

**Files you’ll touch:**  
`app/recipe/[id]/page.tsx`, optionally `lib/recipeUtils.ts`.

**Acceptance criteria:**

- [ ] Related recipes section appears below the main recipe; cards link to the correct recipe page.

**Rough time:** 1–2 hours.

---

### 7.6 – Loading / empty states

**Goal:** Clear empty state when search has no results; optional loading state for the recipe grid.

**Steps:**

1. **Empty state:** On the home page, when **search/filter returns zero recipes**, show a clear message and a “Clear filters” or “Browse all” action. Refine copy and styling if you already have something.
2. **Loading state (optional):** If you add a short simulated delay before showing filtered results, show a skeleton or spinner for the recipe grid (e.g. 6 card-shaped divs with `animate-pulse`).

**Files you’ll touch:**  
`app/page.tsx`, optionally a small `components/SkeletonCard.tsx` or inline skeleton.

**Acceptance criteria:**

- [ ] Empty result state is clear and actionable.
- [ ] (If implemented) Loading state appears during delay, then the list.

**Rough time:** 1–2 hours.

---

**Person 3 summary**

| Task           | What you learn / do |
|----------------|----------------------|
| 7.1 Dark mode  | Theme context/localStorage, Tailwind dark, layout |
| 7.2 Surprise me| useRouter, random choice |
| 7.3 Print       | @media print, UX |
| 7.4 Scale recipe | Client state, parsing numbers, derived state |
| 7.5 Related    | Filtering data, reusing RecipeCard |
| 7.6 Loading/empty | Conditional UI, accessibility |

**Rough total time:** 8–14 hours (can be split across multiple sessions).

---

## 8. Coordination

- **Member 1** and **Member 2** can work in parallel; they own different routes (`/saved` vs `/collections`) and different files. They will both touch **Navbar** and **Footer** to add their links; coordinate who adds their link first, or each adds their own link in their PR (merge one, then the other and resolve the small nav conflict if needed).
- **Person 3** can work in parallel with the others. You’ll touch **layout**, **Navbar** (dark mode), **home page**, **recipe detail page**, and **globals.css**. If you add a “Saved” or “Collections” link to nav/footer before the others are done, you can add placeholder links or the others add their links in their PRs.
- **Merge order:** No strict order. Merge when PRs are ready; if two PRs touch the same file (e.g. Navbar), merge one and have the other rebase/merge main and fix the conflict (usually just keeping both new links).

---

## 9. Resources

- [Next.js App Router](https://nextjs.org/docs/app)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)

---

## Quick reference – who builds what

| Person     | Page(s)        | Other work |
|-----------|-----------------|------------|
| **Member 1** | `/saved`        | Save/unsave on recipe page, `lib/savedRecipes.ts`, Navbar/Footer link |
| **Member 2** | `/collections` (and optionally `/collections/[id]`) | `lib/collections.ts`, Navbar/Footer link |
| **Person 3** | –               | Dark mode, Surprise me, Print, Scale recipe, Related recipes, Loading/empty |

Good luck, and have fun building.
