# Breathe Design System - Component Inventory

This document tracks all components for the Breathe Design System, organized by category and implementation status.

## Implementation Status Legend
- ✅ **Implemented** - Component is built and available in Storybook
- 🚧 **In Progress** - Currently being developed
- 📋 **Planned** - Scheduled for development
- 💭 **Backlog** - Future consideration

---

## Actions & Buttons

| Component | External | Internal | Priority | Notes |
|-----------|----------|----------|----------|-------|
| Button | ✅ | ✅ | P0 | Primary, Secondary, Outline, Ghost variants |
| Button Sizes | ✅ | ✅ | P0 | Small (44px), Default (56px), Large (64px) for External |
| Button Group | ✅ | 📋 | P1 | Group related actions |
| Page Actions | ✅ | 📋 | P2 | Page header actions |

---

## Form Components

| Component | External | Internal | Priority | Notes |
|-----------|----------|----------|----------|-------|
| Text Field / Input | ✅ | ✅ | P0 | Single-line text input with validation states |
| Text Area | ✅ | ✅ | P1 | Multi-line text input with auto-resize and character count |
| Select Dropdown | ✅ | ✅ | P0 | Dropdown with custom chevron icon |
| Checkbox | ✅ | ✅ | P0 | Custom styled checkbox |
| Radio Buttons | ✅ | ✅ | P0 | Custom styled radio |
| Toggle Switch | ✅ | ✅ | P1 | Smooth animated switch |
| Date Picker | 📋 | 📋 | P1 | Calendar date selection |
| File Upload | ✅ | 📋 | P2 | Drag-and-drop file upload |
| Range Slider | ✅ | ✅ | P2 | Numeric slider |
| Search Input | ✅ | 📋 | P1 | Search with icon, clear button, and search button |
| Input States & Validation | ✅ | 📋 | P0 | Error, success, disabled, readonly - comprehensive examples added |
| Form Layout | 📋 | 📋 | P1 | Form field organization |
| Inline Validation | ✅ | 📋 | P1 | Real-time field validation examples in Input stories |

---

## Navigation

| Component | External | Internal | Priority | Notes |
|-----------|----------|----------|----------|-------|
| Tabs | ✅ | ✅ | P1 | Switch between views |
| Breadcrumbs | ✅ | ✅ | P2 | Page hierarchy |
| Pagination | ✅ | ✅ | P1 | Navigate large datasets |
| Stepper / Progress Steps | 📋 | 📋 | P1 | Multi-step process |
| Side Navigation | ✅ | ✅ | P0 | Primary app navigation |

---

## Feedback & Status

| Component | External | Internal | Priority | Notes |
|-----------|----------|----------|----------|-------|
| Banner | ✅ | ✅ | P1 | Important page-level messages |
| Progress Bar | ✅ | ✅ | P1 | Linear progress with labels and variants |
| Loading Indicator | ✅ | ✅ | P0 | Spinner with smooth animation and labels |
| Status Badge | ✅ | ✅ | P0 | High contrast status indicators |
| Toast / Snackbar | ✅ | ✅ | P1 | Temporary notifications with auto-dismiss and positioning |
| Skeleton Loaders | ✅ | ✅ | P2 | Content placeholders |
| Empty State | 📋 | 📋 | P1 | No content guidance |

---

## Layout & Structure

| Component | External | Internal | Priority | Notes |
|-----------|----------|----------|----------|-------|
| Page Layout | 📋 | 📋 | P0 | Standard page structure |
| Card | ✅ | ✅ | P0 | Content container with Header/Footer sections |
| Grid Layout | 📋 | 📋 | P1 | Responsive grid system |
| Divider | ✅ | ✅ | P2 | Content separator |
| Accordion | ✅ | ✅ | P2 | Expandable sections |

---

## Communication

| Component | External | Internal | Priority | Notes |
|-----------|----------|----------|----------|-------|
| Chat Window | 📋 | 📋 | P2 | Message interface |

---

## Data Display

| Component | External | Internal | Priority | Notes |
|-----------|----------|----------|----------|-------|
| Data Table | 💭 | ✅ | P0 | Mantine Table with Breathe theme |
| Data Table - Striped | 💭 | ✅ | P0 | Zebra striping for readability |
| Line Graph | 💭 | 📋 | P2 | Trend visualization |
| Spark Lines | 💭 | 📋 | P3 | Inline trend indicators |
| Bar Graph | 💭 | 📋 | P2 | Category comparison |
| Pie & Donut Charts | 💭 | 📋 | P3 | Proportions visualization |
| Stats / Metrics | 📋 | 📋 | P1 | Key numbers display |
| List View | 📋 | 📋 | P1 | Alternative to tables |
| Timeline | ✅ | ✅ | P2 | Chronological events |
| Resource List | 📋 | 📋 | P2 | Items with thumbnails |
| Data Filters | 📋 | 📋 | P1 | Filter chips and controls |
| Sort Indicators | 📋 | 📋 | P1 | Column sort direction |

