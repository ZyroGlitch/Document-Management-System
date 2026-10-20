import Layout from "@/Layouts/Layout";
import React from "react";
import { FileText, RotateCwFadingClock, CircleCheck } from "lucide-react";

function Dashboard() {
    // const { component } = usePage();
    return (
        <>
            {/* <Head title={component} /> */}
            <section className="grid grid-cols-3 gap-4">
                <div className="min-h-[80px] bg-white shadow flex items-center gap-x-4 p-4">
                    <div className="h-full">
                        <div className="flex justify-center items-center bg-cyan-100 rounded border border-cyan-700 shadow p-4">
                            <FileText className="text-cyan-700" />
                        </div>
                    </div>

                    <div className="h-full">
                        <h3 className="text-lg font-semibold">
                            Requested
                        </h3>
                        <h3 className="text-2xl">100</h3>
                    </div>
                </div>
                <div className="min-h-[80px] bg-white shadow flex items-center gap-x-4 p-4">
                    <div className="h-full">
                        <div className="flex justify-center items-center bg-yellow-100 rounded border border-yellow-700 shadow p-4">
                            <RotateCwFadingClock className="text-yellow-700" />
                        </div>
                    </div>

                    <div className="h-full">
                        <h3 className="text-lg font-semibold">
                            Pending
                        </h3>
                        <h3 className="text-2xl">100</h3>
                    </div>
                </div>
                <div className="min-h-[80px] bg-white shadow flex items-center gap-x-4 p-4">
                    <div className="h-full">
                        <div className="flex justify-center items-center bg-green-100 rounded border border-green-700 shadow p-4">
                            <CircleCheck className="text-green-700" />
                        </div>
                    </div>

                    <div className="h-full">
                        <h3 className="text-lg font-semibold">
                            Requested
                        </h3>
                        <h3 className="text-2xl">100</h3>
                    </div>
                </div>
            </section>
        </>
    );
}

Dashboard.layout = (page) => <Layout children={page} />;
export default Dashboard;
