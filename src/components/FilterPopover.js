import { useEffect, useRef } from "react";

import { GROUPING_OPTIONS, SORT_OPTIONS } from "../utils/constants";

const FilterPopover = props => {
    const { sortKey, setSortKey, groupingKey, setGroupingKey, setIsPopoverOpen } = props;

    const popoverRef = useRef(null);

    useEffect(() => {
        function handleClickAwayEvent(event) {
            if (popoverRef?.current && !popoverRef.current.contains(event.target)) {
                setIsPopoverOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickAwayEvent)

        return () => {
            document.removeEventListener('mousedown', handleClickAwayEvent)
        };
    }, []);

    return (
        <div ref={popoverRef} className="filter-popover-parent white-background">
            <div className="flex-space-between-align-center">
                <span>Grouping</span>

                <select
                    value={groupingKey}
                    onChange={event => setGroupingKey(event.target.value)}
                >
                    {Object.keys(GROUPING_OPTIONS).map(value => (
                        <option key={value} value={GROUPING_OPTIONS[value]}>{value}</option>
                    ))}
                </select>
            </div>

            <div className="flex-space-between-align-center mt-10">
                <span>Ordering</span>

                <select
                    value={sortKey}
                    onChange={event => setSortKey(event.target.value)}
                >
                    {Object.keys(SORT_OPTIONS).map(value => (
                        <option key={value} value={SORT_OPTIONS[value]}>{value}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default FilterPopover;
