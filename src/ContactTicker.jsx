import './ContactTicker.css';

const tickerText =
  'Thripunithura: 0484 291 8001, 0484 2918002, 0484 2918003 | Mattancherry: 0484 2221432, 0484 2221433 | Kadavanthra: 0484 4170000 | Edappally: 0484 4000582, 0484 4000583';

export default function ContactTicker() {
  return (
    <section className="contact-ticker" aria-label="Branch contact numbers">
      <div className="contact-ticker__trackWrap">
        <div className="contact-ticker__track">
          <span className="contact-ticker__item">{tickerText}</span>
          <span className="contact-ticker__item" aria-hidden="true">
            {tickerText}
          </span>
        </div>
      </div>
    </section>
  );
}
