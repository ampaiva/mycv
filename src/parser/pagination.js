import React, { useState, useRef } from 'react';
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import { IsVisible } from '../components/Visible';

function Pagination({ items, itemsPerPage, itemRender}) {
    const [currentPage, setCurrentPage] = useState(1);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    // Calculate start and end index of items to display
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Only consider visible items
    const allItems = items.filter((item) => IsVisible(item?.tags)) ?? [];

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

    const contents = <div className="pagination-item">
        {currentItems.map((education, index) => (
            itemRender(education, index)
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
