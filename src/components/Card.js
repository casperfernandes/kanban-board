import { GROUPING_OPTIONS, PRIORITY_OPTIONS } from "../utils/constants";

import Avatar from "./Avatar";

const Card = props => {
    const {
        task: { 
            id: taskId,
            title,
            priority,
            tag,
            user: { initials: userInitials }
        },
        groupingKey
    } = props;

    return (
        <div className="card white-background">
            <div className="flex-space-between-align-center" >
                <span className="id">{taskId}</span>

                <Avatar text={userInitials} />
            </div>

            <div className="card-title">{title}</div>

            <div className="card-details">
                {groupingKey !== GROUPING_OPTIONS.Priority ? (
                    <span className="tag mr-5">
                        <img src={PRIORITY_OPTIONS[priority].iconPath} />
                    </span>
                ) : null}

                {tag.map(item => {
                    return (
                        <span key={item} className="tag">{item}</span>
                    )
                })}
            </div>
        </div>
    );
};

export default Card;
