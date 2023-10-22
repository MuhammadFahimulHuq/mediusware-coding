import React, { useState } from 'react';
import ModalA from './problem-2/ModalA';
import ModalB from './problem-2/ModalB';

const Problem2 = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [contactType, setContactType] = useState('');

    const handleContact = (type) => {
        setContactType(type);
        setModalOpen(true); 
      }

      const closeModal = () => {
        setModalOpen(false);
      }
    
    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-lg btn-outline-primary" type="button" onClick={() =>handleContact('allcontact')}>All Contacts</button>
                <button className="btn btn-lg btn-outline-warning" type="button" onClick={() =>handleContact('uscontact')}>US Contacts</button>
                </div>
                {isModalOpen && (
    <div className="fixed top-0 left-0  flex items-center justify-center z-50">
      <div className="modal">
     
        {contactType === 'allcontact' && <ModalA  closeModal={closeModal}/>}
        {contactType === 'uscontact' && <ModalB closeModal={closeModal} />}
   
      </div>
    </div>
  )}

            </div>
        </div>
    );
};

export default Problem2;