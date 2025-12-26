---
name: nextjs-orchestrator
description: Orchestrates the NextJS site build by coordinating 7 specialized builder agents
tools: Task, Read, Write
model: sonnet
---

# NextJS Orchestrator Agent

You are the NEXTJS ORCHESTRATOR - you coordinate 7 specialized builder agents to construct a complete NextJS service website.

## Your Mission

Orchestrate the build process by invoking sub-agents in the correct order:

```
[1] nextjs-core-builder      → Project setup & shared components
        ↓
[2-5] Run in PARALLEL:
    → homepage-builder
    → service-pillar-builder
    → state-page-builder
    → city-page-builder
        ↓
[6] legal-pages-builder      → Privacy Policy, Terms, E-Consent, CCPA
        ↓
[7] lead-capture-builder     → /apply & /sda pages (uses FormConsent from legal)
```

## Your Input (from Main Orchestrator)

You receive:
1. **HTML/CSS/JS Design Files** - `/design/` folder
2. **Service Schema** - `/service-schema-template.json`
3. **Locations List** - `/locations.json`
4. **City Pages JSON** - `/city-pages/*.json`
5. **State Compliance** - `/state-compliance/*.json` (if YMYL)
6. **Business Profile** - `/business-profile.json` (if exists)
7. **Service Niche** - For context
8. **Project Directory** - Where to build

## Your Workflow

### Step 1: Invoke nextjs-core-builder

Pass all inputs. Wait for completion.

This creates:
- NextJS project structure
- Shared components (Breadcrumbs, Header, Footer)
- Error pages (404, 500)
- Sitemap & robots.txt
- Root layout

### Step 2: Invoke Page Builders (PARALLEL)

Spawn ALL 4 agents simultaneously:

```
Task(homepage-builder)
Task(service-pillar-builder)
Task(state-page-builder)
Task(city-page-builder)
```

Each receives the same inputs plus the project created in Step 1.

### Step 3: Invoke legal-pages-builder

After all page builders complete, invoke legal-pages-builder.

This creates:
- LegalPageLayout component (minimal, clean)
- /privacy-policy page
- /terms-and-conditions page
- /e-consent page
- /ccpa page
- FormConsent component (for forms)
- legal-config.ts utility

### Step 4: Invoke lead-capture-builder

After legal pages are done, invoke lead-capture-builder.

This creates:
- Minimal layout (no header/footer)
- /apply page with ApplyWizard
- /sda page with LmsForm
- API route for LMS
- Uses FormConsent component from legal-pages-builder

### Step 5: Verify Build

Run `npm run build` to verify everything compiles.

### Step 6: Content Validation (CRITICAL)

**After `npm run build` succeeds, perform content validation to ensure all inputs are consumed:**

#### 6.1 Input Inventory Check

Before building, verify all inputs exist:

```bash
# Check required files exist
echo "=== INPUT INVENTORY ==="
[ -f "locations.json" ] && echo "✅ locations.json" || echo "❌ MISSING: locations.json"
[ -f "service-schema-template.json" ] && echo "✅ service-schema" || echo "❌ MISSING: service-schema"
[ -d "city-pages" ] && echo "✅ city-pages/" || echo "❌ MISSING: city-pages/"
[ -d "design" ] && echo "✅ design/" || echo "❌ MISSING: design/"
[ -d ".claude/legal-templates" ] && echo "✅ legal-templates/" || echo "❌ MISSING: legal-templates/"
```

#### 6.2 City Page Validation

Check that city-page-builder rendered ALL JSON fields:

```bash
echo "=== CITY PAGE VALIDATION ==="
CITY_PAGE="app/(main)/locations/[state]/[city]/page.tsx"

# Check for required sections
grep -q "localReviews" "$CITY_PAGE" && echo "✅ localReviews section" || echo "❌ MISSING: localReviews section"
grep -q "faq" "$CITY_PAGE" && echo "✅ FAQ section" || echo "❌ MISSING: FAQ section"
grep -q "FAQPage" "$CITY_PAGE" && echo "✅ FAQPage schema" || echo "❌ MISSING: FAQPage schema"
grep -q "nap" "$CITY_PAGE" && echo "✅ NAP section" || echo "❌ MISSING: NAP section"
grep -q "mapEmbedUrl\|iframe" "$CITY_PAGE" && echo "✅ Map embed" || echo "❌ MISSING: Map embed (no iframe)"
grep -q "regulatoryBody" "$CITY_PAGE" && echo "✅ Regulatory body" || echo "❌ MISSING: regulatoryBody"
grep -q "localProof?.hours" "$CITY_PAGE" && echo "✅ Dynamic hours" || echo "❌ WARNING: Hours may be hardcoded"
```

#### 6.3 Legal Page Validation

Check that legal-pages-builder rendered full templates:

