import { useDispatch } from "react-redux";
import { addOportinity } from "../redux/OpportinitySlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useEffect, useState } from "react";
export default function AddOpportunity() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [montantPondere, setMontantPondere] = useState(0);
  const [calcul, setCalcul] = useState({
    montant: 0,
    probability: 0,
  });
  const handleCalcul = (e) => {
    setCalcul({...calcul,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(()=>{
    setMontantPondere(Math.round(calcul.montant * (calcul.probability / 100)));
  },[calcul])

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const finaldata = {
      ...data,
      montantPondere: Math.round(data.montant * (data.probability / 100)),
    }
    dispatch(addOportinity(finaldata));
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
        <form className="grid grid-cols-1 lg:grid-cols-2 gap-2 my-3" onSubmit={handleSubmit}>
          <div className="flex flex-col  m-1">
            <label htmlFor="entreprise" className="form-label capitalize text-slate-500 font-semibold"> 
              entreprise
            </label>
            <input
              type="text"
              className="form-control  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-2 focus:border-orange-600 focus:outline-none"
              name="entreprise"
              id="entreprise"
              required
            />
          </div>
          <div className="m-1 flex flex-col">
            <label htmlFor="status" className="form-label capitalize text-slate-500 font-semibold">
              stage
            </label>
            <select
              name="status"
              className="form-control px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding focus:border-2 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
            >
              {etape.map((e) => (
                <option value={e} key={e}>
                  {e}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col m-1">
            <label htmlFor="telephone" className="form-label capitalize text-slate-500 font-semibold">
              telephone
            </label>
            <input
              type="number"
              className="form-control  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding focus:border-2 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
              name="telephone"
              id="telephone"
              required
            />
          </div>
          <div className="flex flex-col m-1">
            <label htmlFor="email" className="form-label capitalize text-slate-500 font-semibold">
              email
            </label>
            <input
              type="email"
              className="form-control  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding focus:border-2 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="flex flex-col m-1">
            <label htmlFor="contact" className="form-label capitalize text-slate-500 font-semibold">
              contact
            </label>
            <input
              type="text"
              className="form-control  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding focus:border-2 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
              name="contact"
              id="contact"
              required
            />
          </div>
          <div className="flex flex-col m-1">
            <label htmlFor="montant" className="form-label capitalize text-slate-500 font-semibold">
              montant
            </label>
            <input
              type="number"
              className="form-control  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding focus:border-2 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
              name="montant"
              value={calcul.montant}
              id="montant"
               onChange={handleCalcul}
              required
            />
          </div>
          <div className="flex flex-col m-1">
            <label htmlFor="probability" className="form-label capitalize text-slate-500 font-semibold">
              probability
            </label>
            <input
              type="number"
              className="form-control px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding focus:border-2 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
              name="probability" 
              value={calcul.probability}
              onChange={handleCalcul}
              id="probability"
              required
            />
          </div>
          <div className="flex flex-col m-1">
            <label htmlFor="endDate" className="form-label capitalize text-slate-500 font-semibold">
              End Date
            </label>
            <input
              type="date"
              className="form-control  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  focus:border-2 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
              name="endDate"
              id="endDate"
              required
            />
          </div>
          <div className="flex flex-col m-1">
            <label htmlFor="Source" className="form-label capitalize text-slate-500 font-semibold">
              Source
            </label>
            <input
              type="text"
              className="form-control  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding focus:border-2 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
              name="Source"
              id="Source"
              required
            />
          </div>
          <div className="flex flex-col m-1">
            <label htmlFor="commerciale" className="form-label capitalize text-slate-500 font-semibold ">
              Commerciale 
            </label>
            <input
              type="text"
              className="form-control  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding focus:border-2 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
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
          <div className="mt-7 " >
            <p style={{fontSize:"1.2rem",fontWeight:'500'}}>montant Pondere : <b>{Math.abs(montantPondere)} DH</b></p>
          </div>
        </form>
      </div>
    </div>
  );
}
