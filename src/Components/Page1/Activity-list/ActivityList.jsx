import "./ActivityList.css"


const ActivityList = () => {
    return (
        <>
        <div className="act-container">
            <div className="com-container">
                <h3>Activity list</h3>
                <div className="btn-container">
                    <button className="btn-left"><p>&lt;</p></button>
                    <button className="btn-right"><p>&gt;</p></button>
                </div>
            </div>
            <div>
                <button className="btn-add"><p>Add activity</p></button>
            </div>
        </div>
        </>
    )
}

export default ActivityList;