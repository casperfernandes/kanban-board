const Avatar = props => {
    const { text } = props;

    return (
        <div className="avatar flex-center">
            <span>{text}</span>
        </div>
    );
};

export default Avatar;
