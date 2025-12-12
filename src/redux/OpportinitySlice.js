import { createSlice } from "@reduxjs/toolkit";


const data = [
    {
        entreprise: "dacia",
        status: "prospection",
        telephone: "0523434343",
        email: "test@gmail.com",
        montant: 10000,
        probabilite: "",
        date: new Date(),
        source: "",
        commerciale: "",
    },
    {
        entreprise: "google",
        status: "qualification",
        telephone: "0523434343",
        email: "test@gmail.com",
        montant: 20000,
        probabilite: "",
        date: new Date(),
        source: "",
        commerciale: "",
    },
    {
        entreprise: "ideal",
        status: "proposition",
        telephone: "0523434343",
        email: "test@gmail.com",
        montant: 30000,
        probabilite: "",
        date: new Date(),
        source: "",
        commerciale: "",
    },
]
const opportunities = localStorage.getItem('opportunities') ? JSON.parse(localStorage.getItem('opportunities')) : data;




const OportinitySlice = createSlice({
    name: 'opportinities',
    initialState: opportunities,
    reducers: {
        addOportinity: (state, action) => {
            state.push(action.payload);
            localStorage.setItem('opportunities', JSON.stringify(state));
        },
        deleteOpprtinity: () => {
            
        },
        changeStatus: (state, action) => {
            return state.map((oppo) =>
                oppo.entreprise == action.payload.oppId ? { ...oppo, status: action.payload.newStatus } : oppo
                )
        },

    }
})


export default OportinitySlice.reducer
export const { addOportinity, deleteOpprtinity, changeStatus } = OportinitySlice.actions