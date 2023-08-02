import React from 'react';

const GoogleMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4640.737354754132!2d-58.66312735595018!3d-34.667407656062856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc0a31c1a4fa1%3A0x72ad8f10ee9adbf9!2sLos%20Pozos%20798%2C%20B1714PQP%20Ituzaing%C3%B3%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1690935650083!5m2!1ses-419!2sar"
      width="200"
      height="200"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      title="Google Map"
    ></iframe>
  );
};

export default GoogleMap;
