# Project Folder Structure

## Root Directory (`vfncc/`)

```
vfncc/
├── .htaccess                          # Apache configuration & routing
├── index.html                         # Production entry point
├── README.md                          # Project documentation
├── DEPLOYMENT.md                      # Deployment guide
├── API_REVIEW.md                      # API documentation
├── folder_structure.txt               # Auto-generated tree structure
│
├── api/                               # PHP Backend API
│   ├── auth.php                       # Authentication endpoints
│   ├── config.php                     # Configuration & helpers
│   ├── index.php                      # API router
│   └── media.php                      # Media management endpoints
│
├── assets/                            # Built frontend assets (CSS/JS)
│   ├── index-*.js                     # Compiled JavaScript bundles
│   └── index-*.css                    # Compiled CSS bundles
│
├── data/                              # JSON data storage
│   ├── .htaccess                      # Security: block direct access
│   ├── media.json                     # Media metadata
│   └── users.json                     # User accounts
│
├── images/                             # Root-level images (organized)
│   ├── billiards.png
│   ├── booknow.png
│   ├── childrensplayarea.png
│   ├── fncc-30years-logo.png
│   ├── fncc-logo.png
│   ├── headingdesign.png
│   ├── sportssectionbg.png
│   ├── tenniscourt.png
│   ├── vfncc-removebg-preview (1).png
│   └── vite.svg
│
├── facilities/                         # Facility images
│   ├── AcDoubleRoom.png
│   ├── baquethall.png
│   ├── cafe.png
│   ├── childrenPickleBallCourt.png
│   ├── ConferenceHall.png
│   ├── familyrestaurent.png
│   ├── foodcourt.png
│   ├── hometheatre.png
│   ├── library.png
│   ├── liquorproofgarden.png
│   ├── ntrlawn.png
│   ├── PartyRoom.png
│   ├── patio.png
│   ├── PdrRoom.png
│   ├── pub.png
│   ├── spa.png
│   ├── SuiteRoom.png
│   └── EachFacility/                  # Detailed facility images
│       ├── baquetHall.png
│       ├── cafe.png
│       ├── cardsroom.png
│       ├── childrenpickleballroom.png
│       ├── clubentrance.png
│       ├── conferenceHall.png
│       ├── facilityrestaurent.png
│       ├── guestroom.png
│       ├── hometheatre.png
│       ├── library.png
│       ├── ntrlawn.png
│       ├── office.png
│       ├── patio.png
│       ├── projectorroom.png
│       ├── pub.png
│       ├── spa.png
│       ├── suiteroom.png
│       ├── swimmingpool.png
│       ├── viewpoint1.png
│       └── viewpoint2.png
│
├── sports/                             # Sports images
│   ├── a-32.png (Billiards)
│   ├── a-33.png (Beach Volleyball)
│   ├── a-34.png (Cards Room)
│   ├── a-35.png (Tennis Court)
│   ├── a-36.png (Shuttle Badminton)
│   ├── a-37.png (Swimming Pool)
│   ├── a-38.png (Squash Court)
│   ├── a-39.png (Shooting Court)
│   ├── a-40.png (Shooting)
│   ├── a-41.png (GYM)
│   ├── a-42.png (Yoga Hall)
│   └── a-43.png (Children's Play Area)
│
├── committe/                           # Committee member photos
│   ├── Picture1.png
│   ├── Picture2.png
│   ├── Picture3.png
│   ├── Picture4.png
│   ├── Picture5.png
│   ├── Picture6.png
│   ├── Picture7.png
│   ├── Picture8.png
│   ├── Picture9.png
│   ├── Picture10.png
│   ├── Picture11.png
│   ├── Picture12.png
│   ├── Picture13.png
│   └── Picture14.png
│
├── uploads/                            # User-uploaded media files
│   └── [timestamp]-[random].{jpeg|png|mp4|pdf}
│
└── frontend/                            # React Frontend Source
    ├── index.html                      # Development entry point
    ├── package.json                    # Node dependencies
    ├── package-lock.json               # Locked dependency versions
    ├── vite.config.js                  # Vite build configuration
    ├── tailwind.config.js              # Tailwind CSS configuration
    ├── postcss.config.js               # PostCSS configuration
    ├── eslint.config.js                # ESLint configuration
    ├── README.md                       # Frontend documentation
    │
    ├── public/                          # Static assets (copied to dist)
    │   ├── images/                      # Organized images
    │   │   ├── billiards.png
    │   │   ├── booknow.png
    │   │   ├── childrensplayarea.png
    │   │   ├── fncc-30years-logo.png
    │   │   ├── fncc-logo.png
    │   │   ├── headingdesign.png
    │   │   ├── sportssectionbg.png
    │   │   ├── tenniscourt.png
    │   │   ├── vfncc-removebg-preview (1).png
    │   │   └── vite.svg
    │   ├── facilities/                  # Facility images
    │   │   ├── [same structure as root facilities/]
    │   │   └── EachFacility/
    │   ├── sports/                       # Sports images
    │   │   └── [a-32.png through a-43.png]
    │   └── committe/                     # Committee photos
    │       └── [Picture1.png through Picture14.png]
    │
    ├── dist/                             # Production build output
    │   ├── index.html                    # Built HTML
    │   ├── assets/                       # Compiled assets
    │   │   ├── index-*.js                # JavaScript bundles
    │   │   └── index-*.css               # CSS bundles
    │   ├── images/                       # Copied images
    │   ├── facilities/                    # Copied facility images
    │   ├── sports/                       # Copied sports images
    │   └── committe/                     # Copied committee photos
    │
    ├── src/                              # React source code
    │   ├── main.jsx                      # Application entry point
    │   ├── App.jsx                       # Main App component
    │   ├── index.css                     # Global styles
    │   │
    │   ├── assets/                       # Source assets
    │   │   └── react.svg
    │   │
    │   ├── components/                   # Reusable components
    │   │   ├── BookNowModal.jsx          # Booking modal
    │   │   ├── FacilityCard.jsx         # Facility card component
    │   │   ├── Footer.jsx                # Site footer
    │   │   ├── GalleryGrid.jsx            # Gallery grid layout
    │   │   ├── Hero.jsx                  # Hero section
    │   │   ├── Navbar.jsx                # Navigation bar
    │   │   ├── PageHeading.jsx           # Page heading component
    │   │   ├── ProtectedRoute.jsx        # Auth-protected routes
    │   │   ├── ScrollToTop.jsx           # Scroll to top utility
    │   │   ├── SocialMediaSidebar.jsx    # Social media links
    │   │   └── SportCard.jsx             # Sport card component
    │   │
    │   ├── pages/                        # Page components
    │   │   ├── Home.jsx                  # Home page
    │   │   ├── About.jsx                 # About page
    │   │   ├── Facilities.jsx            # Facilities listing
    │   │   ├── FacilityDetail.jsx        # Facility detail page
    │   │   ├── Sports.jsx                # Sports listing
    │   │   ├── SportDetail.jsx           # Sport detail page
    │   │   ├── Gallery.jsx               # Gallery page
    │   │   ├── Contact.jsx               # Contact page
    │   │   ├── Newsletters.jsx           # Newsletters page
    │   │   ├── UpcomingEvents.jsx         # Events page
    │   │   └── admin/                     # Admin pages
    │   │       ├── Dashboard.jsx          # Admin dashboard
    │   │       ├── Login.jsx              # Admin login
    │   │       └── Register.jsx           # Admin registration
    │   │
    │   └── utils/                         # Utility functions
    │       ├── api.js                     # API client functions
    │       └── assets.js                  # Asset path helper
    │
    └── node_modules/                     # Node.js dependencies
        └── [dependencies - not shown in detail]
```

