import Layout from "@/Layouts/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import {
    ArrowUpDown,
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
    CircleCheck,
    ClipboardClock,
    Mail,
    Phone,
    Search,
    User,
} from "lucide-react";
import { useState } from "react";
import mockData from "../../../data.json";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useForm } from "@inertiajs/react";

const columnHelper = createColumnHelper();

const columns = [
    columnHelper.accessor("id", {
        cell: (info) => info.getValue(),
        header: () => (
            <span className="flex items-center">
                <User className="mr-2" size={16} /> ID
            </span>
        ),
    }),
    columnHelper.accessor("name", {
        cell: (info) => info.getValue(),
        header: () => (
            <span className="flex items-center">
                <User className="mr-2" size={16} /> Name
            </span>
        ),
    }),
    columnHelper.accessor("email", {
        cell: (info) => (
            <span className="text-blue-600 italic">{info.getValue()}</span>
        ),
        header: () => (
            <span className="flex items-center">
                <Mail className="mr-2" size={16} /> Email
            </span>
        ),
    }),
    columnHelper.accessor("phone", {
        cell: (info) => info.getValue(),
        header: () => (
            <span className="flex items-center">
                <Phone className="mr-2" size={16} /> Phone
            </span>
        ),
    }),
];

function RequestDocumentsTable() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("client.documents.store"), {
            onSuccess: () => reset(),
        });
    };

    const [dummyData] = useState(() => [...mockData]);
    const [sorting, setSorting] = useState([]);
    const [globalFilter, setGlobalFilter] = useState("");

    const table = useReactTable({
        data: dummyData,
        columns,
        getCoreRowModel: getCoreRowModel(),
        state: {
            sorting,
            globalFilter,
        },
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onGlobalFilterChange: setGlobalFilter,
        getFilteredRowModel: getFilteredRowModel(),
        initialState: {
            pagination: {
                pageSize: 5,
            },
        },
        getPaginationRowModel: getPaginationRowModel(),
    });

    const visibleRows = table.getRowModel().rows;

    return (
        <div className="w-full">
            <div className="flex justify-between items-center mb-4">
                <div className="flex-1 relative max-w-md">
                    <label htmlFor="document-search" className="sr-only">
                        Search documents
                    </label>
                    <input
                        id="document-search"
                        value={globalFilter ?? ""}
                        onChange={(event) =>
                            setGlobalFilter(event.target.value)
                        }
                        placeholder="Search..."
                        className="w-full rounded-md border border-gray-300 py-2 pr-4 pl-10 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                    <Search
                        className="absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-400"
                        size={20}
                        aria-hidden="true"
                    />
                </div>

                <Dialog>
                    <DialogTrigger>
                        <Button>Create New Request</Button>
                    </DialogTrigger>
                    <DialogContent className="w-[600px] max-w-[calc(100%-2rem)] sm:max-w-[800px]">
                        <DialogHeader>
                            <DialogTitle>Request New Document</DialogTitle>
                            <DialogDescription className="py-2">
                                Enter the name of the document you want to
                                request.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit}>
                            <Field className="mb-4">
                                <FieldLabel htmlFor="input-field-username">
                                    Document Name
                                </FieldLabel>
                                <Input
                                    id="input-field-username"
                                    type="text"
                                    placeholder="ex. Gate Pass"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    aria-invalid={Boolean(errors.name)}
                                />
                                {errors.name && (
                                    <p className="text-sm text-red-600">
                                        {errors.name}
                                    </p>
                                )}
                            </Field>
                            <Button
                                type="submit"
                                className="w-full"
                                disabled={processing}
                            >
                                {processing ? "Submitting..." : "Submit"}
                            </Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-lg bg-white shadow-md">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th
                                        key={header.id}
                                        className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                                    >
                                        <div
                                            className={
                                                header.column.getCanSort()
                                                    ? "flex cursor-pointer select-none items-center"
                                                    : ""
                                            }
                                            onClick={header.column.getToggleSortingHandler()}
                                        >
                                            {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext(),
                                            )}
                                            {header.column.getCanSort() && (
                                                <ArrowUpDown
                                                    className="ml-2"
                                                    size={14}
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>

                    <tbody className="divide-y divide-gray-200 bg-white">
                        {visibleRows.length > 0 ? (
                            visibleRows.map((row) => (
                                <tr key={row.id} className="hover:bg-gray-50">
                                    {row.getVisibleCells().map((cell) => (
                                        <td
                                            key={cell.id}
                                            className="px-6 py-4 text-sm whitespace-nowrap text-gray-500"
                                        >
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext(),
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={columns.length}
                                    className="px-6 py-8 text-center text-sm text-gray-500"
                                >
                                    No documents found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Per Page & Pagination */}
            <div className="mt-4 flex flex-col items-center justify-between text-sm text-gray-700 sm:flex-row">
                <div className="mb-4 flex items-center sm:mb-0">
                    <span className="mr-2">Items per page</span>
                    <select
                        aria-label="Items per page"
                        className="rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        value={table.getState().pagination.pageSize}
                        onChange={(event) => {
                            table.setPageSize(Number(event.target.value));
                        }}
                    >
                        {[5, 10, 20, 30].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                {pageSize}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex items-center space-x-2">
                    <button
                        type="button"
                        aria-label="Go to first page"
                        title="Go to first page"
                        className="rounded-md bg-gray-100 p-2 text-gray-600 hover:bg-gray-200 disabled:opacity-50"
                        onClick={() => table.setPageIndex(0)}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <ChevronsLeft size={20} />
                    </button>
                    <button
                        type="button"
                        aria-label="Go to previous page"
                        title="Go to previous page"
                        className="rounded-md bg-gray-100 p-2 text-gray-600 hover:bg-gray-200 disabled:opacity-50"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <span className="flex items-center">
                        <label htmlFor="document-page" className="sr-only">
                            Current page
                        </label>
                        <input
                            id="document-page"
                            min={1}
                            max={table.getPageCount()}
                            type="number"
                            value={table.getState().pagination.pageIndex + 1}
                            onChange={(event) => {
                                const page = event.target.value
                                    ? Number(event.target.value) - 1
                                    : 0;
                                table.setPageIndex(page);
                            }}
                            className="w-16 rounded-md border border-gray-300 p-2 text-center"
                        />
                        <span className="ml-1">of {table.getPageCount()}</span>
                    </span>

                    <button
                        type="button"
                        aria-label="Go to next page"
                        title="Go to next page"
                        className="rounded-md bg-gray-100 p-2 text-gray-600 hover:bg-gray-200 disabled:opacity-50"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        <ChevronRight size={20} />
                    </button>
                    <button
                        type="button"
                        aria-label="Go to last page"
                        title="Go to last page"
                        className="rounded-md bg-gray-100 p-2 text-gray-600 hover:bg-gray-200 disabled:opacity-50"
                        onClick={() =>
                            table.setPageIndex(table.getPageCount() - 1)
                        }
                        disabled={!table.getCanNextPage()}
                    >
                        <ChevronsRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}

function Documents() {
    return (
        <Tabs defaultValue="account" className="w-full">
            <TabsList className="p-4" variant="line">
                <TabsTrigger value="account" className="p-3">
                    <ClipboardClock /> Request Documents
                </TabsTrigger>
                <TabsTrigger value="password" className="p-3">
                    <CircleCheck /> Approved Documents
                </TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="px-4 py-2">
                {/* Include Tanstack Table here only! */}
                <RequestDocumentsTable />
            </TabsContent>
            <TabsContent value="password" className="px-4 py-2">
                Change your password here.
            </TabsContent>
        </Tabs>
    );
}

Documents.layout = (page) => <Layout children={page} />;
export default Documents;
