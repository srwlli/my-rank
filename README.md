# Pairwise Ranking App - Development Notes

## Project Overview
MVP mobile-first pairwise ranking system where users choose between 2 items to build crowd-sourced rankings using Elo rating algorithm.

## Development Timeline & Commits

### Initial MVP Concept
- **Goal**: Tinder-style voting for rankings
- **Core Feature**: Show 2 items, user taps preference, build rankings
- **Tech Decision**: Start simple with Category #1 and 15 generic items

### UI/UX Iterations
- **Layout**: Side-by-side vs stacked cards → chose side-by-side for better mobile UX
- **No Scrolling Rule**: Fixed height containers, everything fits on one screen
- **Mobile-First**: Touch-friendly buttons, responsive design

### Architecture Decisions
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS for rapid prototyping
- **Structure**: src/ folder organization for scalability
- **State Management**: Custom hooks (useRankings)
- **Algorithm**: Elo rating system for fair rankings

### Navigation Structure
- **Header**: Hamburger menu (left) + Logo (right)
- **Footer**: Frozen bottom nav with 5 icons (1-4 generic, 5 profile)
- **Philosophy**: Standard mobile app patterns users expect

### Database Integration
- **Backend**: Supabase for real-time data persistence
- **Tables**: items (rankings) + votes (analytics tracking)
- **Security**: Row Level Security enabled
- **Real-time**: Cross-user ranking synchronization

## Current Project Structure
```
pairwise-ranking-app/
├── src/
│   ├── app/              # Next.js 15 App Router
│   ├── components/       # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions (Elo, Supabase)
│   └── types/           # TypeScript definitions
├── .env.local           # Supabase credentials
└── package.json         # Dependencies & scripts
```

## Technical Stack
- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel

## Key Features Implemented
✅ Side-by-side voting interface (no scrolling)  
✅ Elo rating algorithm for fair rankings  
✅ Mobile-optimized touch interface  
✅ Frozen footer navigation  
✅ Hamburger menu + logo header  
✅ Real-time database integration  
✅ TypeScript throughout  
✅ Component-based architecture  
✅ Vote tracking for analytics  

## Database Schema
```sql
-- Items table: stores ranking items with Elo ratings
items (id, name, category_id, rating, votes, created_at)

-- Votes table: tracks individual voting sessions
votes (id, winner_id, loser_id, user_id, created_at)
```

## Design Principles
- **Simplicity**: Core feature first, expand later
- **Mobile-First**: Touch-friendly, no scrolling
- **Performance**: Minimal dependencies, fast interactions
- **Scalability**: Component architecture supports growth

## Next Development Phases
1. **Data Integration**: Connect useRankings hook to Supabase
2. **Real-time Updates**: Live ranking synchronization
3. **Categories**: Multiple ranking categories
4. **Analytics**: User voting patterns and insights
5. **Social Features**: Sharing rankings, user profiles

## Environment Setup
```bash
# Install dependencies
npm install

# Environment variables required
NEXT_PUBLIC_SUPABASE_URL=https://odzbysmaqpjagpcvouqq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[key]

# Development server
npm run dev
```

## Git Workflow Notes
- **Commits**: Feature-focused, descriptive messages
- **Branches**: main (stable), dev branches for features
- **Structure**: Organized codebase with clear separation of concerns

## Performance Considerations
- **Bundle Size**: Minimal dependencies for fast loading
- **Mobile Performance**: Optimized for touch interactions
- **Database**: Indexed queries for fast ranking retrieval
- **Caching**: Next.js built-in optimizations

## Security Notes
- **Supabase RLS**: Row Level Security policies configured
- **Environment Variables**: Sensitive data properly secured
- **Client-Side**: No sensitive operations exposed

## Testing Strategy (Future)
- **Unit Tests**: Component testing with Jest
- **Integration Tests**: Database operations
- **E2E Tests**: User voting flows
- **Performance Tests**: Mobile device testing

---

## Development Commands
```bash
# Project setup
npm install
npm run dev          # Start development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # Code linting

# Supabase
npx supabase login   # Login to Supabase CLI
npx supabase db push # Push schema changes
```

## Deployment Notes
- **Platform**: Vercel (Next.js optimized)
- **Environment**: Production env vars needed
- **Database**: Supabase hosted PostgreSQL
- **Domain**: TBD

---

*Last Updated: Initial MVP with Supabase integration*