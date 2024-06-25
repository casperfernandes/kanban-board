import { SORT_IN, SORT_OPTIONS } from "./constants";

const getSortedTickets = props => {
    const { tickets, sortKey } = props;

    const sortInKey = sortKey === SORT_OPTIONS.Priority ? SORT_IN.des : SORT_IN.asc;
    const sortedTickets = [...tickets];

    sortedTickets.sort((a, b) => {
        if (sortKey === SORT_OPTIONS.Priority) {
            return sortInKey === SORT_IN.asc ?  (a[sortKey] - b[sortKey]) : (b[sortKey] - a[sortKey]);
        }

        const aTitle = a.title.toLowerCase();
        const bTitle = b.title.toLowerCase();
        if (aTitle > bTitle) {
            return sortInKey === SORT_IN.asc ? 1 : -1;
        }

        if (aTitle < bTitle) {
            return sortInKey === SORT_IN.asc ? -1 : 1;
        }

        return 0;
    });

    return sortedTickets;
};

const groupSortTickets = props => {
    const { tickets, usersById, groupingKey, sortKey } = props;

    const sortedTickets = getSortedTickets({ tickets, sortKey });
    const ticketsByGroup = {};

    sortedTickets.forEach(ticket => {
        const ticketCopy = { ...ticket };
        const key = `${ticketCopy[`${groupingKey}`]}`;
        ticketCopy.user = usersById[ticket.userId];

        if (ticketsByGroup[key]) {
            ticketsByGroup[key].push(ticketCopy);
        } else {
            ticketsByGroup[key] = [ticketCopy];
        }
    });

    return ticketsByGroup;
};

export default groupSortTickets;
