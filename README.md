# Desi Chulha — Premium Modern Earthen Kitchen Redesign

A culturally rich, high-converting web application for **Desi Chulha** (`https://desichulha.netlify.app/`), celebrating authentic North Indian clay-oven dining, slow-cooked handi curries, and Bhagalpur family hospitality.

---

## 🎨 Creative Direction & Verified Design System

### "The Modern Earthen Kitchen"
Contrasts rich, smoky roasted charcoal-espresso surfaces (`#190C06`) with warm handloom parchment menu canvases (`#F6F3EC`), clay terracotta action triggers (`#B84A1B`), and temple brass hairline borders (`#B79754`).

### Color Tokens
- `--bg-espresso`: `#190C06` (Smoky Charcoal / Roasted Clove)
- `--bg-espresso-elevated`: `#26140B` (Elevated dark card surfaces)
- `--bg-parchment`: `#F6F3EC` (Warm Handloom Parchment menu background)
- `--bg-ivory-card`: `#FFFDF9` (High-contrast ivory dish cards)
- `--accent-terracotta`: `#B84A1B` (Primary CTA — >5.1:1 WCAG AA contrast against `#FFFDF9`)
- `--accent-terracotta-hover`: `#9A3B12`
- `--accent-brass`: `#B79754` (Temple Brass hairline borders and dark-mode highlights)
- `--accent-saffron`: `#FAE88A` (Warm saffron highlight typography on `#190C06`)
- `--veg-green`: `#15803D` (Indian standard Vegetarian badge color)
- `--nonveg-red`: `#B91C1C` (Indian standard Non-Vegetarian badge color)

### Typography
- **Headings & Display:** `'Cormorant Garamond', Georgia, serif` (600, 700, 700i)
- **Body & UI:** `'Plus Jakarta Sans', sans-serif` (400, 500, 600, 700)
- **Prices & Quantities:** `'JetBrains Mono', monospace` (600, `tabular-nums`)

---

## 🚀 Key Features & Architectural Enhancements

### 1. Accessible Pure Veg & Non-Veg Filtering (WCAG 2.2 AA)
- Distinct geometric shapes: **Square with filled green circle** for Vegetarian, **Square with filled red triangle** for Non-Vegetarian.
- Full `aria-label` screen reader announcements.
- Instant 1-tap filter toggle: `All Dishes`, `🟢 Pure Veg`, `🔺 Non-Veg`, `🌶️ Spicy Specials`.

### 2. Zero-Scroll-Fatigue Mobile Menu (<768px)
- Shifts from vertical cards to **Compact Horizontal Media Rows**:
  - Dish title, dietary indicator, description, and tabular `₹` price on the left.
  - `80×80px` rounded food thumbnail with `+ Add` stepper button on the right.
  - Fits 4–5 dishes per viewport without endless scrolling.

### 3. Reactive Order Tray & Direct WhatsApp Forwarding
- Persistent sticky bottom bar on mobile viewports showing live item counts and `₹` subtotal.
- Slide-over order drawer with real-time quantity stepper `[-] [qty] [+]`.
- Seamless formatting of itemized WhatsApp orders directly dispatched to `+91 98765 43210`.

### 4. Structured Table Reservation Hub
- Quick-select guest count pills (`2 Guests`, `4 Guests`, `6 Family`, `8+ Banquet`).
- Lunch (`11:30 AM – 3:30 PM`) vs. Dinner (`7:00 PM – 11:00 PM`) service slot toggles.
- Preference tags (Family Booth, Birthday/Anniversary, Pure Veg Prep).
- Integrated contact numbers, kitchen hours, and map landmark directions.

---

## 🛠️ Tech Stack & Scripts

- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Animation:** Motion (`motion/react`), Lenis smooth scrolling
- **Notifications:** Sonner toasts
- **Icons:** Lucide React

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Type check
npm run lint

# Production build
npm run build
```
