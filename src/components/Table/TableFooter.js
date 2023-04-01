import React, { useEffect } from "react";

import Styles from "../../Styles/styles.module.scss";

const TableFooter = ({ range, setPage, page, slice }) => {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);
  return (
    <div className={Styles.tableFooter}>
      {range.map((el, index) => (
        <button
          key={index}
          className={`${Styles.tableFooterButton} ${
            page === el ? Styles.activeButton : Styles.inactiveButton
          }`}
          onClick={() => setPage(el)}
        >
          {el}
        </button>
      ))}
    </div>
  );
};

export default TableFooter;