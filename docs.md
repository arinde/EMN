# Mechanical & Fabrication Engineering Company Website - Build Prompt

## Project Overview
Build a modern, professional multi-page website for a mechanical and fabrication engineering company using Next.js 14+ (App Router), TypeScript, Tailwind CSS, and Framer Motion for animations.

## Technical Stack
- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React 
- **Image Optimization**: Next.js Image component

## Pages & Structure

### 1. Home Page (`/`)
**Sections:**
- **Hero Section**: Full-screen hero with compelling headline, subheadline, CTA buttons ("Get a Quote", "Our Services"), and background image/video of manufacturing facility or machinery in action
- **About Preview**: Brief 2-3 sentence company introduction with stats (years in business, projects completed, team size)
- **Services Overview**: Grid of 4-6 core services with icons, brief descriptions, and "Learn More" (Welding and Fabrication, Ship haul mainteanance, Marine Valve servicing and installation, marine logistic and consulting services, certified labour supply, sand blasting and painting, equipemnt rentals, Gas freeing and tank caliberation, sulphonation pkant, marine construction and design) links
- **Featured Projects**: Carousel/grid of 3-4 showcase projects with before/after or process images
- **Industries Served**: Icon grid or cards showing key industries (automotive, aerospace, construction, oil & gas, etc.)
- **Why Choose Us**: 4 key differentiators (quality, precision, on-time delivery, certifications, Safety)
- **Testimonials**: Slider with client testimonials and company logos
- **CTA Section**: Strong call-to-action for consultation or quote request
- **Footer**: Company info, quick links, contact details, social media

**Animations:**
- Fade-in and slide-up animations for sections as they enter viewport
- Parallax effect on hero section
- Hover effects on service cards and project images
- Smooth scroll animations

### 2. About Us Page (`/about`)
**Sections:**
- **Page Hero**: Compelling headline about company mission/vision
- **Company Story**: Timeline or narrative of company history and growth
- **Mission & Vision**: Clear statements with supporting visuals
- **Core Values**: 4-6 values with icons and descriptions
- **Leadership Team**: Photo grid with names, titles, and brief bios
- **Certifications & Accreditations**: Logos and details of ISO, industry certifications
- **Facility Tour**: Image gallery or virtual tour section of manufacturing facility
- **Company Stats**: Animated counters for key metrics (projects, employees, sq ft facility, etc.)

**Animations:**
- Timeline scroll animations
- Counter animations when stats come into view
- Image reveal effects in gallery
- Team member card hover effects

### 3. Services Page (`/services`)
**Layout:**
- **Services Overview Hero**: Introduction to comprehensive capabilities
- **Service Cards Grid**: Detailed cards for each service category:
  - **Custom Fabrication** (metal cutting, welding, forming)
  - **CNC Machining** (milling, turning, precision machining)
  - **Structural Steel Work** (building frames, platforms)
  - **Sheet Metal Fabrication**
  - **Welding Services** (TIG, MIG, arc welding)
  - **Assembly & Integration**
  - **Prototyping & Design Support**
  - **Maintenance & Repair**

**Each Service Card Should Include:**
- Icon or image
- Service name and description
- Key capabilities/techniques
- Materials worked with
- Industries served
- CTA button

**Animations:**
- Staggered card entrance animations
- Expandable/collapsible service details
- Hover effects with image zoom or overlay

### 4. Individual Service Pages (`/services/[slug]`)
**Structure for Each:**
- Service-specific hero with relevant imagery
- Detailed description and capabilities
- Process/workflow diagram or steps
- Equipment and technology used
- Materials and specifications
- Quality standards followed
- Example projects/case studies
- FAQ section for that service
- Contact form for service inquiry

### 5. Projects/Portfolio Page (`/projects`)
**Features:**
- Filterable portfolio grid (by industry, service type, material)
- Project cards with featured image, title, industry, services used
- Hover effects showing quick details
- Modal or detail page for each project
- Before/after comparison sliders where applicable

**Animations:**
- Filter transition animations
- Grid layout animations on filter change
- Image hover effects
- Modal entry/exit animations

### 6. Individual Project Pages (`/projects/[slug]`)
**Content:**
- Project hero image/gallery
- Client name (if not confidential) and industry
- Challenge/objective
- Solution approach
- Services and processes used
- Materials and specifications
- Results and outcomes
- Image gallery with lightbox
- Related projects section

### 7. Industries Page (`/industries`)
**Layout:**
- Overview of industries served
- Industry cards/sections:
  - Automotive
  - Aerospace & Defense
  - Oil & Gas
  - Construction
  - Mining
  - Agriculture
  - Food Processing
  - Manufacturing
  - Marine
  - Energy/Renewables

