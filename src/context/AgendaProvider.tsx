import React, { createContext, useEffect, useState } from "react";
import { Agenda } from "types";

const AgendaContext = createContext("" as any);

function AgendaProvider({ children }: any) {
  const [agendaDetails, setAgendaDetails] = useState<Agenda | null>(null);

  useEffect(() => {
    fetch('/api/agenda')
      .then((res) => res.json())
      .then((data) => {
        setAgendaDetails(data)
      })
  }, [])

  return (
    <AgendaContext.Provider value={{ agendaDetails, setAgendaDetails }}>
        {children}
    </AgendaContext.Provider>
  );
}

export { AgendaProvider, AgendaContext };