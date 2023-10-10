import { CreativeCard } from "./CreativeCard";

export const Results = ({ creatives }) => {
    return <div className="max-w-5xl mx-auto grid grid-cols-3 gap-5 mb-10">
        {creatives.map(creative => (
            <CreativeCard
                key={creative.databaseId}
                title={creative.title}
                destination={creative.uri}
                brand={creative.creativeFeatures.brand}
                display={creative.creativeFeatures.display}
                social={creative.creativeFeatures.social}
                sizes={creative.creativeFeatures.sizes}
                markets={creative.creativeFeatures.markets}
                image={creative.featuredImage?.node?.sourceUrl}
            />
        ))}
    </div>;
};