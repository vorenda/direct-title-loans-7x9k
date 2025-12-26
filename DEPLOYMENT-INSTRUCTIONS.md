# Direct Title Loans - Deployment Instructions

## PROJECT OVERVIEW

**Business**: Direct Title Loans
**Service**: Title Loans (YMYL Financial Service)
**States**: California, Florida
**Cities**: Los Angeles, San Diego, Miami, Tampa
**Framework**: NextJS 15 with App Router + TypeScript
**Build Status**: 60% Complete

---

## COMPLETED FILES ✅

### Core Infrastructure
- `package.json` - NextJS 15, React 19, TypeScript
- `tsconfig.json` - TypeScript configuration
- `next.config.ts` - NextJS config with Unsplash images
- `app/layout.tsx` - Root layout with Google Fonts
- `app/globals.css` - Complete design system (CSS variables)
- `app/sitemap.ts` - All pages mapped
- `app/robots.ts` - SEO configuration

### Shared Components
- `components/Header.tsx` - Sticky header with navigation
- `components/Footer.tsx` - Footer with YMYL disclaimers
- `components/Breadcrumbs.tsx` - With BreadcrumbList schema
- `app/(main)/layout.tsx` - Main layout wrapper

### Pages Created
1. **Homepage** (`app/(main)/page.tsx`)
   - All 10 sections fully implemented
   - Hero, Services grid, How It Works, Locations, Why Choose Us, Testimonials, FAQ, Final CTA
   - FAQPage schema markup
   - NO STUBS - everything rendered

2. **Service Pillar** (`app/(main)/services/car-title-loans/page.tsx`)
   - Complete pillar page with all sections
   - FAQ with schema
   - Related services
   - FinancialService schema

3. **City Page** (`app/(main)/locations/california/los-angeles/page.tsx`)
   - **ALL 18 FIELDS FROM JSON RENDERED**:
     1. SEO (title, meta, keywords) ✅
     2. Hero (h1, subheadline, 2 CTAs) ✅
     3. Description (local landmarks, economic context) ✅
     4. NAP Card (Name, Address, Phone with hours) ✅
     5. Local Proof (directions, map embed iframe) ✅
     6. **Dynamic Hours** (from JSON, not hardcoded) ✅
     7. **Map Embed** (actual iframe, not placeholder) ✅
     8. **Product Links** (all 6 services linking UP to pillar pages) ✅
     9. **State Compliance** (DFPI, 30% APR cap, regulatory body with link) ✅
     10. **Local Reviews** (3 reviews with stars) ✅
     11. **FAQ** (6 questions with FAQPage schema) ✅
     12. Nearby Locations (4 cities with distances) ✅
     13. CTA Section (2 buttons, address) ✅
     14. Breadcrumbs (with BreadcrumbList schema) ✅
     15. Schema (FinancialService LD+JSON) ✅
     16. Financial Stats (used in description) ✅
     17. Market Context (rendered) ✅
     18. Images (hero image ready) ✅

4. **Error Pages**
   - `app/not-found.tsx` - 404 page

---

## REMAINING WORK (40%)

### Critical Pages (Must Complete Before Deploy)

#### Service Pillar Pages (5 pages)
Copy `app/(main)/services/car-title-loans/page.tsx` and customize for:

1. `/services/truck-title-loans/page.tsx`
2. `/services/motorcycle-title-loans/page.tsx`
3. `/services/rv-title-loans/page.tsx`
4. `/services/emergency-title-loans/page.tsx`
5. `/services/title-loan-refinancing/page.tsx`

**Data Source**: Use `service-schema-template.json` pillarPages array
**Time**: 30 minutes (copy/paste + find/replace)

#### City Pages (3 pages)
Copy `app/(main)/locations/california/los-angeles/page.tsx` and customize for:

1. `/locations/california/san-diego/page.tsx`
   Data: `city-pages/san-diego-ca.json`

2. `/locations/florida/miami/page.tsx`
   Data: `city-pages/miami-fl.json`

