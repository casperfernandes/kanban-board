import { Fragment } from "react";

import Card from "./Card";

const CardsContainer = props => {
    const { tickets, groupValue, groupingKey } = props;

    const cards = tickets?.[groupValue] || [];

    return (
        <div className="cards-container">
            <div className="column">
                {cards.map((task) => (
                    <Fragment key={task.id}>
                        <Card task={task} groupingKey={groupingKey} />
                    </Fragment>
                ))}
            </div>
        </div>
    );
};

export default CardsContainer;
