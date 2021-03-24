import React, { useState, useEffect } from "react";

const Booklist = (props) => {
  const [bookData, setBookData] = useState(null);
  useEffect(() => {
    const result = props
      .getData?.(props.language)
      .then((response) => setBookData(response));
  }, [props]);
  return (
    <div>
      <ul>
        {
          bookData === null
            ? (<p>now loading...</p>)
            : (bookData.data.items.map((x, index) => (
              <li key={index}>
                {/* {x.volumeInfo.title} */}
                <div className="booklist-item">
                  <div className="booklist-item-image">
                    {
                      x.volumeInfo.readingModes.image === false
                        ? <p>no image</p>
                        : <img src={x.volumeInfo.imageLinks.thumbnail} alt="no image" />
                    }
                  </div>
                  <div className="booklist-item-data">
                    <li>{x.volumeInfo.title}</li>
                    <li>{x.volumeInfo.authors}</li>
                    <br /><br />
                  </div>
                </div>
              </li>
            )))
        }
      </ul>
    </div>
  );
};
export default Booklist;