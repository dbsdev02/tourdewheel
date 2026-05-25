import { useState, useMemo, useEffect } from "react";
import "./SavingsCalculator.css";

const COMP_MONTHLY = 89;
const TDW_MONTHLY = 125;
const OWNERSHIP_MONTH = 12;

type CalcResult = {
  competitor: number;
  tdw: number;
  savings: number;
};

function calculate(years: number): CalcResult {
  const months = years * 12;
  const competitor = COMP_MONTHLY * months;
  const tdw = Math.min(months, OWNERSHIP_MONTH) * TDW_MONTHLY;
  return { competitor, tdw, savings: competitor - tdw };
}

function formatPrice(value: number) {
  return value.toLocaleString("fr-FR");
}

export default function SavingsCalculator() {
  const [years, setYears] = useState(3);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => { setHydrated(true); }, []);

  const result = useMemo(() => calculate(years), [years]);

  const percent = ((years - 1) / 4) * 100;
  const label = years > 1 ? `${years} ans` : `${years} an`;
  const positive = result.savings >= 0;

  return (
    <div className="sc-wrapper">

      <div className="sc-header">
        <span className="sc-header-dot" />
        <span className="sc-header-label">Calculateur d'économies</span>
      </div>

      <div className="sc-compare">

        <div className="sc-price-card competitor">
          <div className="sc-price-amount red">€{formatPrice(result.competitor)}</div>
          <div className="sc-price-name">Location pure</div>
          <div className="sc-price-sub">Aucune propriété</div>
        </div>

        <div className="sc-vs">VS</div>

        <div className="sc-price-card ours">
          <div className="sc-price-amount green">€{formatPrice(result.tdw)}</div>
          <div className="sc-price-name">TourDeWheel</div>
          <div className="sc-price-sub">+ vous possédez</div>
        </div>

      </div>

      <div className={`sc-savings ${positive ? "positive" : "negative"}`}>
        <div className="sc-savings-eyebrow">
          {positive ? "Vous économisez" : "Investissement initial"}
        </div>
        <div className="sc-savings-amount">
          {positive
            ? `+€${formatPrice(result.savings)}`
            : `€${formatPrice(Math.abs(result.savings))}`}
        </div>
        <div className="sc-savings-sub">sur {label}</div>
      </div>

      <div className="sc-slider-section">
        <div className="sc-slider-header">
          <span className="sc-slider-title">Durée de location</span>
          <span className="sc-slider-value">{label}</span>
        </div>

        {hydrated ? (
          <input
            type="range"
            min={1}
            max={5}
            step={1}
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="sc-range"
            style={{ "--pct": `${percent}%` } as React.CSSProperties}
          />
        ) : (
          <div className="sc-range-placeholder" />
        )}

        <div className="sc-ticks">
          {[1, 2, 3, 4, 5].map((v) => (
            <span
              key={v}
              className={`sc-tick${v === years ? " active" : ""}`}
              onClick={() => setYears(v)}
            >
              {v} an{v > 1 ? "s" : ""}
            </span>
          ))}
        </div>
      </div>

      <p className="sc-note">
        Concurrent : €{COMP_MONTHLY}/mois × durée · TourDeWheel : €{TDW_MONTHLY}/mois pendant {OWNERSHIP_MONTH} mois puis €0
      </p>

    </div>
  );
}
