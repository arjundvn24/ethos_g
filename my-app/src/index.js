import React from 'react';
import ReactDOM from 'react-dom';
import StackGrid from "react-stack-grid";
import img from './photo01.jpg'

// This is a functional component
const Welcome=()=>
{
		return (
      <StackGrid
      monitorImagesLoaded
      columnWidth={300}
      duration={600}
      gutterWidth={15}
      gutterHeight={15}
      appearDelay={60}
    >
      {images.map(obj => (
        <figure
          key={obj.src}
          className="image"
        >
          <img src={obj.src} alt={"IMAGE"} />
          <figcaption>{obj.label}</figcaption>
        </figure>
      ))}
    </StackGrid>
    )
}

ReactDOM.render(
	<Welcome />,
	document.getElementById("root")
);
