// src/components/Metro.tsx
import { useState, useEffect } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import hydmetrologo from "../assets/hydmetrologo.jpg";
import hydroutemap from "../assets/hydmetroroutemap.jpg";
import "./Metro.css";

function Metro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [message, setMessage] = useState<string[] | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [elements, setElements] = useState<{
    BlueLine: string[];
    RedLine: string[];
    GreenLine: string[];
  }>({ BlueLine: [], RedLine: [], GreenLine: [] });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://127.0.0.1:5000/get_elements");
        if (response.ok) {
          const data = await response.json();
          setElements({
            BlueLine: data.elements.BlueLine || [],
            RedLine: data.elements.RedLine || [],
            GreenLine: data.elements.GreenLine || [],
          });
        }
      } catch (error) {
        console.error("Error fetching elements:", error);
      }
    }
    fetchData();
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source_station: data.sourceStation,
          destination_station: data.destinationStation,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        if ("res" in result) {
          setMessage([
            ` Distance: ${result.res.distance}`,
            `  Time: ${result.res.time}`,
            ` Fare: ₹${result.res.cost}`,
          ]);
        } else {
          setMessage([`❌ ${result.error}`]);
        }
      } else {
        const error = await response.json();
        setMessage([`❌ ${error.error}`]);
      }
    } catch (error) {
      setMessage([`❌ ${(error as any).message}`]);
    }
  };

  const renderOptions = (line: "BlueLine" | "RedLine" | "GreenLine") =>
    elements[line].map((element, index) => (
      <option key={index} value={element}>
        {element}
      </option>
    ));

  return (
    <div className="metro-wrapper">
      {/* HERO SECTION */}
      <header className="hero-section">
        <img src={hydmetrologo} alt="logo" className="hero-logo" />
        <h1 className="hero-title">Hyderabad Metro Journey Planner</h1>
        <p className="hero-subtitle">
          Plan. Ride. Explore. — your smart metro companion 🚆
        </p>
      </header>

      {/* MAIN CARD */}
      <div className="glass-card">
        <div className="input-section">
          <h2 className="section-title">Plan Your Journey</h2>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <label className="form-label">Source Station</label>
            <select
              className="form-select"
              defaultValue=""
              {...register("sourceStation", { required: true })}
            >
              <option value="" disabled>
                Select Source
              </option>
              <optgroup label="Blue Line">{renderOptions("BlueLine")}</optgroup>
              <optgroup label="Red Line">{renderOptions("RedLine")}</optgroup>
              <optgroup label="Green Line">
                {renderOptions("GreenLine")}
              </optgroup>
            </select>
            {errors.sourceStation && (
              <p className="text-danger mt-1">* Source station required</p>
            )}

            <label className="form-label mt-3">Destination Station</label>
            <select
              className="form-select"
              defaultValue=""
              {...register("destinationStation", { required: true })}
            >
              <option value="" disabled>
                Select Destination
              </option>
              <optgroup label="Blue Line">{renderOptions("BlueLine")}</optgroup>
              <optgroup label="Red Line">{renderOptions("RedLine")}</optgroup>
              <optgroup label="Green Line">
                {renderOptions("GreenLine")}
              </optgroup>
            </select>
            {errors.destinationStation && (
              <p className="text-danger mt-1">* Destination required</p>
            )}

            <button type="submit" className="btn-plan">
              Calculate Route
            </button>
          </form>
        </div>

        <div className="output-section">
          <h2 className="section-title">Results</h2>
          <div className="results-box">
            {message ? (
              message.map((m, i) => (
                <h3 key={i} className="result-line">
                  {m}
                </h3>
              ))
            ) : (
              <p className="placeholder">Enter stations to see details</p>
            )}
          </div>
        </div>
      </div>

      {/* MAP */}
      <div className="map-section">
        <button
          className="btn-map-toggle"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? "Hide Metro Map" : "Show Metro Map"}
        </button>
        <div className={`map-wrapper ${isVisible ? "visible" : ""}`}>
          {isVisible && (
            <img
              src={hydroutemap}
              alt="Metro Map"
              className="metro-map"
              width="1000"
            />
          )}
        </div>
      </div>

      <footer className="footer">
        © Hyderabad Metro Planner | Built with ❤️ by Jahnavi
      </footer>
    </div>
  );
}

export default Metro;
