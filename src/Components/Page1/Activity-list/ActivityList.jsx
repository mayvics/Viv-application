import "./ActivityList.css"
import ActivityListCard from "./ActivityListCard";


const ActivityList = () => {
    return (
        <div className="act-container">
            <div className="com-container">
            <ActivityListCard />
                <button className="btn-add"><p>Add activity</p></button>
        </div>
        </div>
    )
}

export default ActivityList;