import Report from './Report';

const Reports = ({ reports, onDelete, onToggle}) => {
    return(
        <>
            {reports.map((report) => (
                <Report key={report.id} report={report} onDelete={onDelete} onToggle={onToggle}></Report>
            ))}
        </>
    )
}

export default Reports;