3. `/locations/florida/tampa/page.tsx`
   Data: `city-pages/tampa-fl.json`

**Steps**:
- Change import: `import cityData from "@/city-pages/[CITY]-[STATE].json"`
- Update breadcrumbs
- Everything else auto-renders from JSON

**Time**: 20 minutes

#### State Hub Pages (2 pages)
Create simple hub pages:

1. `/locations/california/page.tsx`
   ```tsx
   - List 2 cities: Los Angeles, San Diego
   - California compliance summary (30% APR cap, DFPI)
   - Links to city pages
   - State schema
   ```

2. `/locations/florida/page.tsx`
   ```tsx
   - List 2 cities: Miami, Tampa
   - Florida compliance summary (tiered rates, OFR)
   - Links to city pages
   - State schema
   ```

**Time**: 15 minutes

#### Legal Pages (4 pages + components)
Need to create from legal templates:

1. `/privacy-policy/page.tsx` (full 16 sections)
2. `/terms-and-conditions/page.tsx` (full 22 sections)
3. `/e-consent/page.tsx` (all 14 sections)
4. `/ccpa/page.tsx` (interactive form)
   - Create `components/PrivacyRequestForm.tsx`
   - Create `app/api/privacy-request/route.ts`
5. Create `components/FormConsent.tsx` (for lead forms)

**Data Source**: `.claude/legal-templates/` folder
**Time**: 1 hour

#### Lead Capture Pages (2 pages + layout)
1. Create `/app/(minimal)/layout.tsx` (minimal layout, no header/footer)
2. Create `/app/(minimal)/apply/page.tsx` (multi-step wizard)
   - Create `components/ApplyWizard.tsx`
3. Create `/app/(minimal)/sda/page.tsx` (LMS form)
   - Create `components/LmsForm.tsx`
   - Create `app/api/lms/route.ts`

**Time**: 45 minutes

---

## QUICK START GUIDE

### 1. Install Dependencies
```bash
cd "/Users/valerazatler/Developer/nextjs-design test"
npm install
```

### 2. Test Development Server
```bash
npm run dev
```

Open http://localhost:3000
Verify:
- ✅ Homepage loads with all 10 sections
- ✅ Header/Footer render
- ✅ /services/car-title-loans loads
- ✅ /locations/california/los-angeles loads with all sections

### 3. Create Remaining Pages

#### Option A: Manual (Recommended for Learning)
Follow "REMAINING WORK" section above, copy/paste template pages

#### Option B: Batch Create (Fast)
Create all service pages at once:
```bash
# Run this from project root
for service in truck-title-loans motorcycle-title-loans rv-title-loans emergency-title-loans title-loan-refinancing; do
  mkdir -p "app/(main)/services/$service"
  # Copy car-title-loans page.tsx and customize
done
```

Create all city pages:
```bash
# San Diego
mkdir -p "app/(main)/locations/california/san-diego"
# Copy los-angeles/page.tsx, change import to san-diego-ca.json

# Miami
mkdir -p "app/(main)/locations/florida/miami"
# Copy los-angeles/page.tsx, change import to miami-fl.json

# Tampa
mkdir -p "app/(main)/locations/florida/tampa"
# Copy los-angeles/page.tsx, change import to tampa-fl.json
```

### 4. Build Validation
```bash
npm run build
```

**Expected Output**:
```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (XX/XX)
✓ Finalizing page optimization

Route (app)                              Size
┌ ○ /                                    X kB
├ ○ /services/car-title-loans           X kB
├ ○ /locations/california/los-angeles   X kB
└ ○ /not-found                           X kB
```

### 5. Content Validation

Run these checks **after build succeeds**:

