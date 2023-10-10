import { Input } from "components/Input";
import { useEffect, useState } from "react";
import queryString from "query-string";

export const Filters = ({ onSearch }) => {
    const [display, setDisplay] = useState(false);
    const [social, setSocial] = useState(false);
    const [sizes, setSizes] = useState("");
    const [markets, setMarkets] = useState("");

    const handleSearch = () => {
        onSearch({
            display,
            social,
            sizes,
            markets,
        });
    };

    useEffect(() => {
        const {
            display: displayInitial,
            social: socialInitial,
            sizes: sizesInitial,
            markets: marketsInitial,
        } = queryString.parse(window.location.search);

        setDisplay(displayInitial === "true");
        setSocial(socialInitial === "true");
        setSizes(sizesInitial || "");
        setMarkets(marketsInitial || "");
    }, []);

    return <div className="max-w-5xl mx-auto my-5 flex gap-5 border-solid border-slate-400 border-2 p-5 rounded-md">
        <div className="flex-1">
            <div>
                <label className="cursor-pointer">
                    <input
                        type="checkbox"
                        checked={display}
                        onChange={() => setDisplay((value) => !value)}
                    />
                    <span className="pl-2">Display</span>
                </label>
            </div>
            <div>
                <label className="cursor-pointer">
                <input
                        type="checkbox"
                        checked={social}
                        onChange={() => setSocial((value) => !value)}
                    />
                    <span className="pl-2">Social</span>
                </label>
            </div>
        </div>
        <div className="flex-1">
            <span>Sizes</span>
            <Input
                type="number"
                value={sizes}
                onChange={(e) => setSizes(e.target.value)}
            />
        </div>
        <div className="flex-1">
            <span>Markets</span>
            <Input
                type="number"
                value={markets}
                onChange={(e) => setMarkets(e.target.value)}
            />
        </div>
        <div>
            <div
                className="btn"
                onClick={handleSearch}
            >
                Search
            </div>
        </div>
    </div>;
};