import { useSelector, useDispatch } from "react-redux";
import { destinationClicked } from "../../redux/slice/destinationSlice";

function DestinationList() {
  const destionationList = useSelector((state) => {
    return state.destinationStore.destinations;
  });

  const usedispatch = useDispatch();
  console.log(destionationList);

  return destionationList.map((destination, index) => {
    return (
      <div
        className="text-white text-center row pt-2"
        style={{ borderBottom: "1px solid #333" }}
        key={index}
      >
        <div className="col-8 col-md-3 offset-md-3 pt-3 text-success">
          {destination.name}
        </div>
        <div className="col-4 col-md-2">
          <button
            className="btn btn-success form-control m-1"
            onClick={() => usedispatch(destinationClicked(destination))}
          >
            Details
          </button>
        </div>
      </div>
    );
  });
}

export default DestinationList;
