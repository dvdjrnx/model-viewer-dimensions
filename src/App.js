import {useEffect, useRef, useState} from 'react';
import './App.css';
import '@google/model-viewer';

function App() {
  const viewerRef = useRef(null);
  const [modelUrl, setModelUrl] = useState('');
  const [dimensions, setDimensions] = useState('');

  const viewer = (
    <model-viewer
      src={modelUrl}
      id="viewer"
      ref={viewerRef}
      cameraControls
    ></model-viewer>
  );

  useEffect(() => {
    if (modelUrl) {
      const storedViewer = viewerRef.current;

      const loadHandler = () => {
        const {x, y, z} = storedViewer.getDimensions();
        const dimensionString = `x: ${x.toFixed(2)}m, y: ${y.toFixed(
          2,
        )}m, z: ${z.toFixed(2)}m`;

        setDimensions(dimensionString);
        console.timeEnd('getDimensions');
      };

      storedViewer.addEventListener('load', loadHandler);

      return () => {
        storedViewer.removeEventListener('load', loadHandler);
      };
    }
  }, [modelUrl]);

  function dropHandler(event) {
    console.time('getDimensions');
    event.preventDefault();

    const file = event.dataTransfer.files[0];
    const modelObjectUrl = URL.createObjectURL(file);

    setModelUrl(modelObjectUrl);
  }

  function dragOverHandler(event) {
    event.preventDefault();
  }

  return (
    <div className="App">
      <div id="drop_zone" onDrop={dropHandler} onDragOver={dragOverHandler}>
        <p>Drop a GLB file in this Drop Zone for dimensions...</p>
        {dimensions}
        {modelUrl ? viewer : null}
      </div>
    </div>
  );
}

export default App;
