import "./Dropdown-button.css";

const Dropdown = () => {
    return (
        <div className="Dropdown-container">
            <select>
                <option value="monthly">Monthly</option>
                <option value="weekly">Weekly</option>
            </select>
        </div>
    );

}

export default Dropdown;