import React, { useState, useContext } from "react";

const amountContext = React.createContext();
const depositContext = React.createContext();

export function useAmountContext() {
  return useContext(amountContext);
}

export function useDepositContext() {
  return useContext(depositContext);
}

export function AmountProvider({ children }) {
  const [user, setUser] = useState(1);

  const Deposit = () => {
    setUser(user + 1);
  };

  return (
    <amountContext.Provider value={user}>
      <depositContext.Provider value={Deposit}>
        {children}
      </depositContext.Provider>
    </amountContext.Provider>
  );
}
