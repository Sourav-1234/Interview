import { useState } from "react";

function Folder({ handleInsertNode, explorer }) {
  console.log(explorer);
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  const onDeleteFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
    }
  };

  const handleDeletFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(false);

    setShowInput({
      visible: false,
      isFolder,
    });
  };

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);

    setShowInput({
      visible: true,
      isFolder,
    });
  };

  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>📁{explorer.name}</span>
          <div>
            <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
            <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
            <button onClick={(e) => handleDeletFolder(e, true)}>
              Folder -
            </button>
            <button onClick={(e) => handleDeletFolder(e, false)}>File -</button>
          </div>
        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📁" : "📄"} </span>
              <input
                type="text"
                onKeyDown={onAddFolder}
                onBlur={(e) =>
                  setShowInput({ ...showInput, visible: false, isFolder: null })
                }
                className="inputContainer__input"
                autoFocus
              />
            </div>
          )}

          {explorer.items.map((exp) => {
            return <Folder explorer={exp} key={exp.id} />;
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file"> 📄{explorer.name}</span>;
  }
}

export default Folder;
