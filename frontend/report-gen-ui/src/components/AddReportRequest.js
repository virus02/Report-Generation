import { useState } from 'react';

const AddReportRequest = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [subject, setSub] = useState('');
    const [department, setDept] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if(!name){
            alert('Please enter name');
        }
        if(!subject){
            alert('Please enter subject');
        }
        if(!department){
            alert('Please enter department');
        }

        onAdd({name, subject, department})

        setName('');
        setSub('');
        setDept('');

    }

    return(
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Name</label>
                <input type='text' value={name} placeholder='Enter name' onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Subject</label>
                <input type='text' value={subject} placeholder='Enter subject' onChange={(e) => setSub(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Department</label>
                <input type='text' value={department} placeholder='Enter department' onChange={(e) => setDept(e.target.value)} />
            </div>
            <input type="submit" value="Save" className='btn btn-block' />
        </form>
    )
}

export default AddReportRequest;