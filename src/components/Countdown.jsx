import React, { useEffect, useState } from "react";
import GoogleMap from "./GoogleMap";

const Countdown = () => {
  const [countdownDate, setCountdownDate] = useState(
    new Date("2023-08-10T00:00:00").getTime()
  );
  const [timeLeft, setTimeLeft] = useState({});
  const [endTime, setEndTime] = useState(false);
  const [charge, setCharge] = useState(false);

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = countdownDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
      setCharge(true);
    } else {
      setEndTime(true);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="contador">
      {charge && <h1 className="title">Cumpleañitos</h1>}
      {timeLeft.days !== undefined ? (
        <article>
          <p>Tenes</p>
          <span>{`${timeLeft.days} dias`}</span>
          <br className="d-md-none" />
          <span>{`${timeLeft.hours} horas`}</span>
          <br className="d-md-none" />
          <span>{`${timeLeft.minutes} minutos`}</span>
          <br className="d-md-none" />
          <span>{`${timeLeft.seconds} segundos`}</span>
          <br className="d-md-none" />
          <p>Para ir a comprar un regalo</p>
          <br />
          <GoogleMap />
          <br />
          <br />
          <br />
          <h5 className="credits">By Shiionm</h5>
        </article>
      ) : (
        <p>{endTime && <strong>¡Es hoy!</strong>}</p>
      )}
    </div>
  );
};

export default Countdown;
