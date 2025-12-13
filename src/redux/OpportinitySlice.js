import { createSlice } from "@reduxjs/toolkit";


const data = [
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
const opportunities = localStorage.getItem('opportunities') ? JSON.parse(localStorage.getItem('opportunities')) : data;




const OportinitySlice = createSlice({
    name: 'opportinities',
    initialState: opportunities,
    reducers: {
        addOportinity: (state, action) => {
            const { probability, endDate, Source, ...rest } = action.payload;
            const newOpp = {
                ...rest,
                id: state.length + 1,
                probabilite: probability || "",
                date: endDate ? new Date(endDate) : new Date(),
                source: Source || "",
            };
            state.push(newOpp);
            localStorage.setItem('opportunities', JSON.stringify(state));
        },
        deleteOpprtinity: (state, action) => {
            const idToRemove = action.payload;
            const index = state.findIndex((op) => op.id === Number(idToRemove));
            if (index !== -1) {
                state.splice(index, 1);
                localStorage.setItem('opportunities', JSON.stringify(state));
            }
        },
        changeStatus: (state, action) => {
            return state.map((oppo) =>
                oppo.id == action.payload.oppId ? { ...oppo, status: action.payload.newStatus } : oppo
                )
        },
        editOpprtinity: (state, action) => {
            const { id, probability, endDate, Source, ...rest } = action.payload;
            const newState = state.map((op) =>
                op.id === Number(id)
                    ? {
                          ...op,
                          ...rest,
                          probabilite: probability ?? op.probabilite,
                          date: endDate ? new Date(endDate) : op.date,
                          source: Source ?? op.source,
                      }
                    : op
            );
            localStorage.setItem('opportunities', JSON.stringify(newState));
            return newState;
        },

    }
})


export default OportinitySlice.reducer
export const { addOportinity, deleteOpprtinity,editOpprtinity, changeStatus } = OportinitySlice.actions