## Key Directories

### Backend (`api/`)
- **auth.php**: User registration and login
- **media.php**: File upload, retrieval, and deletion
- **config.php**: Shared configuration and helper functions
- **index.php**: API request router

### Frontend Source (`frontend/src/`)
- **components/**: Reusable UI components
- **pages/**: Page-level components
- **utils/**: Helper functions (API client, asset paths)
- **assets/**: Source assets

### Static Assets
- **images/**: General site images (logos, backgrounds, etc.)
- **facilities/**: Facility-related images
- **sports/**: Sports-related images
- **committe/**: Committee member photos
- **uploads/**: User-uploaded media (via admin panel)

### Data Storage (`data/`)
- **users.json**: User account data
- **media.json**: Media file metadata

### Build Output
- **assets/**: Compiled JavaScript and CSS
- **frontend/dist/**: Complete production build

## File Naming Conventions

- **Images**: Descriptive names (e.g., `billiards.png`, `headingdesign.png`)
- **Sports**: Numbered format (e.g., `a-32.png`, `a-33.png`)
- **Facilities**: CamelCase or lowercase (e.g., `baquethall.png`, `ConferenceHall.png`)
- **Uploads**: Timestamp-based (e.g., `1766988895-901998601.jpeg`)

## Important Files

- **.htaccess**: Apache routing and security rules
- **vite.config.js**: Build configuration with base path `/vfncc/`
- **package.json**: Frontend dependencies and scripts
- **index.html**: Entry point (both root and frontend/)