```bash
# Check city page has all sections
grep -l "localReviews" app/\(main\)/locations/california/los-angeles/page.tsx
# Should output file path (confirms reviews section exists)

grep -l "faqSchema" app/\(main\)/locations/california/los-angeles/page.tsx
# Should output file path (confirms FAQ schema)

grep -l "iframe" app/\(main\)/locations/california/los-angeles/page.tsx
# Should output file path (confirms map embed)

# Check homepage for stubs
grep -c "{/\*" app/\(main\)/page.tsx
# Should output 0 (no stub comments)
```

---

## DEPLOYMENT TO VERCEL

### 1. Create GitHub Repository
```bash
cd "/Users/valerazatler/Developer/nextjs-design test"
git init
git add .
git commit -m "Initial commit - Direct Title Loans NextJS site"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/direct-title-loans.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel
1. Go to https://vercel.com
2. Click "New Project"
3. Import from GitHub: `direct-title-loans`
4. Framework: NextJS (auto-detected)
5. Click "Deploy"

**Environment Variables**: None needed (all data in JSON files)

### 3. Custom Domain (Optional)
1. In Vercel project settings → Domains
2. Add: `directtitleloans.com`
3. Configure DNS:
   - Type: A Record
   - Name: @
   - Value: 76.76.21.21
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com

---

## VALIDATION CHECKLIST (Before Going Live)

### Build Validation
- [ ] `npm run build` completes with zero errors
- [ ] All pages listed in build output
- [ ] No TypeScript errors

### Content Validation
- [ ] City pages render ALL 18 JSON fields
- [ ] localReviews section with stars (NOT missing)
- [ ] FAQ section with FAQPage schema (NOT stub)
- [ ] Dynamic hours from JSON (NOT hardcoded)
- [ ] Map embed with actual iframe (NOT placeholder)
- [ ] Regulatory body with link (NOT missing)
- [ ] Product links to service pillar pages (anti-doorway)
- [ ] Homepage FAQ fully implemented (NOT `{/* Add FAQ */}`)
- [ ] Homepage testimonials 3 cards (NOT `{/* Add testimonials */}`)

### SEO Validation
- [ ] All pages have unique titles
- [ ] All pages have meta descriptions
- [ ] Breadcrumbs on all subpages
- [ ] Schema markup on all pages (BreadcrumbList, FAQPage, FinancialService)
- [ ] Sitemap includes all pages
- [ ] robots.txt configured

### YMYL Compliance
- [ ] State compliance sections on city pages
- [ ] Regulatory body links working
- [ ] Footer disclaimers present
- [ ] No prepayment penalty disclosed
- [ ] Repossession warnings present
- [ ] Licensed lender status stated

### Accessibility
- [ ] All images have alt text
- [ ] Buttons have accessible labels
- [ ] Color contrast meets WCAG AA
- [ ] Keyboard navigation works

---

## PROJECT STRUCTURE

```
nextjs-design test/
├── app/
│   ├── (main)/                    # Main layout (Header + Footer)
│   │   ├── page.tsx               # Homepage ✅
│   │   ├── services/
│   │   │   └── car-title-loans/
│   │   │       └── page.tsx       # Service pillar ✅
│   │   └── locations/
│   │       └── california/
│   │           └── los-angeles/
│   │               └── page.tsx   # City page ✅ (ALL 18 FIELDS)
│   ├── (minimal)/                 # Minimal layout (No Header/Footer)
│   │   ├── apply/                 # Lead capture wizard (TODO)
│   │   └── sda/                   # LMS form (TODO)
│   ├── layout.tsx                 # Root layout ✅
│   ├── globals.css                # Design system ✅
│   ├── not-found.tsx              # 404 page ✅
│   ├── sitemap.ts                 # Sitemap ✅
│   └── robots.ts                  # Robots ✅
├── components/
│   ├── Header.tsx                 ✅
│   ├── Footer.tsx                 ✅
│   └── Breadcrumbs.tsx            ✅
├── city-pages/                    # City page JSON data ✅
│   ├── los-angeles-ca.json
│   ├── san-diego-ca.json
│   ├── miami-fl.json
│   └── tampa-fl.json
├── design/                        # Design templates ✅
│   ├── design-system.css
│   ├── index.html
│   └── city-page.html
├── service-schema-template.json   ✅
├── locations.json                 ✅
├── state-compliance/              ✅
│   ├── california.json
│   ├── florida.json
│   └── index.json
├── package.json                   ✅
├── tsconfig.json                  ✅
├── next.config.ts                 ✅
├── BUILD-STATUS.md                ✅
└── DEPLOYMENT-INSTRUCTIONS.md     ✅ (this file)
```

---

## ANTI-DOORWAY ARCHITECTURE ✅

This site follows Google's anti-doorway best practices:

### What We Did RIGHT
- ✅ One page per city (NOT service x location pages)
- ✅ City pages link UP to service pillar pages (via productLinks)
- ✅ All 6 services available on every city page
- ✅ Unique local content (landmarks, highways, reviews, economic data)
- ✅ State silo URLs: `/locations/[state]/[city]/`

### What We AVOIDED (Doorway Pages)
- ❌ /car-title-loans-los-angeles (service x location)
- ❌ /truck-title-loans-los-angeles (service x location)
- ❌ Thin pages with only service variations
- ❌ Duplicate content across cities

### Content Uniqueness Per City
Each city page includes:
- Unique landmarks (e.g., "Bradbury Building" for LA, "Fashion Valley Mall" for SD)
- Unique highways (e.g., "I-10 Santa Monica Freeway" for LA, "I-8 Kumeyaay Highway" for SD)
- Unique local phone (213 area code for LA, 619 for SD, 305 for Miami, 813 for Tampa)
- Unique reviews mentioning local areas
- Unique economic data (median income, home values)
- Unique map embed for exact location

---

## SUPPORT

### Files to Reference
- **Homepage Template**: `app/(main)/page.tsx`
- **Service Template**: `app/(main)/services/car-title-loans/page.tsx`
- **City Template**: `app/(main)/locations/california/los-angeles/page.tsx`
- **Design System**: `app/globals.css`

### Data Sources
- **Service Content**: `service-schema-template.json` (pillarPages array)
- **City Content**: `city-pages/[city]-[state].json` (all 18 fields)
- **State Compliance**: `state-compliance/california.json` and `florida.json`
- **Locations**: `locations.json` (local facts, landmarks, highways)

### Common Issues

**Issue**: Build fails with "Cannot find module"
**Fix**: Run `npm install` first

**Issue**: City page shows [object Object]
**Fix**: Check JSON import path matches exact filename

**Issue**: Images not loading
**Fix**: Images must be from `images.unsplash.com` (already configured in next.config.ts)

**Issue**: TypeScript errors
**Fix**: Run `npm run build` - most errors auto-resolve

---

## SUCCESS METRICS

When complete, this site will have:
- ✅ 1 Homepage with 10 sections
- ✅ 6 Service pillar pages
- ✅ 2 State hub pages
- ✅ 4 City pages (all 18 fields)
- ✅ 4 Legal pages
- ✅ 2 Lead capture pages
- ✅ Error pages
- ✅ Sitemap + robots.txt
**Total**: 20 pages, all unique, all optimized for local SEO

---

## ESTIMATED TIME TO COMPLETE

| Task | Time | Status |
|------|------|--------|
| Service pages (5) | 30 min | TODO |
| City pages (3) | 20 min | TODO |
| State pages (2) | 15 min | TODO |
| Legal pages (4) | 60 min | TODO |
| Lead capture (2) | 45 min | TODO |
| Testing & validation | 30 min | TODO |
| **TOTAL** | **3 hours 20 min** | 60% DONE |

**Already Complete**: 2 hours of work (core, homepage, 1 service, 1 city)

---

## CONTACT

**Project**: Direct Title Loans
**Framework**: NextJS 15 + TypeScript
**Build Date**: 2025-12-26
**Status**: 60% Complete - Ready for Page Creation

**Next Action**: Complete remaining pages, run `npm run build`, deploy to Vercel
