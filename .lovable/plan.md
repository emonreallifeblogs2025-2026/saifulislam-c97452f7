

## Plan: Multiple UI Updates Across Sections

### 1. SoundCloud Cover Image Update
- Replace `soundcloud-cover.png` with the uploaded `IMG_4198.jpeg`
- Keep existing animated border glow effect

### 2. SoundCloud & Stats Section Gap Fix
- Add more spacing (`mb-16` or `py-20`) between SoundCloud section bottom and Stats section top
- Ensure the "আরো গান শুনুন" button and "বছরের অভিজ্ঞতা" don't overlap on any device

### 3. Text Stability / Layout Jumping Fix
- Add `min-height` or fixed dimensions to key text containers across sections to prevent layout shifts
- Use `whitespace-nowrap` or constrained widths where text is jumping between lines on different devices

### 4. Education Section - Remove "মাধ্যমে"
- In `Education.tsx` line 37: remove `"মাধ্যমে"` and `"Through"` from the heading
- Make `"সৃজনশীলতাকে শক্তিশালী করা"` / `"Empowering Creativity"` smaller font size (e.g., `text-2xl md:text-4xl`)

### 5. Contact Section - Replace Map with Gold Particles
- Remove the Google Maps iframe background from `Contact.tsx`
- Add gold fade-in/fade-out particle effect (same pattern as Hero) with higher particle count (~50)

### 6. Footer - Red Background with 3D Embossed Icons
- Remove the SVG map background
- Set footer background to red (`bg-red-700`)
- Style social icons with 3D emboss effect using `shadow`, `border`, and gradient techniques
- Keep white/light text for contrast

### 7. Navbar - Multi-language Toggle
- Expand `LanguageContext` to support 4 languages: `bn`, `en`, `fr`, `ar`
- Add French and Arabic translations (basic translations for nav/UI elements)
- Replace the EN/বাংলা toggle with a dropdown/toggle supporting all 4 languages
- Position the language selector to the **left of the 3-line menu button** in the navbar
- Show it on the main page (hero area level), visible on all devices

### Files to Edit
- `src/assets/soundcloud-cover.png` -- replace with uploaded image
- `src/components/SoundCloudMusic.tsx` -- spacing adjustments
- `src/components/Stats.tsx` -- spacing/gap fixes
- `src/components/Education.tsx` -- remove "মাধ্যমে", smaller heading
- `src/components/Contact.tsx` -- replace map with gold particles
- `src/components/Footer.tsx` -- red background, 3D embossed icons
- `src/components/Navbar.tsx` -- 4-language toggle left of menu button
- `src/contexts/LanguageContext.tsx` -- add French & Arabic translations

