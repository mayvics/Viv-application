import React from "react";
import './ActivityListCard.css';
import barbel from "./images/barbel.png"
import swim from './images/swim.png'
import bicycle from './images/bicycle.png'
import run from './images/run.png';
import edit from './images/edit.png';
import remove from './images/remove.png';
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";



const ActivityListCard = (props) => {
    const { data } = props;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 8

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="container">
        <div className="scroll">
        <div className="posts">
            {currentItems.map(post => { return <ul key= { post.id }>

              <li> { post.id} </li>    {/*   Activity type      */}

              <li> { post.title } </li>  {/*   Duration      */}

              <li>{ post.body } </li>   {/*   Date      */}

              <li></li>     {/*   Description      */}

              </ul>
})}
        </div> 
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName= "pagegination"
        pageLinkClassName="page-num"
        previousClassName="page-num"
      />
      </div>
    </div>
  );
}

export default ActivityListCard

