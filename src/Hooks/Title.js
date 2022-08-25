import React, { useEffect, useState } from "react";

function Title(paramtitle) {
    console.log(paramtitle)
  const [title, setTitle] = useState(paramtitle);
   useEffect(() => {
    console.log(title)
    document.title = title; 
  },[title]);

  return [title, setTitle];
};

export default Title