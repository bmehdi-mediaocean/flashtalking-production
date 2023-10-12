import { gql } from "@apollo/client";
import client from "client";

const handler = async (req, res) => {
    try {
        const filters = JSON.parse(req.body);

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

        const { data } = await client.query({
            query: gql`
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
                        ]}
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
        });
        return res.status(200).json({
            total: data.creatives.pageInfo.offsetPagination.total,
            creatives: data.creatives.nodes,
        });
    } catch (e) {
        console.log("ERROR: ", e);
    }
};

export default handler;