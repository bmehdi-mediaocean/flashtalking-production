import { ButtonLink } from "components/ButtonLink";
import Image from "next/image";
import Link from "next/link";

export const MainMenu = ({ items, ctaLabel, ctaDestination }) => {
    //console.log("MAIN MENU: ", items);
    return <div className="bg-slate-800 text-white px-5 h-16 sticky top-0 z-20 flex">
        <div className="py-2.5 pl-5 flex text-flashtalking-pink w-16 h-16">
            <Link href="/" className="flex">
                <Image
                    alt="Logo"
                    src="/flashtalking.svg"
                    width={0}
                    height={0}
                    priority
                    className="w-full"
                />
            </Link>
        </div>
        <div className="flex flex-1 justify-end">
            {(items || []).map(item => (
                <div
                    key={item.id}
                    className="hover:bg-slate-700 cursor-pointer relative group"
                >
                    <div>
                        <Link href={item.destination} className="p-5 block">
                            {item.label}
                        </Link> 
                    </div>
                    {!!item.subMenuItems?.length && (
                        <div className="group-hover:block hidden bg-slate-800 text-right absolute right-0 top-full -mt-1">
                            {item.subMenuItems.map(subMenuItem => (
                                <Link key={subMenuItem.id} href={subMenuItem.destination} className="block whitespace-nowrap p-5 hover:bg-slate-700">
                                    {subMenuItem.label}
                                </Link> 
                            ))}
                        </div>
                    )}
                </div>
            ))}
            <div className="ml-3 my-auto ">
                <ButtonLink destination={ctaDestination} label={ctaLabel} />
            </div>
        </div>
    </div>;
}