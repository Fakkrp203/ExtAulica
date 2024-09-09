const Icons = () => {
  return (
    <div>
      <h4 className="text-2xl font-bold mb-12">Síguenos para más noticias</h4>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1">
        <div className="hover:animate-pulse">
          <a href="https://www.facebook.com/RADIOIES89.1">
            <img src="/facebook.svg" alt="" />
          </a>
          <p>Facebook</p>
        </div>
        <div className="hover:animate-pulse">
          <a href="https://www.instagram.com/radioieslacocha/">
            <img src="/instagram.svg" alt="" />
          </a>
          <p>Instagram</p>
        </div>
      </div>
    </div>
  );
};

export default Icons;
