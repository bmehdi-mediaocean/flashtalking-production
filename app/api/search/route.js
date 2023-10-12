import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const filters = await request.json();

        let displayFilter = ``;
        let socialFilter = ``;
        let sizesFilter = ``;
        let marketsFilter = ``;

        if(filters.display) {
            displayFilter = `
                {
                    key: "display"
                    compare: EQUAL_TO
                    value: "1"
                },
            `
        }
        if(filters.social) {
            socialFilter = `
                {
                    key: "social"
                    compare: EQUAL_TO
                    value: "1"
                },
            `
        }
        if(filters.sizes) {
            sizesFilter = `
                {
                    key: "sizes"
                    compare: EQUAL_TO
                    value: "${filters.sizes}"
                    type: NUMERIC
                },
            `
        }
        if(filters.markets) {
            marketsFilter = `
                {
                    key: "markets"
                    compare: EQUAL_TO
                    value: "${filters.markets}"
                    type: NUMERIC
                },
            `
        }

        const response = await fetch(process.env.WP_GRAPHQL_URL, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                query: `
                query AllCreativesQuery {
                    creatives(where: { offsetPagination: {size: 9, offset: ${
                        ((filters.page || 1) - 1) * 9
                    }}
                    metaQuery: {
                        relation: AND
                        metaArray: [
                            ${displayFilter}
                            ${socialFilter}
                            ${sizesFilter}
                            ${marketsFilter}
                        ]
                    }
                }) {
                    pageInfo {
                        offsetPagination {
                            total
                        }
                    }
                        nodes {
                            databaseId
                            title
                            uri
                            featuredImage {
                                node {
                                    uri
                                    sourceUrl
                                }
                            }
                            creativeFeatures {
                                brand
                                display
                                markets
                                sizes
                                social
                            }
                        }
                    }
                }
            `
            })
        });

        const {data} = await response.json();
        return NextResponse.json({
            total: data.creatives.pageInfo.offsetPagination.total,
            creatives: data.creatives.nodes,
        });
    } catch (e) {
        console.log("ERROR: ", e);
    }
};