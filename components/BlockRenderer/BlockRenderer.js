import { BriefingForm } from "components/BriefingForm";
import { BriefingFormEasyJet } from "components/BriefingFormEasyJet";
import { BriefingFormSky } from "components/BriefingFormSky";
import { CTAButton } from "components/CTAButton";
import { Column } from "components/Column";
import { Columns } from "components/Columns";
import { Cover } from "components/Cover";
import { CreativeFeatures } from "components/CreativeFeatures";
import { CreativeSearch } from "components/CreativeSearch";
import { FormspreeForm } from "components/FormspreeForm";
import { Gallery } from "components/Gallery";
import { Heading } from "components/Heading";
import { Paragraph } from "components/Paragraph";
import { TickItem } from "components/TickItem";
import Image from "next/image";
import { theme } from "theme";

export const BlockRenderer = ({ blocks }) => {
    return blocks.map((block) => {
        switch(block.name){
            case "acf/tickitem": {
                return <TickItem
                    key={block.id}
                >
                    <BlockRenderer blocks={block.innerBlocks} />
                </TickItem>
            }
            case "core/gallery": {
                return <Gallery
                    key={block.id}
                    columns={block.attributes.columns || 3}
                    cropImages={block.attributes.imageCrop}
                    items={block.innerBlocks}
                />;
            }
            case "acf/creativefeatures": {
                return <CreativeFeatures
                    key={block.id}
                    brand={block.attributes.brand}
                    display={block.attributes.display}
                    social={block.attributes.social}
                    sizes={block.attributes.sizes}
                    markets={block.attributes.markets}
                />;
            }
            case "acf/briefingformeasyjet": {
                return <BriefingFormEasyJet
                    key={block.id}
                    formId={block.attributes.data.form_id}
                />;
            }
            case "acf/briefingformsky": {
                return <BriefingFormSky
                    key={block.id}
                    formId={block.attributes.data.form_id}
                />;
            }
            case "acf/briefingform": {
                return <BriefingForm
                    key={block.id}
                    formId={block.attributes.data.form_id}
                />;
            }
            case "acf/formspreeform": {
                return <FormspreeForm 
                    key={block.id}
                    formId={block.attributes.data.form_id}
                />;
            }
            case "acf/creativesearch": {
                return <CreativeSearch
                    key={block.id}
                />;
            }
            case "core/post-title": {
                return <Heading
                    key={block.id}
                    level={block.attributes.level}
                    content={block.attributes.content}
                    textAlign={block.attributes.textAlign}
                />;
            }
            case "acf/ctabutton": {
                return <CTAButton
                    key={block.id}
                    buttonLabel={block.attributes.data.label}
                    destination={block.attributes.data.destination || "/"}
                    align={block.attributes.data.align}
                />;
            }
            case "core/paragraph": {
                return <Paragraph
                    key={block.id}
                    content={block.attributes.content}
                    textAlign={block.attributes.align}
                    textColor={
                        theme[block.attributes.textColor] || 
                        block.attributes.style?.color?.text
                    }
                />;
            }
            case "core/heading": {
                return <Heading
                    key={block.id}
                    level={block.attributes.level}
                    content={block.attributes.content}
                    textAlign={block.attributes.textAlign}
                />;
            }
            case "core/cover": {
                //console.log("BLOCK: ", block);
                return <Cover
                    key={block.id}
                    background={block.attributes.url}
                >
                    <BlockRenderer blocks={block.innerBlocks} />
                </Cover>;
            }
            case "core/columns": {
                //console.log("CONSOLE: ", block.attributes);
                return <Columns
                    key={block.id}
                    isStackedOnMobile={block.attributes.isStackedOnMobile}
                    textColor={
                        theme[block.attributes.textColor] || 
                        block.attributes.style?.color?.text
                    }
                    backgroundColor={
                        theme[block.attributes.backgroundColor] || 
                        block.attributes.style?.color?.background
                    }
                >
                    <BlockRenderer blocks={block.innerBlocks} />
                </Columns>;
            }
            case "core/column": {
                //console.log("CONSOLE: ", block.attributes);
                return <Column
                    key={block.id}
                    width={block.attributes.width}
                    textColor={
                        theme[block.attributes.textColor] || 
                        block.attributes.style?.color?.text
                    }
                    backgroundColor={
                        theme[block.attributes.backgroundColor] || 
                        block.attributes.style?.color?.background
                    }
                >
                    <BlockRenderer blocks={block.innerBlocks} />
                </Column>;
            }
            case "core/group":
            case "core/block": {
                return <BlockRenderer
                    key={block.id}
                    blocks={block.innerBlocks}
                />;
            }
            case "core/image": {
                return <Image
                    key={block.id}
                    src={block.attributes.url}
                    height={block.attributes.height}
                    width={block.attributes.width}
                    alt={block.attributes.alt || ""}
                />;
            }
            default:
                console.log("UNKNOWN: ", block);
                return null;
        }
    });
};