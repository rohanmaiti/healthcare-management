# Hospital Manager - Theme System

This project includes a comprehensive theme system that supports both dark and light modes with consistent styling throughout the application.

## Features Implemented

### 🎨 Theme System
- **Dark/Light Mode Toggle**: Seamless switching between themes
- **Persistent Theme**: Saves user preference to localStorage
- **Theme Context**: Centralized theme management using React Context
- **Consistent Styling**: Reusable theme classes for all components

### 🏥 Hospital Admin Layout
- **Responsive Sidebar**: Expandable/collapsible sidebar with tooltips
- **Mobile-First Design**: Fully responsive with mobile menu overlay
- **Navigation**: React Router integration with active route highlighting
- **Profile Menu**: User profile dropdown with options
- **Notification System**: Bell icon with notification badge
- **Theme Toggle**: Sun/Moon icon with smooth transitions

### 📱 Mobile Responsiveness
- **Mobile Menu**: Hamburger menu for mobile devices
- **Overlay**: Dark overlay when mobile menu is open
- **Touch-Friendly**: Optimized for touch interactions
- **Responsive Text**: Text sizes adapt to screen size

## File Structure

```
src/
├── theme/
│   ├── context.ts              # Theme context definition
│   ├── ThemeProvider.tsx       # Theme provider component
│   ├── useTheme.ts            # Theme hooks (provider & consumer)
│   ├── useThemeClasses.ts     # Centralized theme classes
│   └── index.ts               # Theme exports
├── layouts/
│   └── hospital-admin/
│       ├── HospitalAdminLayout.tsx    # Main layout component
│       ├── constants.ts               # Menu items configuration
│       ├── hooks/
│       │   └── useHospitalAdminLayout.ts  # Layout state management
│       └── components/
│           ├── Sidebar.tsx            # Sidebar component
│           ├── Topbar.tsx             # Header/topbar component
│           └── MobileMenuOverlay.tsx  # Mobile menu overlay
└── App.tsx                    # Main app with routing
```

## Usage Guide

### 1. Using Theme Classes in Components

```tsx
import useThemeClasses from '../theme/useThemeClasses';

const MyComponent = () => {
  const themeClasses = useThemeClasses();
  
  return (
    <div className={themeClasses.bg.card}>
      <h1 className={themeClasses.text.primary}>Title</h1>
      <p className={themeClasses.text.secondary}>Description</p>
      <button className={themeClasses.button.primary}>
        Action Button
      </button>
    </div>
  );
};
```

### 2. Available Theme Classes

#### Background Classes
- `themeClasses.bg.primary` - Main background (white/slate-900)
- `themeClasses.bg.secondary` - Secondary background (gray-50/slate-800)
- `themeClasses.bg.card` - Card background (white/slate-800)
- `themeClasses.bg.hover` - Hover background
- `themeClasses.bg.sidebar` - Sidebar background
- `themeClasses.bg.topbar` - Topbar background
- `themeClasses.bg.main` - Main content background

#### Text Classes
- `themeClasses.text.primary` - Primary text (gray-900/white)
- `themeClasses.text.secondary` - Secondary text (gray-600/slate-300)
- `themeClasses.text.muted` - Muted text (gray-500/slate-400)
- `themeClasses.text.accent` - Accent text (green-600/blue-400)

#### Button Classes
- `themeClasses.button.primary` - Primary button styles
- `themeClasses.button.secondary` - Secondary button styles
- `themeClasses.button.ghost` - Ghost button styles

#### Border Classes
- `themeClasses.border.primary` - Primary border (gray-200/slate-700)
- `themeClasses.border.secondary` - Secondary border

#### Menu Classes
- `themeClasses.menuItem.active` - Active menu item styles
- `themeClasses.menuItem.inactive` - Inactive menu item styles

### 3. Adding New Routes

To add a new route to the admin panel:

1. **Update constants.ts**:
```tsx
export const menuItems: MenuItem[] = [
  // ... existing items
  {
    id: "new-section",
    label: "New Section",
    icon: YourIcon,
    route: '/hospital-admin/new-section'
  }
];
```

2. **Add route in App.tsx**:
```tsx
<Route path='new-section' element={<NewSection />} />
```

3. **Create component with theme classes**:
```tsx
const NewSection = () => {
  const themeClasses = useThemeClasses();
  return (
    <div className="p-6">
      <h1 className={`text-2xl font-bold mb-4 ${themeClasses.text.primary}`}>
        New Section
      </h1>
      <p className={themeClasses.text.secondary}>Content here</p>
    </div>
  );
};
```

### 4. Accessing Theme Context

```tsx
import { useThemeContext } from '../theme';

const Component = () => {
  const { isDark, toggleTheme, theme } = useThemeContext();
  
  return (
    <button onClick={toggleTheme}>
      {isDark ? 'Switch to Light' : 'Switch to Dark'}
    </button>
  );
};
```

### 5. Creating Custom Styled Components

Always use the theme classes for consistency:

```tsx
const StyledCard = () => {
  const themeClasses = useThemeClasses();
  
  return (
    <div className={`
      p-4 rounded-lg shadow-md transition-colors
      ${themeClasses.bg.card}
      ${themeClasses.border.primary}
      border
    `}>
      <h3 className={themeClasses.text.primary}>Card Title</h3>
      <p className={themeClasses.text.secondary}>Card content</p>
    </div>
  );
};
```

## Key Features

### Responsive Behavior
- **Desktop**: Sidebar can expand/collapse
- **Tablet**: Sidebar collapses by default
- **Mobile**: Sidebar becomes an overlay menu

### Theme Persistence
- User's theme choice is saved to localStorage
- Theme is applied to the HTML root element
- Smooth transitions between theme changes

### Accessibility
- Proper ARIA labels (can be added)
- Keyboard navigation support
- High contrast ratios for text

## Customization

### Adding New Theme Colors
Edit `useThemeClasses.ts` to add new color schemes:

```tsx
return {
  // ... existing classes
  custom: {
    success: isDark ? 'bg-green-600 text-white' : 'bg-green-100 text-green-800',
    warning: isDark ? 'bg-yellow-600 text-white' : 'bg-yellow-100 text-yellow-800',
    error: isDark ? 'bg-red-600 text-white' : 'bg-red-100 text-red-800',
  }
};
```

### Modifying Layout Behavior
Edit `useHospitalAdminLayout.ts` to customize sidebar behavior:

```tsx
// Auto-expand on large screens
const [sidebarExpanded, setSidebarExpanded] = useState<boolean>(
  window.innerWidth >= 1024
);
```

## Best Practices

1. **Always use theme classes** instead of hard-coded Tailwind classes
2. **Test both themes** when creating new components
3. **Use semantic class names** from the theme system
4. **Keep components consistent** with the existing design patterns
5. **Add new theme classes** to `useThemeClasses.ts` for reusability

This theme system ensures your entire application maintains consistent styling and provides a smooth user experience across both light and dark modes.
