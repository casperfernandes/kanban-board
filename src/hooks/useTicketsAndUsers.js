import { useEffect, useState } from "react";

import groupSortTickets from "../utils/groupSortTickets";
import { GROUPING_OPTIONS, PRIORITY_OPTIONS, STATUS_OPTIONS } from "../utils/constants";

const useTicketsAndUsers = props => {
    const { groupingKey, sortKey} = props;

    const [tickets, setTickets] = useState(null);
    const [users, setUsers] = useState(null);
    const [groups, setGroups] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    async function getTicketsAndUsers() {
        try {
            const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
            const jsonResponse = await response.json();
            const usersList = jsonResponse.users;
            const ticketList = jsonResponse.tickets;
            const usersById = {};

            usersList.forEach(user => {
                const userCopy = { ...user };
                const value = userCopy.id;
                userCopy.label = userCopy.name;
                const splitName = userCopy.name.split(' ');
                userCopy.initials = `${splitName?.[0]?.[0]?.toUpperCase?.() || ''}${splitName?.[1]?.[0]?.toUpperCase?.() || ''}`

                if (![null, undefined].includes(userCopy.id)) {
                    usersById[value] = userCopy;
                }
            });

            const groupingList = {
                [GROUPING_OPTIONS.Status]: STATUS_OPTIONS,
                [GROUPING_OPTIONS.Priority]: PRIORITY_OPTIONS,
                [GROUPING_OPTIONS.User]: usersById,
            };
            const selectedGroup = groupingList[groupingKey];

            setUsers(usersById);
            setTickets(groupSortTickets({ tickets: ticketList, usersById, groupingKey, sortKey }));
            setGroups(selectedGroup);
        } catch (error) {
            console.error('fetchError', error)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getTicketsAndUsers();
    }, [groupingKey, sortKey]);

    return {
        isLoading,
        isError: !isLoading && !(tickets && users),
        data: { tickets, users, groups }
    };
};

export default useTicketsAndUsers;
