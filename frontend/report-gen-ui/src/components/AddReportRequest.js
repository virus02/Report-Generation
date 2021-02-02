import { useState } from 'react';

const AddReportRequest = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [sub, setSub] = useState('');
    const [dept, setDept] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if(!name){
            alert('Please enter name');
        }
        if(!sub){
            alert('Please enter subject');
        }
        if(!dept){
            alert('Please enter department');
        }

        onAdd({name, sub, dept})

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
                <input type='text' value={sub} placeholder='Enter subject' onChange={(e) => setSub(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Department</label>
                <input type='text' value={dept} placeholder='Enter department' onChange={(e) => setDept(e.target.value)} />
            </div>
            <input type="submit" value="Save" className='btn btn-block' />
        </form>
    )
}

export default AddReportRequest;