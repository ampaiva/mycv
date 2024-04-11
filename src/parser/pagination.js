import React, { useState, useRef } from 'react';
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

function Pagination({ items, itemsPerPage, itemRender}) {
    const [currentPage, setCurrentPage] = useState(1);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    // Calculate start and end index of items to display
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const allItems = items ?? [];

    // Get items for the current page
    const currentItems = allItems.slice(startIndex, endIndex);

    // Handler for next page click
    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    // Handler for previous page click
    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const contents = <div className="education">
        {currentItems.map((education) => (
            itemRender(education)
        ))}
        <div className='pagination'>
            {currentPage > 1 && (
                <a href="#" className='prev' ref={prevRef} onClick={prevPage}><GrCaretPrevious />Previous</a>
            )}
            {endIndex < allItems.length && (
                <a href="#" className='next' ref={nextRef} onClick={nextPage}>Next<GrCaretNext /></a>
            )}
        </div>
    </div>;

    return contents;
}


export default Pagination;
