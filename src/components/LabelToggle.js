import WithToggle from "../shared/WithToggle";

const LabelToggle = ({toggle, toggleStatus, title}) => (
    <div>
        <div>
            {toggleStatus ? <input type="text" value={title}/> : <span>{title}</span>}
        </div>
        <div>
            <button onClick={toggle}>{toggleStatus ? "Cancel" : "Edit"}</button>    
        </div>
    </div>    
)

export default WithToggle(LabelToggle);