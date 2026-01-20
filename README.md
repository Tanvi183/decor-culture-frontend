# Decor and Culture - Next.js E-commerce Website

A modern, responsive e-commerce website for home decor and lifestyle products that reflect cultural aesthetics. Built with Next.js 13+ using the app directory structure, featuring authentication, product browsing, and user dashboard functionality.

## 🚀 Features

### Authentication System
- **Mock Login System** - Hardcoded credentials for demo purposes
- **Cookie-based Authentication** - Secure session management with HTTP-only cookies
- **Protected Routes** - Middleware protection for dashboard and user-specific pages
- **Persistent Sessions** - 7-day cookie expiration with automatic logout

### User Interface
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dark Mode Support** - Toggle between light and dark themes
- **Toast Notifications** - Success/error feedback using react-toastify
- **Dynamic Navigation** - Context-aware navigation with authentication states

### Product Management
- **Product Catalog** - Browse products with filtering and search
- **Product Details** - Individual product pages with detailed information
- **Shopping Cart** - Add to cart functionality with toast notifications
- **Product Data** - JSON-based product storage system

### User Dashboard
- **Profile Management** - User profile display and management
- **Account Overview** - Visual charts and activity tracking
- **Authentication Status** - Real-time auth state management
- **Logout Functionality** - Secure session termination

### Additional Features
- **Contact Form** - Customer inquiry system
- **Newsletter Signup** - Email subscription with validation
- **Social Media Integration** - Links to social platforms
- **SEO Optimized** - Meta tags and structured data

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd decor-culture-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env.local file (if needed)
   cp .env .env.local
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build
npm start
```

## 📋 Route Summary

### Public Routes
- `/` - Homepage with hero section and featured products
- `/products` - Product catalog with filtering and search
- `/products/[id]` - Individual product detail pages
- `/about` - About us page
- `/contact` - Contact form and information
- `/signin` - User authentication page
- `/signup` - User registration page

### Protected Routes (Requires Authentication)
- `/dashboard` - User dashboard with profile and analytics
- `/dashboard/orders` - Order history and tracking
- `/dashboard/payments` - Payment methods management
- `/dashboard/addresses` - Shipping addresses management
- `/dashboard/wishlist` - Saved products and favorites

### API Routes
- `/api/login` - POST - User authentication endpoint
- `/api/logout` - POST - Session termination endpoint

## 🔐 Authentication

### Demo Credentials
For testing the authentication system, use these hardcoded credentials:

- **Email:** `user@gmail.com`
- **Password:** `123456`

### Authentication Flow
1. User submits login form with credentials
2. API validates against hardcoded user data
3. On success, HTTP-only cookies are set for security
4. User is redirected to dashboard
5. Middleware protects routes and validates sessions
6. Logout clears cookies and redirects to signin

## 🎨 Styling & Design

- **Framework:** Tailwind CSS for utility-first styling
- **Components:** Custom React components with consistent design
- **Typography:** Serif fonts for branding, sans-serif for content
- **Color Scheme:** Primary green theme with accent colors
- **Responsive:** Mobile-first design with breakpoint optimization

## 📦 Project Structure

```
src/
├── app/
│   ├── api/                 # API routes
│   │   ├── login/route.js   # Authentication endpoint
│   │   └── logout/route.js  # Logout endpoint
│   ├── components/          # Reusable React components
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Footer.jsx       # Site footer
│   │   ├── HeroSection.jsx  # Homepage hero
│   │   └── ...              # Other components
│   ├── dashboard/           # Protected dashboard pages
│   ├── products/            # Product pages
│   ├── signin/              # Authentication pages
│   ├── globals.css          # Global styles
│   ├── layout.js            # Root layout
│   └── page.js              # Homepage
├── data/
│   └── products.json        # Product data
├── utils/
│   ├── auth.js              # Client-side auth utilities
│   └── serverAuth.js        # Server-side auth utilities
└── middleware.js            # Route protection middleware
```

## 🔧 Technologies Used

- **Frontend:** Next.js 13+, React 18, Tailwind CSS
- **Authentication:** Cookie-based sessions, middleware protection
- **Notifications:** react-toastify for user feedback
- **Icons:** Material Icons for consistent iconography
- **Deployment:** Vercel-ready configuration

## 🚀 Future Enhancements

- **Product Creation:** Admin panel for adding/editing products with toast notifications
- **Payment Integration:** Stripe or other payment gateway integration
- **Order Management:** Complete order processing workflow
- **Email System:** Automated email notifications
- **Search Enhancement:** Advanced filtering and search capabilities
- **Inventory Management:** Stock tracking and management
- **Reviews System:** Product reviews and ratings

## 📝 Development Notes

### Toast Notifications
The project uses react-toastify for user feedback. Toast notifications are implemented for:
- Successful login/logout
- Add to cart actions
- Form submissions
- Error handling

*Note: Product creation toast notifications will be added when the admin product management feature is implemented.*

### Authentication Security
- Uses HTTP-only cookies for token storage
- Implements CSRF protection with SameSite cookies
- Middleware-based route protection
- Automatic session expiration

### Performance Optimizations
- Next.js Image component for optimized images
- Dynamic imports for code splitting
- Tailwind CSS purging for smaller bundle sizes
- Server-side rendering for better SEO

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Demo Credentials for Testing:**
- Email: `user@gmail.com`
- Password: `123456`