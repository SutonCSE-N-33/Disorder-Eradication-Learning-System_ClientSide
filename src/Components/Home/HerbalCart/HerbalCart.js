import React from 'react';
import Modal from 'react-modal';




const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width:'500px',
      height:"500px",
      borderRadius:"5px",
      background:"black"
    },
  };
  
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('#root');
const HerbalCart = ({data}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
      }
    return (
        <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        onClick={openModal}
                      >
                        {data.title}
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                    </div>
                    <Modal
                    isOpen={modalIsOpen}
                    
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                  
                  >
                   
                    
                    <div className='text-center'><h3 style={{color:'crimson'}}>{data.title}</h3></div>
                      <div className="description">
                        <p className='text-white'>{data.description}</p>
                      </div>
                      <button onClick={closeModal} style={{marginLeft:'350px',marginTop:'320px',padding:'5px 30px'}}>close</button>
                  </Modal>
                  </div>
    );
};

export default HerbalCart;