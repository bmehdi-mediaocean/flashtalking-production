import { faDisplay, faGlobe, faHashtag, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export const CreativeCard = ({ title, destination, image, brand, sizes, markets, display, social }) => {
    return <Link href={destination} className="border-2 border-slate-300 p-5 block bg-slate-100 hover:bg-slate-200">
        <div className="flex w-full">
            <Image
                src={image}
                height="200"
                width="300"
                style={{objectFit: "cover"}}
                alt=""
                priority={true}
            />
        </div>
        <div className="mt-3 text-lg font-bold">{title}</div>
        <div className="text-lg">{brand}</div>
        <div className="flex justify-between text-sm mt-3">
            <div>
                <FontAwesomeIcon icon={faLayerGroup} size="2xs" />
                <span className="pl-2">{sizes} sizes</span>
            </div>
            <div>
                <FontAwesomeIcon icon={faGlobe} size="2xs" />
                <span className="pl-2">{markets} markets</span>
            </div>
        </div>
        {(!!display || !!social) && <div className="flex justify-between text-sm mt-3">
            <div>
                {!!display && 
                    <>
                        <FontAwesomeIcon icon={faDisplay} /> Display
                    </>
                }
            </div>
            <div>
                {!!social && 
                    <>
                        <FontAwesomeIcon icon={faHashtag} /> Social
                    </>
                }
            </div>
        </div>}
    </Link>;
};