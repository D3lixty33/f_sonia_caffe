import { useState } from "react";

const Prenotations = () => {
  const [reservationId, setReservationId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    table_pre: 1,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.name === "table_pre" ? parseInt(e.target.value) : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    const port = import.meta.env.VITE_API_URL;
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${port}/reservation`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setReservationId(data.id);
    } catch (err) {
      console.error("Error creating reservation:", err);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center py-12 px-6">
      <h2 className="text-4xl font-bold mb-4 text-center">Prenota il tuo tavolo</h2>
      <p className="text-center text-lg mb-8 max-w-xl">
        Scegli il tuo tavolo, inserisci i tuoi dati e conferma la prenotazione. Ti aspettiamo da Sonia Caffè!
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-muted rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col gap-6"
      >
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Nome</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-foreground"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">Cognome</label>
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            required
            className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-foreground"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">Numero di persone</label>
          <select
            name="table_pre"
            value={formData.table_pre}
            onChange={handleChange}
            className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-foreground"
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "persona" : "persone"}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-foreground text-background font-semibold py-3 rounded-md hover:bg-foreground/80 transition-colors"
        >
          {loading ? "Prenotando..." : "Conferma Prenotazione"}
        </button>

        {reservationId && (
          <p className="text-center text-green-600 mt-4 font-medium">
            ✅ Prenotazione confermata! ID: {reservationId}
          </p>
        )}
      </form>

      <p className="text-center mt-12 text-sm text-gray-500 max-w-md">
        In caso di problemi contatta: <strong>info@soniacaffe.it</strong>
      </p>
    </div>
  );
};

export default Prenotations;