import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editOpprtinity } from "../redux/OpportinitySlice";
import { toast } from "sonner";

export default function EditOpportunity() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const opportunities = useSelector((state) => state.opportunities || []);
  const opp = opportunities.find((o) => Number(o.id) === Number(id));

  const [form, setForm] = useState({
    entreprise: "",
    status: "prospection",
    telephone: "",
    email: "",
    contact : "",
    montant: "",
    probability: "",
    endDate: "",
    Source: "",
    commerciale: "",
  });

  useEffect(() => {
    if (opp) {
      const timer = setTimeout(() => {
        setForm({
          entreprise: opp.entreprise,
          status: opp.status || "prospection",
          telephone: opp.telephone ,
          email: opp.email ,
          contact : opp.contact,
          montant: opp.montant ,
          probability: opp.probabilite ,
          endDate: opp.date ? new Date(opp.date).toISOString().slice(0, 10) : "",
          Source: opp.source ,
          commerciale: opp.commerciale ,
        });
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [opp]);

  const etape = [
    "prospection",
    "qualification",
    "proposition",
    "negotiation",
    "gagne",
    "perdu",
  ];

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    if (!form.entreprise.trim() || !form.telephone.trim() || !form.email || !form.montant || !form.probability || !form.endDate || !form.Source.trim()) {
      toast.error('Please fill in all required fields');
      return;
    }
    if (form.montant < 0 || form.probability < 0){
      toast.error('montant and probability must be positive numbers')
      return
    }
    
    const payload = { id: Number(id), ...form };
    dispatch(editOpprtinity(payload));
    toast.success('Opportunity updated successfully.');
    navigate(`/opportunities/${id}`);
  }

  if (!opp) return <div className="p-6">Opportunity not found.</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
  <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
    <h1 className="text-3xl font-bold text-gray-800 mb-8">Edit Opportunity</h1>

    <form 
      className="grid grid-cols-1 md:grid-cols-2 gap-6" 
      onSubmit={handleSubmit}
    >
      <div>
        <label className="block text-gray-600 font-semibold mb-1">Company</label>
        <input
          name="entreprise"
          value={form.entreprise}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-gray-600 font-semibold mb-1">Stage</label>
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-orange-400 focus:outline-none"
        >
          {etape.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-gray-600 font-semibold mb-1">Telephone</label>
        <input
          name="telephone"
          value={form.telephone}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-gray-600 font-semibold mb-1">Email</label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-gray-600 font-semibold mb-1">Contact</label>
        <input
          name="contact"
          value={form.contact}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-gray-600 font-semibold mb-1">Amount</label>
        <input
          name="montant"
          value={form.montant}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-gray-600 font-semibold mb-1">Probability</label>
        <input
          name="probability"
          value={form.probability}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-gray-600 font-semibold mb-1">Expected Close</label>
        <input
          type="date"
          name="endDate"
          value={form.endDate}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-gray-600 font-semibold mb-1">Source</label>
        <input
          name="Source"
          value={form.Source}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-gray-600 font-semibold mb-1">Commerciale</label>
        <input
          name="commerciale"
          value={form.commerciale}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
        />
      </div>

      <div className="col-span-1 md:col-span-2 flex gap-4 mt-4">
        <button
          className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition"
        >
          Save
        </button>

        <button
          type="button"
          onClick={() => navigate(-1)}
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
