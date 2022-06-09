import React, { useEffect, useRef } from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  handleSaveClick,
}) => {
  useEffect(() => {
      //When clicking outside element
    function handleDocumentClick(event){
      console.log("handle document click");

  /*     if (node.current && !node.current.contains(event.target)) {
        handleSaveClick(event);
      } */

      //inside click
      if(!node.current) { //node.current is null when you click one row after another. 
        //console.log(node.current);
        handleSaveClick(event);
        return;
      }
      if (node.current.contains(event.target)) { //Click on same row
        return;
      }
      // outside click
      handleSaveClick(event);
    } 
    console.log("useEffect Row add listener");
    console.log(node);
    document.addEventListener('click', handleDocumentClick); 

    return () => {
      console.log("useEffect Row remove listener");
      console.log(node);
      document.removeEventListener('click', handleDocumentClick);
    };

  }, [handleSaveClick]) // Had to move handleDocumentClick inside and add dependecy on handleSaveClick otherwise editFormData was old because i think doing addEventListener in useEffect will add a stale closure around the handleSaveClick. https://dmitripavlutin.com/react-hooks-stale-closures/

  const node = useRef();
  console.log(node);

  function handleSaveClickLocal(event){
    handleSaveClick(event);
  }

  return (
    <tr ref={node}>
      <td >
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
          /* onBlur={handleCancelClick} */
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="address"
          value={editFormData.address}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="phoneNumber"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        {/* <button type="submit">Save</button> */}
        <button type="button" onClick={handleSaveClick}>Save</button>
        {/* <button type="button" onClick={handleSaveClickLocal}>Save</button> */}
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