---

## Overlays & Modals

| Component | External | Internal | Priority | Notes |
|-----------|----------|----------|----------|-------|
| Modal / Dialog | ✅ | ✅ | P0 | Keyboard accessible with ESC support |
| Tooltip | ✅ | ✅ | P1 | Hover/focus context with touch support |
| Dropdown Menu | ✅ | ✅ | P1 | Action menu with keyboard navigation |
| Popover | ✅ | ✅ | P2 | Rich content panel |
| Drawer / Side Panel | ✅ | ✅ | P1 | Slide-out details with focus trap |

---

## UI Elements

| Component | External | Internal | Priority | Notes |
|-----------|----------|----------|----------|-------|
| Avatar | 📋 | ✅ | P1 | Profile pictures with initials |
| Chips / Tags | 📋 | 📋 | P1 | Removable labels |
| Thumbnail | ✅ | 📋 | P2 | Small preview images |
| Description List | ✅ | 📋 | P2 | Key-value pairs |
| Copy to Clipboard | ✅ | 📋 | P2 | One-click copy |
| Keyboard Shortcut Display | 📋 | 📋 | P3 | Show keyboard shortcuts |
| Contextual Help | 📋 | 📋 | P2 | Help icon with tooltip |

---

## Error & Empty States

| Component | External | Internal | Priority | Notes |
|-----------|----------|----------|----------|-------|
| No Search Results | 📋 | 📋 | P1 | Zero search results |
| No Data / Empty Table | 📋 | 📋 | P1 | Empty list/table |
| First-Time User / Onboarding | 📋 | 📋 | P2 | Welcome state |
| No Filter Results | 📋 | 📋 | P1 | No filter matches |
| 404 - Page Not Found | 📋 | 📋 | P1 | Non-existent page |
| 500 - Server Error | 📋 | 📋 | P1 | Backend error |
| Network / Connection Error | 📋 | 📋 | P1 | Connectivity issues |

---

## Design Foundations

| Component | External | Internal | Priority | Notes |
|-----------|----------|----------|----------|-------|
| Color System | ✅ | ✅ | P0 | Implemented in @breathe-ds/core |
| Spacing System | ✅ | ✅ | P0 | 8px (External) / 4px (Internal) |
| Typography Scale | ✅ | ✅ | P0 | Lexend + Inter |
| Categorical Palette | ✅ | ✅ | P2 | 10 distinct colors for charts |
| Sequential Palette | ✅ | ✅ | P3 | Ordered data visualization |
| Diverging Palette | ✅ | ✅ | P3 | Midpoint data visualization |
| Color Accessibility Guidelines | 📋 | 📋 | P1 | Colorblind-friendly patterns |
| Dark Mode | 💭 | 💭 | P3 | Future consideration |

---

## Dashboard Examples

These are compositional examples, not standalone components:

| Dashboard | Status | Priority | Notes |
|-----------|--------|----------|-------|
| Patient Dashboard | 💭 | P3 | Healthcare provider overview |
| Shipping & Logistics Dashboard | 💭 | P3 | Order tracking |
| Executive Business Dashboard | 💭 | P3 | High-level metrics |
| Strategic Planning Dashboard | 💭 | P3 | Team goals and milestones |

---

## Priority Definitions

- **P0 (Critical)**: Core components needed for basic functionality
- **P1 (High)**: Important components for common use cases
- **P2 (Medium)**: Useful components for specific scenarios
- **P3 (Low)**: Nice-to-have or future enhancements

## Next Steps

### Phase 1 (Current Sprint)
Focus on **P0** components for External mode:
1. ✅ Button
2. Text Field (Input)
3. Card
4. Badge
5. Loading Indicator
6. Modal / Dialog
7. Data Table (Internal mode with Mantine)

### Phase 2
Expand **P1** components:
- Form elements (Select, Checkbox, Radio, Toggle)
- Navigation (Tabs, Pagination, Side Nav)
- Feedback (Banner, Toast, Progress Bar)

### Phase 3
Complete **P2** components and polish existing

---

## Contributing

When implementing a component:
1. Update this inventory (change status from 📋 to 🚧, then to ✅)
2. Create component in appropriate package (external or mantine)
3. Write Storybook stories
4. Add usage documentation
5. Ensure accessibility (WCAG AAA for External, WCAG AA for Internal)
