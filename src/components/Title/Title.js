import { useEffect, useState } from "react";

const UseDocTitle = (title) => {
  const [doctitle, setDocTitle] = useState(title);

  useEffect(() => {
    document.title = doctitle;
  }, [doctitle]);

  return [doctitle, setDocTitle];
};

export { UseDocTitle };
