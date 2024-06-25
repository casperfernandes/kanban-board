import { useState } from "react";

import FilterPopover from "./FilterPopover";

const Header = props => {
    const { groupingKey, setGroupingKey, sortKey, setSortKey } = props;

    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    return (
        <div className="white-background header">
            <button className="flex-center"
                onClick={() => setIsPopoverOpen(prevState => !prevState)}
            >
                <img src="/assets/icons/display.svg" className="mr-5" />
                <span>Display</span>
                <img src="/assets/icons/down.svg" />
            </button>

            {isPopoverOpen ? (
                <FilterPopover sortKey={sortKey} setSortKey={setSortKey} groupingKey={groupingKey} setGroupingKey={setGroupingKey} setIsPopoverOpen={setIsPopoverOpen} />
            ) : null}
        </div>
    );
};

export default Header;
