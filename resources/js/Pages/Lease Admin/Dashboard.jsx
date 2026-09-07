import Layout from "@/Layouts/Layout";
import React from "react";

function Dashboard() {
    // const { component } = usePage();
    return (
        <>
            {/* <Head title={component} /> */}
            <h1 className="text-5xl">Hello Lease Admin</h1>
        </>
    );
}

Dashboard.layout = (page) => <Layout children={page} />;
export default Dashboard;
