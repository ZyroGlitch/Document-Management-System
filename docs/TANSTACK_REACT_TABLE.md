# TanStack React Table guide

This project uses TanStack React Table inside the **Request Documents** tab in
`resources/js/Pages/Client/Documents.jsx`. TanStack supplies the table logic;
the JSX and Tailwind classes still control the HTML structure and appearance.

## 1. What was installed first

The table package was added with the v8 release that matches the pasted sample's
`useReactTable` API:

```bash
npm install @tanstack/react-table@^8.21.3
```

This updates both `package.json` and `package-lock.json`. TanStack React Table
is headless, which means it does not impose a visual design or require a
separate CSS library. It gives the component functions for columns, sorting,
filtering, and pagination.

Keep the v8 range unless the table code is deliberately migrated. Installing
the latest major version can change the exports and make this sample fail to
build.

The project already had `lucide-react`, so the sample icons (`Search`, `User`,
`Mail`, `Phone`, and the pagination arrows) could use the existing dependency.

## 2. Beginner first step: prepare the data

The table imports its local sample records from:

```text
resources/data.json
```

Each record has the same keys used by the columns:

```json
{
  "id": "DOC-001",
  "name": "Juan Dela Cruz",
  "email": "juan.delacruz@example.com",
  "phone": "+63 917 123 4567"
}
```

The important rule is that an accessor must match a property in each data
object. When the real document-request API is ready, replace the JSON import
with the Inertia prop or API result, while keeping the same object shape (or
updating the accessors at the same time).

## 3. Define the columns

`createColumnHelper()` creates column definitions without manually repeating
the accessor shape. Each `columnHelper.accessor("name", { ... })` tells the
table which field to read.

- `cell` decides how a value is displayed. The email cell adds the existing
  Tailwind color and italic style.
- `header` renders the label and its Lucide icon.
- Accessor columns are sortable by default, so the header click handler can
  toggle the sort direction.

The column definitions are outside the component because they do not depend on
component state. This avoids rebuilding the same definitions on every render.

## 4. Create the table instance

Inside `RequestDocumentsTable`, React state stores the values that users can
change:

```jsx
const [sorting, setSorting] = useState([]);
const [globalFilter, setGlobalFilter] = useState("");
```

`useReactTable` then connects the data, columns, state, and row-model plugins:

```jsx
const table = useReactTable({
  data,
  columns,
  state: { sorting, globalFilter },
  onSortingChange: setSorting,
  onGlobalFilterChange: setGlobalFilter,
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
});
```

Think of each row model as a stage:

1. **Core rows** start with the records.
2. **Filtered rows** remove records that do not match the search text.
3. **Sorted rows** arrange the remaining records when a header is clicked.
4. **Pagination rows** expose only the current page to render.

The rendered rows come from `table.getRowModel().rows`, so the UI always uses
the final result of those stages.

## 5. Render headers and cells

TanStack returns metadata rather than ready-made HTML. The component maps over
the header groups and visible cells, then uses `flexRender`:

```jsx
flexRender(header.column.columnDef.header, header.getContext())
flexRender(cell.column.columnDef.cell, cell.getContext())
```

`flexRender` is important because a header or cell can be a string, a function,
or JSX. It lets the same rendering code support all three forms.

The table is placed directly below the existing comment in the first
`TabsContent` block. The approved-documents tab is intentionally unchanged.

## 6. How the current features work

### Search

The search input is controlled by `globalFilter`. Typing calls
`setGlobalFilter`, and `getFilteredRowModel()` recalculates the rows. TanStack
checks the global search text against the available columns using its default
filter behavior.

### Sorting

Each header receives `header.column.getToggleSortingHandler()` as its click
handler. TanStack updates `sorting`, then `getSortedRowModel()` produces the
new order. The `ArrowUpDown` icon indicates that a column can be clicked.

### Pagination

`initialState.pagination.pageSize` starts the table at five rows per page.
`getPaginationRowModel()` enables pagination, while the navigation buttons use
the table helpers:

- `previousPage()` and `nextPage()` move one page.
- `setPageIndex(0)` goes to the first page.
- `setPageIndex(table.getPageCount() - 1)` goes to the last page.
- `setPageSize(number)` changes the number of rows shown.
- `getCanPreviousPage()` and `getCanNextPage()` disable buttons at the limits.

## 7. Safe improvements to make next

Make improvements one feature at a time and keep each feature connected to the
correct row model:

1. **Real server data:** pass document requests through Inertia props and keep
   loading and error states in the page. For large datasets, use server-side
   pagination, filtering, and sorting instead of downloading every row.
2. **Document-specific columns:** add fields such as document type, request
   date, status, and an actions column. Use `columnHelper.display()` for an
   actions column that has no direct data property.
3. **Better filtering:** define a column `filterFn` when a field needs special
   matching, such as dates or status values. Add separate column filters when a
   single global search is not enough.
4. **Clear sort indicators:** read `header.column.getIsSorted()` and display an
   ascending or descending icon instead of one neutral icon.
5. **Selection and bulk actions:** add a selection column and connect selected
   row IDs to the approval workflow. Keep selection state separate from row
   data.
6. **Responsive and accessible controls:** retain labels, button types, focus
   styles, and disabled states. For a very wide table, consider a responsive
   column strategy instead of shrinking every cell.
7. **Virtualized rows:** only add virtualization when the browser has to render
   thousands of rows. It solves rendering cost, not server query cost.

## 8. Common mistakes

- Installing the package but forgetting to run the build or restart Vite.
- Using an accessor name that does not exist in the incoming data.
- Forgetting the matching row-model function, such as using pagination controls
  without `getPaginationRowModel()`.
- Updating sorting or filtering state but not passing that state back through
  `useReactTable`.
- Rendering `row.original` directly everywhere instead of using
  `row.getVisibleCells()` and `flexRender`, which makes future column changes
  harder.
- Replacing the project `Layout` or tabs when only the first tab needs the
  table.

## 9. Verify a change

From the project root:

```bash
npm run build
```

Then open `/client/documents` and verify that search, header sorting, page-size
changes, direct page entry, and first/previous/next/last navigation all work.
Also switch to **Approved Documents** to confirm the second tab remains
available and unchanged.
