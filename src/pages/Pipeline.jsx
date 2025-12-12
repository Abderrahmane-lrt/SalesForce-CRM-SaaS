import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import "../assets/css/pipline.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeStatus } from "../redux/OpportinitySlice";

dayjs.extend(relativeTime);

function Draggable({ oppo }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: oppo.entreprise,
  });
  const dragStyle = {
    cursor: "move",
    transform: transform && `translate(${transform.x}px, ${transform.y}px)`,
  };
  return (
    <div
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      style={dragStyle}
      className="draggable border border-slate-200"
    >
      <span className="titleAndprice">
        <h2>{oppo.entreprise}</h2>
        <b className="montant">
          <i>{oppo.montant} DH</i>
        </b>
      </span>
      <div className="meta">
        <span className="prob">{oppo.probabilite || "—"}%</span>
      </div>
      <div className="date">
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-calendar-stats"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
            <path d="M18 14v4h4" />
            <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
            <path d="M15 3v4" />
            <path d="M7 3v4" />
            <path d="M3 11h16" />
          </svg>
          {oppo.date.toLocaleDateString()}
        </p>
        <small>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-clock-hour-4"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M12 12l3 2" />
            <path d="M12 7v5" />
          </svg>
          {dayjs(oppo.date).fromNow()}
        </small>
      </div>
      <div className="contact">
        <NavLink to={`tel:${oppo.telephone}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-phone"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
          </svg>
        </NavLink>
        <NavLink to={`mailto:${oppo.email}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-mail"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
            <path d="M3 7l9 6l9 -6" />
          </svg>
        </NavLink>
        <NavLink to={oppo.source}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-world"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M3.6 9h16.8" />
            <path d="M3.6 15h16.8" />
            <path d="M11.5 3a17 17 0 0 0 0 18" />
            <path d="M12.5 3a17 17 0 0 1 0 18" />
          </svg>
        </NavLink>
      </div>
    </div>
  );
}
function Column({ opportinities, etape }) {
  const { setNodeRef } = useDroppable({ id: etape });
  const colorByStage = {
    prospection: "#3b82f6",
    qualification: "#eab308",
    proposition: "#f97316",
    negotiation: "#10b981",
    gagne: "#22c55e",
    perdu: "#ef4444",
  };

  return (
    <div
      className="column"
      style={{ borderTop: "9px solid " + colorByStage[etape] }}
    >
      <h1 style={{ color: colorByStage[etape] }}>{etape}</h1>
      <div className="columnInner" ref={setNodeRef}>
        {opportinities.map((op) => (
          <Draggable key={op.entreprise} oppo={op} />
        ))}
      </div>
    </div>
  );
}
export default function Pipeline() {
  const etape = [
    "prospection",
    "qualification",
    "proposition",
    "negotiation",
    "gagne",
    "perdu",
  ];
  const opportunities = useSelector((state) => state.opportunities);
  const dispatch = useDispatch();

  const handleDragEnd = (event) => {
    const { over, active } = event;
    const oppId = active.id;
    const newStatus = over?.id;
    if (over) {
      dispatch(changeStatus({ oppId, newStatus }));
    } else return;
  };

  return (
    <div className="piplineContainer">
      <DndContext onDragEnd={handleDragEnd}>
        <h1 className="pb-6">
          <span className="text-3xl font-extrabold text-gray-800 ">
            📋 Pipeline Kanban
          </span>
        </h1>
        <hr />
        <div className="columnWrapper">
          {etape.map((stage) => (
            <Column
              key={stage}
              opportinities={opportunities.filter((opp) => opp.status === stage)}
              etape={stage}
            />
          ))}
        </div>
      </DndContext>
    </div>
  );
}
