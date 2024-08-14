import React, { useState } from 'react';
import './UnpaidStudents.css';
import data from '../Data/data.json';
import { FaUser } from "react-icons/fa";


const UnpaidStudents = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Number of items to display per page

    // Calculate the indexes for slicing the data
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

    // Determine the total number of pages
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Handle page change
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
        <div className='unpaid-student-data'>
            <h3>Unpaid Student Intuition</h3>
            <div className='student-container'>
            {
                currentData.map((d, i) => (
                    <div className='student-items' key={i}>
                        <div className='student-img'>
                        <FaUser className='student-icon' />
                        </div>
                        <h3 className='student-name'>{d.name}</h3>
                        <p className='student-id'>{d.id}</p>
                        <p className='student-class'>{d.class} Class</p>
                        <p className='student-amount'>{d.amount_due}</p>
                    </div>
                ))
            }
            </div>
            <div className='pagination'>
                <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                    Previous 
                </button>
                {[...Array(totalPages)].map((_, i) => (
                    <button key={i + 1} onClick={() => paginate(i + 1)} className={currentPage === i + 1 ? 'active' : ''}>
                        {i + 1}
                    </button>
                ))}
                <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
                    Next 
                </button>
            </div>
        </div>
        </>
    );
}

export default UnpaidStudents;