**Each Industry Section:**
- Industry-specific challenges
- Solutions provided
- Relevant services
- Case study examples
- Standards and certifications

### 8. Capabilities Page (`/capabilities`)
**Sections:**
- Equipment inventory (CNC machines, welders, cutting tools, inspection equipment)
- Technical specifications and tolerances
- Material capabilities
- Capacity and production volume
- Quality control processes
- Software and design capabilities (CAD/CAM)
- Certifications and standards compliance

**Animations:**
- 3D equipment visualizations or image carousels
- Specification reveal animations

### 9. Contact Page (`/contact`)
**Elements:**
- Contact form with fields:
  - Name, Email, Phone
  - Company name
  - Service interested in (dropdown)
  - Project details (textarea)
  - File upload for drawings/specifications
  - Budget range (optional)
  - Timeline (optional)
- Company contact information (phone, email, address)
- Interactive map showing location
- Business hours
- Alternative contact methods
- Emergency contact info if applicable

**Animations:**
- Form field focus animations
- Submit button loading state
- Success/error message animations

### 10. Quote Request Page (`/quote`)
**Multi-step Form:**
- Step 1: Project type and services needed
- Step 2: Material and specifications
- Step 3: Quantity and timeline
- Step 4: File uploads (drawings, CAD files, images)
- Step 5: Contact information
- Progress indicator
- Save and return later option

### 11. Careers Page (`/careers`) [Optional]
- Company culture section
- Benefits and perks
- Current openings with job cards
- Application process
- Employee testimonials

### 12. Blog/Resources Page (`/blog`) [Optional]
- Article grid with featured posts
- Categories: Industry News, Technical Guides, Company Updates, Project Spotlights
- Search and filter functionality
- Individual blog post pages with rich content formatting

## Design Requirements

### Visual Style
- **Color Scheme**: Professional industrial palette
  - Primary: Deep blue or charcoal gray
  - Secondary: Metallic silver or steel blue
  - Accent: Orange, red, or bright blue for CTAs
  - Backgrounds: White, light gray, dark gray sections for contrast
- **Typography**: 
  - Headings: Bold, modern sans-serif (Inter, Roboto, Montserrat)
  - Body: Clean, readable sans-serif
  - Establish clear hierarchy
- **Imagery Style**: 
  - High-quality photos of machinery, manufacturing processes, finished products
  - Team photos in facility
  - Close-ups of precision work
  - Wide shots of facility
  - Consistent color grading

### Layout Principles
- Clean, spacious layouts with ample whitespace
- Strong grid system (12-column)
- Section-based design with alternating backgrounds
- Consistent padding and spacing scale
- Mobile-first responsive design
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)

### UI Components Needed
- Navigation header (sticky/fixed on scroll)
- Mobile hamburger menu with smooth animation
- Breadcrumbs for internal pages
- Call-to-action buttons (primary and secondary styles)
- Service/project cards with hover effects
- Testimonial slider/carousel
- Image galleries with lightbox
- Contact forms with validation
- Filter/sort controls for projects
- Stats counters with animation
- Loading states and spinners
- Toast notifications for form submissions
- Modal dialogs
- Accordion components for FAQs
- Tabs for organizing content
- Progress indicators for multi-step forms
- Footer with newsletter signup

## Animation Requirements (Framer Motion)

### Page Transitions
- Smooth fade and slide transitions between pages
- Loading animations for page changes

### Scroll Animations
- Elements fade in and slide up as they enter viewport
- Staggered animations for grids and lists
- Parallax effects on hero sections
- Progress indicators for long pages

### Hover Interactions
- Card lift and shadow effects
- Image zoom on hover
- Button scale and color transitions
- Service icon animations

### Interactive Elements
- Smooth accordion expand/collapse
- Tab switching animations
- Modal entry/exit animations
- Form field focus states
- Loading spinners and progress bars

### Performance Considerations
- Use `IntersectionObserver` for scroll animations
- Lazy load animations
- Reduce motion for users with `prefers-reduced-motion`
- Keep animations performant (transform and opacity)

## Functional Requirements

### SEO Optimization
- Semantic HTML structure
- Meta tags for all pages (title, description, OG tags)
- Structured data markup (Organization, LocalBusiness, BreadcrumbList)
- XML sitemap generation
- robots.txt configuration
- Alt text for all images
- Descriptive URLs

### Performance
- Image optimization with Next.js Image component
- Lazy loading for images and components
- Code splitting
- Minimize bundle size
- Implement loading states
- Optimize font loading
- Target Lighthouse score: 90+

