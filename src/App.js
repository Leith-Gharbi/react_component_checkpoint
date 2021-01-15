import './App.css';
import ProfilePhoto from './Component/Profile/ProfilPhoto';
import Address from './Component/Profile/Adresse';
import FullName from './Component/Profile/FullName';
import React, { useState } from 'react';
import Modal from 'react-modal';
//  npm install --save react-modal
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
}; 

function App() {
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
 
  function closeModal(){
    setIsOpen(false);
  }
 
  return (<>
    <form >
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 border-right">

          <ProfilePhoto></ProfilePhoto>
        </div>
        <div className="col-md-5 border-right">
          <FullName  ></FullName>
                 </div>
        <div className="col-md-4">
          <Address></Address>
        </div>
      </div>
    </div>
    <div className="mt-5 text-center">
              <button className="btn btn-primary profile-button" onClick={openModal} type="button">
                Enregistrer
              </button>
            </div>
    </form>
    <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 style={{textAlign:"center"}} >Hello</h2>
          
          <div>Merci de bien valider mon checkpoint</div>
          <div className="mt-5 text-center">
              <button className="btn btn-danger profile-button" onClick={closeModal} type="button">
                close
              </button>
            </div>
        </Modal>
    </>
  );
}

export default App;
