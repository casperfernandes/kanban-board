export const GROUPING_OPTIONS = {
    Status: 'status',
    Priority: 'priority',
    User: 'userId'
};

export const SORT_OPTIONS = {
    Priority: 'priority',
    Title: 'title'
};

export const PRIORITY_OPTIONS = {
    0: { label: 'No Priority', iconPath: '/assets/icons/noPriority.svg' },
    1: { label: 'Low', iconPath: '/assets/icons/noPriority.svg' },
    2: { label: 'Medium', iconPath: '/assets/icons/mediumPriority.svg' },
    3: { label: 'High', iconPath: '/assets/icons/highPriority.svg' },
    4: { label: 'Urgent', iconPath: '/assets/icons/urgentPriorityOrange.svg' }
};
  
export const STATUS_OPTIONS = {
    'Backlog': { label: 'Backlog', iconPath: '/assets/icons/backlog.svg' },
    'Todo': { label: 'Todo', iconPath: '/assets/icons/todo.svg' },
    'In progress': { label: 'In Progress', iconPath: '/assets/icons/inProgress.svg' },
    'Done': { label: 'Done', iconPath: '/assets/icons/done.svg' },
    'Cancelled': { label: 'Cancelled', iconPath: '/assets/icons/cancelled.svg' }
};

export const SORT_IN = { asc: 'asc', des: 'des' };
