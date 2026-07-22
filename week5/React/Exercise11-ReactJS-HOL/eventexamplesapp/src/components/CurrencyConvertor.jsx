import React, { useState } from "react";

const CurrencyConvertor = () => {

  const [amount, setAmount] = useState(90);
  const [currency, setCurrency] = useState("EURO");

  const handleSubmit = (e) => {
    e.preventDefault();

    const euro = (amount / 90).toFixed(2);

    alert(`${amount} INR = ${euro} ${currency}`);
  };

  return (
    <div style={{ margin: "30px" }}>
      <h1 style={{ color: "green" }}>
        Currency Convertor!!!
      </h1>

      <form onSubmit={handleSubmit}>

        <div style={{ marginBottom: "20px" }}>
          <label>Amount </label>

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "30px" }}>
          <label>Currency </label>

          <input
            type="text"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          />
        </div>

        <button type="submit">
          Submit
        </button>

      </form>
    </div>
  );
};

export default CurrencyConvertor;