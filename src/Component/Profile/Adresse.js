import React, { useState } from 'react';

const Adresse = () => {
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [address, setAddress] = useState('');
  return (
    <>
      <div className="p-3 py-5">
        <div className="d-flex justify-content-between align-items-center experience">
        <h4 className="text-right">Address</h4>
          <span className="border px-3 p-1 add-experience">
            <i className="fa fa-plus"></i>&nbsp;Address
          </span>
        </div>
      </div>
      <br />
      <div className="row col-md-12">
        <div className="col-md-6">
          <label htmlFor="country" className="labels">
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            className="form-control"
            placeholder="country"
            value={country}
            onChange={e => setCountry(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="State" className="labels">State/Region</label>
          <input
            type="text"
            className="form-control"
            id="State"
            name="State"
            value={state}
            onChange={e => setState(e.target.value)}
            placeholder="state"
          />
        </div>
      </div>

      <br />
      <div className="row col-md-12">
        <label htmlFor="address" className="labels">Address</label>
        <input
          type="text"
          name="address"
          id="address"
          className="form-control"
          placeholder="enter address"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
      </div>
    </>
  );
};

export default Adresse;
