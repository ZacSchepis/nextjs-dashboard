import { lusitana } from "@/app/ui/fonts";
import  CustomersTable  from "@/app/ui/customers/table";
import { Suspense } from "react";

export default function Page({
    searchParams, 
} : {
    searchParams? : {
        query?: string;
        page?: string;
    }
}) {
    const query = searchParams?.query || "";
    const currentPage = Number(searchParams?.page) || 1;
    // const totalPages = await fetchCustomersPages(query);
    return (
        <div className="w-full">
            <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                {/* <Search placeholder="Search customers..." /> */}
            </div>
            <div>
                <Suspense key={query + currentPage} fallback={<div>Loading...</div>}>
                    <CustomersTable query={query} currentPage={currentPage} />
                </Suspense>
            </div>
        </div>
    )
}