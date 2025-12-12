import { createSlice } from "@reduxjs/toolkit";
import Opportunities from "../pages/Opportunities";


const opportunities = [
    {
        id : 1,
        entreprise: "dacia",
        status: "prospection",
        telephone: "0523434343",
        email: "test@gmail.com",
        contact: 'John Paul',
        montant: 10000,
        probabilite: "60",
        date: new Date(),
        source: "website",
        commerciale: "",
    },
    {
        id:2,
        entreprise: "google",
        status: "qualification",
        telephone: "0523434343",
        email: "test@gmail.com",
        contact: 'John Paul',
        montant: 20000,
        probabilite: "70",
        date: new Date(),
        source: "website",
        commerciale: "",
    },
    {
        id:3,
        entreprise: "ideal",
        status: "proposition",
        telephone: "0523434343",
        email: "test@gmail.com",
        contact: 'John Paul',
        montant: 30000,
        probabilite: "30",
        date: new Date(),
        source: "website",
        commerciale: "",
    },

]
const OportinitySlice = createSlice({
    name: 'opportinities',
    initialState: opportunities,
    reducers: {
        addOportinity: (state, action) => {
            return { ...state, ...action.payload }
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