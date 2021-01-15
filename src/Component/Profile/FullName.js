import React, { useState } from 'react';

const FullName = () => {
    const [firstname, setFirstname] = useState('Leith');
    const [surname, setSurname] = useState('Gharbi');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    // const [todos, setTodos] = useState([{ text: 'Apprendre les Hooks' }]);
    return ( <>
     <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Profile</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label htmlFor="firstname" className="labels">Name</label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="form-control"
                  placeholder="first name"
                  value={firstname}
                  onChange={e => setFirstname(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="surname" className="labels">Surname</label>
                <input
                  type="text"
                  name="surname"
                  id="surname"
                  className="form-control"
                  value={surname}
                  onChange={e => setSurname(e.target.value)}
                  placeholder="surname"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label htmlFor="phone" className="labels">PhoneNumber</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="form-control"
                  placeholder="enter phone number"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}

                />
              </div>

              <div className="col-md-12">
                <label htmlFor="email" className="labels">Email ID</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="enter email id"
                  value={email}
                  onChange={e => setEmail(e.target.value)}

                />
              </div>
            </div>
            <div className="row mt-3"></div>
          </div>

    </> );
}
 
export default FullName;