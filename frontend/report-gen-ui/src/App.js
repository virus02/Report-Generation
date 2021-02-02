import { useState } from 'react';
import Axios from 'axios';
import Header from './components/Header';
import Reports from './components/Reports';
import Footer from './components/Footer';
import AddReportRequest from './components/AddReportRequest';

function App() {
  const [showFrom, setshowForm] = useState(false);
  const [reports, setReports] = useState([])

  const addForm = async (report) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newReport = {id, ...report}
    setReports([...reports, newReport]) 
  }

  const onDelete = (id) =>{
    setReports(reports.filter((report) => report.id !== id))
  }

  const toggleStatus = (id) => {
    setReports(reports.map((report) => report.id === id ? {...report, status: report.status === 1 ? 0 : 1 } : report))
  }

  return (
    <div className="container">
      <Header onAdd={() =>setshowForm(!showFrom)} showAdd={showFrom} />
      {showFrom && <AddReportRequest onAdd={addForm} /> }
      {reports.length > 0 ? <Reports reports={reports} onDelete={onDelete} onToggle={toggleStatus} /> : 'Nothing to show'}
      <Footer />
    </div>
  );
}

export default App;