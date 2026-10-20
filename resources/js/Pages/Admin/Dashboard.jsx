import Layout from "@/Layouts/Layout";
import { Link, usePage } from "@inertiajs/react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

function Dashboard() {
    const { data = [] } = usePage().props;
    // console.log(usePage());

    return (
        <>
            <h4 className="text-xl font-semibold">
                List of all request document for approval.
            </h4>
            <Table className="table-fixed">
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[25%]">Name</TableHead>
                        <TableHead className="w-[25%]">Status</TableHead>
                        <TableHead className="text-end">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.length > 0 ? (
                        data.map((document) => (
                            <TableRow key={document.id}>
                                <TableCell className="[25%] font-medium">
                                    {document.name}
                                </TableCell>
                                <TableCell className="[25%] font-medium">
                                    {document.status}
                                </TableCell>
                                <TableCell className="font-medium">
                                    <div className="flex justify-end items-center gap-x-6">
                                        <Button asChild>
                                            <Link
                                                href={route(
                                                    "admin.document_approve",
                                                    {
                                                        id: document.id,
                                                    },
                                                )}
                                                method="put"
                                                as="button"
                                                preserveScroll
                                            >
                                                Approve
                                            </Link>
                                        </Button>

                                        <Button type="button">Reject</Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell
                                className="text-center font-medium"
                                colSpan={3}
                            >
                                No Data Loaded!
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </>
    );
}

Dashboard.layout = (page) => <Layout children={page} />;
export default Dashboard;
