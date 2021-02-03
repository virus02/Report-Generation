import { useState, useEffect } from 'react';
import Header from './components/Header';
import Reports from './components/Reports';
import Footer from './components/Footer';
import AddReportRequest from './components/AddReportRequest';

function App() {
  const [showFrom, setshowForm] = useState(false);
  const [reports, setReports] = useState([])
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {'Content-type': 'Application/json'}
    };
    fetch('http://127.0.0.1:8000/v1/listreports/', requestOptions)
    .then(response => response.json())
    .then(data => setReports(data.results));
  }, [])

  const fetchReport = async (id) => {
    const res = await fetch(`http://127.0.0.1:8000/v1/getreport/${id}/`)
      const data = await res.json()
      return data
  }

  const addForm = (report) => {
    const requestOptions = {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(report)
    };
    fetch('http://127.0.0.1:8000/v1/createreport/', requestOptions)
    .then(response => response.json())
    .then(data => setReports([...reports, data]))
    // const id = Math.floor(Math.random() * 1000) + 1
    // const newReport = {id, ...report}
    // setReports([...reports, newReport]) 
  }

  const onDelete = async (id) =>{
    await fetch(`http://127.0.0.1:8000/v1/getreport/${id}`, {
      method: 'DELETE',
    })

    setReports(reports.filter((report) => report.id !== id))
  }

  const toggleStatus = async (id) => {
    const reportToToggle = await fetchReport(id)
    const updatedReport = {...reportToToggle, status: reportToToggle.status === 1 ? 0 : 1}

    const requestOptions = {
      method: 'patch',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updatedReport)
    }
    fetch(`http://127.0.0.1:8000/v1/getreport/${id}/`, requestOptions)
    .then(response => response.json())
    .then(data => setReports(reports.map((report) => report.id === id ? {...report, status: data.status === 1 ? 0 : 1 } : report)))
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