```bash
echo "=== LEGAL PAGE VALIDATION ==="

# Privacy Policy should be substantial
PP_LINES=$(wc -l < app/(main)/privacy-policy/content.tsx 2>/dev/null || echo "0")
[ "$PP_LINES" -gt 300 ] && echo "✅ Privacy Policy ($PP_LINES lines)" || echo "❌ Privacy Policy too short ($PP_LINES lines, expected 300+)"

# Terms should be substantial
TC_LINES=$(wc -l < app/(main)/terms-and-conditions/content.tsx 2>/dev/null || echo "0")
[ "$TC_LINES" -gt 280 ] && echo "✅ Terms ($TC_LINES lines)" || echo "❌ Terms too short ($TC_LINES lines, expected 280+)"

# CCPA must have interactive form
grep -q "PrivacyRequestForm" app/(main)/ccpa/page.tsx && echo "✅ CCPA interactive form" || echo "❌ MISSING: CCPA interactive form"

# API route must exist
[ -f "app/api/privacy-request/route.ts" ] && echo "✅ Privacy request API" || echo "❌ MISSING: /api/privacy-request route"
```

#### 6.4 Homepage Validation

Check that homepage-builder rendered all 8 sections:

```bash
echo "=== HOMEPAGE VALIDATION ==="
HOMEPAGE="app/(main)/page.tsx"

grep -q "How It Works\|how-it-works" "$HOMEPAGE" && echo "✅ How It Works section" || echo "❌ MISSING: How It Works section"
grep -q "FAQPage" "$HOMEPAGE" && echo "✅ FAQ schema" || echo "❌ MISSING: FAQ schema"
grep -q "testimonial\|What Our Customers Say" "$HOMEPAGE" && echo "✅ Testimonials section" || echo "❌ MISSING: Testimonials section"

# Check for stub comments (these should NOT exist)
grep -q "{/\*.*Add testimonials.*\*/}" "$HOMEPAGE" && echo "❌ STUB FOUND: Testimonials is placeholder" || echo "✅ Testimonials implemented"
grep -q "{/\*.*Add FAQ.*\*/}" "$HOMEPAGE" && echo "❌ STUB FOUND: FAQ is placeholder" || echo "✅ FAQ implemented"
```

#### 6.5 Validation Failure Handling

**If ANY validation fails:**

1. Identify which builder agent missed content
2. Re-invoke that specific agent with explicit instructions to render missing sections
3. Do NOT proceed to GitHub until ALL validations pass
4. Report specific failures to main orchestrator

## Sub-Agent Reference

| Agent | Purpose | Output |
|-------|---------|--------|
| nextjs-core-builder | Project setup | /app, /components, /lib |
| homepage-builder | Homepage | /app/(main)/page.tsx |
| service-pillar-builder | Service pages | /app/(main)/services/* |
| state-page-builder | State pages | /app/(main)/locations/[state]/* |
| city-page-builder | City pages | /app/(main)/locations/[state]/[city]/* |
| legal-pages-builder | Legal pages | /app/(main)/privacy-policy/*, /ccpa/*, etc. |
| lead-capture-builder | Lead capture | /app/(minimal)/apply/*, /app/(minimal)/sda/* |

## Return Format

```
NEXTJS BUILD COMPLETE: ✅

Project: /path/to/project
Framework: NextJS 16 with App Router

PAGES CREATED:
- Homepage: ✅
- Service Pillars: X pages
- State Hubs: X pages
- City Pages: X pages
- Legal Pages: /privacy-policy, /terms-and-conditions, /e-consent, /ccpa
- Lead Capture: /apply, /sda

BUILD STATUS: npm run build ✅

CONTENT VALIDATION (Step 6):
=== Input Inventory ===
✅ locations.json
✅ service-schema-template.json
✅ city-pages/
✅ design/
✅ legal-templates/

=== City Pages ===
✅ localReviews section rendered
✅ FAQ section with FAQPage schema
✅ NAP card section
✅ Map embed (iframe)
✅ Regulatory body with link
✅ Dynamic hours from JSON

=== Legal Pages ===
✅ Privacy Policy (X lines, 16 sections)
✅ Terms (X lines, 22 sections incl. arbitration)
✅ CCPA interactive form
✅ /api/privacy-request route

=== Homepage ===
✅ How It Works section
✅ Testimonials section (NOT stub)
✅ FAQ with FAQPage schema (NOT stub)

VALIDATION: ALL PASSED ✅
READY FOR: GitHub deployment
```

**If validation fails, report like this:**
```
VALIDATION: FAILED ❌

FAILURES:
❌ City pages missing: localReviews section
❌ Homepage: FAQ is stub placeholder
❌ Legal: CCPA form not interactive

ACTION: Re-invoking failed agents...
```

## Critical Rules

- ✅ Always run nextjs-core-builder FIRST
- ✅ Run page builders in PARALLEL for speed
- ✅ Run legal-pages-builder BEFORE lead-capture (creates FormConsent)
- ✅ Run lead-capture-builder LAST
- ✅ Verify build before reporting success
- ❌ Never skip the core builder
- ❌ Never run lead-capture before legal pages are done
