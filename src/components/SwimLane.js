import CardsContainer from "./CardsContainer";
import Avatar from "./Avatar";

const SwimLane = props => {
    const { group, tickets, groupValue, groupingKey } = props;

    return (
        <div key={group.label} className="swim-lane">
            <div className="flex-space-between-align-center one-rem-mtb">
                <div className="align-center">
                    {group.iconPath ? (
                        <img src={group.iconPath} />
                    ) : (
                        <Avatar text={group.initials} />
                    )}
                    <span className="mlr-10 fw-600">{group.label}</span>
                    <span className="count-color">{tickets?.[groupValue]?.length || ''}</span>
                </div>

                <div className="align-center">
                    <img className="mr-5" src="/assets/icons/add.svg" />
                    <img src="/assets/icons/threeDotMenu.svg" />
                </div>
            </div>

            <CardsContainer tickets={tickets} groupValue={groupValue} groupingKey={groupingKey} />
        </div>
    );
};

export default SwimLane;
