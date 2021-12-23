import Preview from "./Preview.js";
import Speed from "./Speed.js";

function App() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <Preview></Preview>
          <textarea
            className="form-control mb-3"
            placeHolder="Start typing..."
          ></textarea>
          <Speed></Speed>
          <div className="text-right">
            <button className="btn btn-light">Restart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
