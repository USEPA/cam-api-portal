import React from "react";

export const NotFoundPage = React.forwardRef((props, ref) => {
  return (
    <div align="center">
      <h1 ref={ref}>404</h1>
      <h2>Page not found</h2>
    </div>
  );
});
