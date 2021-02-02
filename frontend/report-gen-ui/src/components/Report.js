import { FaTimes } from "react-icons/fa";

const Report = ({ report, onDelete, onToggle }) => {
    return (
        <div className={`report ${report.status === 1 ? 'status': ' '}`} onDoubleClick={() => onToggle(report.id)}>
            <h3>
                {report.name}
                <FaTimes
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => onDelete(report.id)}
                />
            </h3>
            <p>
                {report.sub}
            </p>
            <p>
                {report.dept}
            </p>

        </div>
    )
}

export default Report;