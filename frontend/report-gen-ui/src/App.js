import { useState } from 'react';
import Header from './components/Header';
import Reports from './components/Reports';
import Footer from './components/Footer';

function App() {
  const [reports, setReports] = useState([])

  const onDelete = (id) =>{
    setReports(reports.filter((report) => report.id !== id))
  }

  const toggleStatus = (id) => {
    setReports(reports.map((report) => report.id === id ? {...report, status: report.status === 1 ? 0 : 1 } : report))
  }

  return (
    <div className="container">
      <Header />   
      <Reports reports={reports} onDelete={onDelete} onToggle={toggleStatus} />
      <Footer />
    </div>
  );
}

export default App;