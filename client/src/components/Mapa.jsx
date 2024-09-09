import { Fade } from "react-awesome-reveal";


const MapaGoogle = () => {
  return (

    <Fade>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.980001469317!2d-65.62548462552732!3d-27.59414962201847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9423e8e346af2b69%3A0xb662ab9323c80d19!2sEscuela%20de%20Comercio%20Ciudad%20Alberdi!5e0!3m2!1ses-419!2sar!4v1713810990565!5m2!1ses-419!2sar"
      width="100%"
      height="500"
      style={{ border: "0" }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
    </Fade>
  );
};

export default MapaGoogle;