### Forms & Validation
- Client-side validation with error messages
- Server-side validation
- File upload with size and type restrictions
- Form submission with loading states
- Success/error notifications
- Email notifications for form submissions
- Form data sanitization

### Accessibility
- WCAG 2.1 Level AA compliance
- Keyboard navigation support
- ARIA labels where needed
- Focus indicators
- Color contrast compliance
- Screen reader friendly
- Skip to content link

### Navigation
- Sticky header with smooth hide/show on scroll
- Mega menu for services (if many services)
- Mobile-friendly hamburger menu
- Active page indicators
- Breadcrumb navigation
- Footer sitemap
- Quick contact button (floating or in header)

## Content Guidelines

### Copy Tone
- Professional yet approachable
- Technical but not overly complex
- Confidence-inspiring
- Action-oriented CTAs
- Clear and concise

### Key Messaging
- Precision and quality craftsmanship
- Industry expertise and experience
- On-time delivery and reliability
- Custom solutions and flexibility
- Safety and compliance
- Cutting-edge technology
- Customer-focused service

## Development Structure

### File Organization
```
src/
├── app/
│   ├── (pages)/
│   │   ├── page.tsx (home)
│   │   ├── about/
│   │   ├── services/
│   │   ├── projects/
│   │   ├── industries/
│   │   ├── capabilities/
│   │   ├── contact/
│   │   └── quote/
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/ (reusable UI components)
│   ├── sections/ (page sections)
│   ├── layout/ (header, footer)
│   └── forms/
├── lib/
│   ├── utils.ts
│   ├── animations.ts
│   └── constants.ts
├── types/
│   └── index.ts
├── data/
│   ├── services.ts
│   ├── projects.ts
│   └── testimonials.ts
└── public/
    └── images/
```

### TypeScript Types Needed
- Service interface
- Project interface
- Testimonial interface
- Team member interface
- Form data interfaces
- Industry interface
- Equipment/capability interface

## Specific Implementation Notes

### Header Component
- Logo on left
- Navigation menu (center or right)
- CTA button (Get Quote)
- Mobile menu toggle
- Smooth scroll on navigation
- Shadow on scroll
- Transparent on hero, solid on scroll

### Footer Component
- Company info and logo
- Quick links (organized in columns)
- Contact information
- Newsletter signup
- Social media links
- Copyright and legal links
- Back to top button

### Contact Form Handler
- Use Next.js API routes
- Send email via SendGrid/Nodemailer/Resend
- Store submissions in database (optional)
- Validation and error handling
- Rate limiting
- reCAPTCHA integration (optional)

### Image Management
- Use Next.js Image with proper sizing
- Implement blur placeholders
- Organize images in logical folders
- Use WebP format where possible
- Provide fallbacks

## Deliverables Expected

1. **Fully functional multi-page website** with all pages listed above
2. **Responsive design** working perfectly on mobile, tablet, and desktop
3. **Smooth animations** throughout using Framer Motion
4. **Working contact forms** with validation
5. **Clean, typed TypeScript code** with proper interfaces
6. **Reusable component library**
7. **SEO-optimized** with meta tags and semantic HTML
8. **Fast loading times** with optimized images and code
9. **Accessible** meeting WCAG standards
10. **Easy to maintain** with clear code structure and comments

## Sample Content to Include

### Services (minimum 6)
- Custom Metal Fabrication
- CNC Machining
- Structural Steel Work
- Welding Services
- Sheet Metal Fabrication
- Assembly & Integration

### Projects (minimum 6)
- Mix of different industries
- Showcase different capabilities
- Include relevant images

### Testimonials (minimum 4)
- Client quotes
- Company names
- Industries

### Team Members (minimum 4)
- Leadership team
- Photos and bios

## Additional Features to Consider

- Live chat integration point
- Newsletter signup
- Social media feed integration
- Video backgrounds/embedded videos
- 3D model viewers for CAD files (if applicable)
- Client portal login link
- Blog/news section
- FAQ page
- Privacy policy and terms pages
- Cookie consent banner
- Dark mode toggle (optional)

## Priority Implementation Order

1. Core layout and navigation structure
2. Home page with all sections
3. Services pages (overview and individual)
4. Projects/portfolio section
5. About page
6. Contact and quote forms
7. Remaining pages (industries, capabilities, etc.)
8. Animations and interactions
9. SEO optimization
10. Final polish and testing

---

**Note**: This website should convey trust, expertise, and capability. The design should feel solid and professional, reflecting the precision and quality of the engineering work. Use real industrial imagery, showcase actual work, and make it easy for potential clients to understand services and get in touch.