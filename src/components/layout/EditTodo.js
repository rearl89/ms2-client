import React, { Fragment } from "react";

export default function EditTodo() {
    return (
        <Fragment className="modalBackground">
            <div className="modalContainer">
                    <button> X </button>
                <div className="title"><h1>Edit Todo Description</h1></div>
                <div className="body"><input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} /></div>
                <div className="footer"><button>Cancel</button><button>Save</button></div>
            </div>
        </Fragment>
    )
}