import { gql } from "@apollo/client";
import client from "client";
import { getPageStaticProps } from "utils/getPageStaticProps";
import { Page } from "components/Page";

export default Page;

export const getStaticProps = getPageStaticProps;

export const getStaticPaths = async () => {
    const {data} = await client.query({
        query: gql`
            query AllPagesQuery {
                pages {
                    nodes {
                        uri
                    }
                }
                creatives {
                    nodes {
                        uri
                    }
                }
            }
        `
    });

    return {
        paths: [...data.pages.nodes.filter(page => page.uri !== "/"), ...data.creatives.nodes.filter(creative => creative.uri !== "/")].map((page) => ({
            params: {
                slug: page.uri.substring(1, page.uri.length - 1).split("/"),
            },
        })),
        fallback: "blocking",
    };
};