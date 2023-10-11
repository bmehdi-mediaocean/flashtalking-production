"use client";
import { useEffect, useState } from "react";
import { Results } from "./Results";
import { Pagination } from "./Pagination";
import { useRouter, usePathname } from "next/navigation";
import queryString from "query-string";
import { Filters } from "./Filters";

export const CreativeSearch = () => {
    const [creatives, setCreatives] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const pageSize = 9;
    const router = useRouter();
    const pathname = usePathname();

    const search = async () => {
        const { page, markets, sizes, social, display } = queryString.parse(window.location.search);
        const filters = {};
        if(markets) {
            filters.markets = parseInt(markets);
        }
        if(sizes) {
            filters.sizes = parseInt(sizes);
        }
        if(social === "true") {
            filters.social = true;
        }
        if(display === "true") {
            filters.display = true;
        }

        const response = await fetch(`/api/search`, {
            method: "POST",
            body: JSON.stringify({
                page: parseInt(page || "1"),
                ...filters,
            }),
        });
        const data = await response.json();
        //console.log("SEARCH DATA: ", data);
        setCreatives(data.creatives);
        setTotalResults(data.total);
    };

    const handlePageClick = async (pageNumber) => {
        const { display, social, sizes, markets } = queryString.parse(window.location.search);

        router.push(`${pathname}?page=${pageNumber}&display=${display === "true"}&social=${social === "true"}&sizes=${sizes}&markets=${markets}`);
    };

    useEffect(() => {
        search();
    }, []);

    const handleSearch = async ({ display, social, sizes, markets }) => {
        // update our browser URL
        // search
        //console.log("FILTERS: ", display, social, sizes, markets);
        router.push(`${pathname}?page=1&display=${!!display}&social=${!!social}&sizes=${sizes}&markets=${markets}`);
    };

    return <div>
        <Filters onSearch={handleSearch} />
        <Results creatives={creatives} />
        <Pagination
            onPageClick={handlePageClick}
            totalPages={Math.ceil(totalResults / pageSize)}
        />
    </div>;
};