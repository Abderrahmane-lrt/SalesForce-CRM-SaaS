import { useDispatch } from "react-redux";
import { addOportinity } from "../redux/OpportinitySlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
export default function AddOpportunity() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    dispatch(addOportinity(data));
    Navigate("/pipline");
    toast.success("New opportunity added.");
    e.target.reset();
  };
  const etape = [
    "prospection",
    "qualification",
    "proposition",
    "negotiation",
    "gagne",
    "perdu",
  ];
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Add Opportunity
        </h1>
        <form className="flex flex-wrap gap-3 my-3" onSubmit={handleSubmit}>
          <div className="flex flex-col  m-1">
            <label htmlFor="entreprise" className="form-label">
              entreprise:
            </label>
            <input
              type="text"
              className="form-control w-100 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
              placeholder="Entreprise"
              name="entreprise"
              id="entreprise"
              required
            />
          </div>
          <div className="m-1 flex flex-col">
            <label htmlFor="status" className="form-label">
              stage
            </label>
            <select
              name="status"
              className="form-control w-100 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
            >
              {etape.map((e) => (
                <option value={e} key={e}>
                  {e}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col m-1">
            <label htmlFor="telephone" className="form-label">
              telephone:
            </label>
            <input
              type="number"
              className="form-control w-100 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
              placeholder="telephone"
              name="telephone"
              id="telephone"
              required
            />
          </div>
          <div className="flex flex-col m-1">
            <label htmlFor="email" className="form-label">
              email:
            </label>
            <input
              type="email"
              className="form-control w-100 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
              placeholder="email"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="flex flex-col m-1">
            <label htmlFor="contact" className="form-label">
              contact:
            </label>
            <input
              type="text"
              className="form-control w-100 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
              placeholder="contact"
              name="contact"
              id="contact"
              required
            />
          </div>
          <div className="flex flex-col m-1">
            <label htmlFor="montant" className="form-label">
              montant:
            </label>
            <input
              type="number"
              className="form-control w-65 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
              placeholder="montant"
              name="montant"
              id="montant"
              required
            />
          </div>
          <div className="flex flex-col m-1">
            <label htmlFor="probability" className="form-label">
              probability:
            </label>
            <input
              type="number"
              className="form-control w-65 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
              placeholder="probability"
              name="probability"
              id="probability"
              required
            />
          </div>
          <div className="flex flex-col m-1">
            <label htmlFor="endDate" className="form-label">
              End Date:
            </label>
            <input
              type="date"
              className="form-control w-65 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
              placeholder="endDate"
              name="endDate"
              id="endDate"
              required
            />
          </div>
          <div className="flex flex-col m-1">
            <label htmlFor="Source" className="form-label">
              Source:
            </label>
            <input
              type="text"
              className="form-control w-100 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
              placeholder="Source"
              name="Source"
              id="Source"
              required
            />
          </div>
          <div className="flex flex-col m-1">
            <label htmlFor="commerciale" className="form-label">
              Commerciale :
            </label>
            <input
              type="text"
              className="form-control w-100 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
              placeholder="commerciale"
              name="commerciale"
              id="commerciale"
            />
          </div>
          <div className="flex gap-4 mt-5">
            <button className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-200">
              Add Opportunity
            </button>
            <button
              type="button"
              onClick={() => Navigate(-1)}
              className="px-6 py-2 border cursor-pointer border-gray-400 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
