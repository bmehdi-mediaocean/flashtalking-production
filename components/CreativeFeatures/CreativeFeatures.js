import { faDisplay, faGlobe, faHashtag, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const CreativeFeatures = ({ brand, sizes, markets, display, social }) => {
    return <div className="max-w-lg mx-auto my-10 bg-white text-slate-900 p-5 text-center">
        <div className="grid grid-cols-2 mb-4 gap-y-5">
            <div>
                <FontAwesomeIcon icon={faLayerGroup} /> {sizes} sizes
            </div>
            <div>
                <FontAwesomeIcon icon={faGlobe} /> {markets} markets
            </div>
            <div>
                {!!display &&
                <>
                    <FontAwesomeIcon icon={faDisplay} /> {display} display
                </>
                }
            </div>
            <div>
                {!!social &&
                <>
                    <FontAwesomeIcon icon={faHashtag} /> {social} social
                </>
                }
            </div>
        </div>
        <h3 className="text-5xl font-bold">
            {brand}
        </h3>
    </div>
}