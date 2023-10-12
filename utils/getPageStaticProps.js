import { gql } from "@apollo/client";
import client from "client";
import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";
import { mapMainMenuItems } from "./mapMainMenuItems";

export const getPageStaticProps = async (context) => {
    const uri = context.params?.slug ? `/${context.params.slug.join("/")}/` : "/";
    const {data} = await client.query({
      query: gql`
        query PageQuery($uri: String!) {
          nodeByUri(uri: $uri) {
            ... on Page {
              id
              title
              blocks
              seo {
                title
                metaDesc
              }
            }
            ... on Creative {
              id
              title
              blocks
              seo {
                title
                metaDesc
              }
            }
            
          }
          acfOptionsMainMenu {
            mainMenu {
              ctaButton {
                label
                destination {
                  ... on Page {
                    uri
                  }
                }
              }
              menuItems {
                menuItem {
                  destination {
                    ... on Page {
                      uri
                    }
                  }
                  label
                }
                items {
                  destination {
                    ... on Page {
                      uri
                    }
                  }
                  label
                }
              }
            }
          }
        }
      `,
      variables: {
        uri,
      }
    })
    return {
      props: {
        seo: data.nodeByUri.seo,
        mainMenuItems: mapMainMenuItems(
          data.acfOptionsMainMenu.mainMenu.menuItems
        ),
        ctaLabel: data.acfOptionsMainMenu.mainMenu.ctaButton.label,
        ctaDestination: data.acfOptionsMainMenu.mainMenu.ctaButton.destination.uri,
        blocks: cleanAndTransformBlocks(data.nodeByUri.blocks),
      },
      revalidate: 10,
    };
};