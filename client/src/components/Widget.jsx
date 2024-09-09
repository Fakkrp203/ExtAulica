const WhatsAppWidget = () => {
  return (
    <div className="fixed bottom-5 right-5 z-10">
      <a
        href="https://api.whatsapp.com/send/?phone=5493865411522&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-green-700 text-white px-4 py-2 rounded-full shadow-md hover:scale-105"
      >
        <img src="/whatsapp.svg" alt="" className="h-6 w-6 mr-2"/>
        Contactanos por Whatsapp
      </a>
    </div>
  );
};

export default WhatsAppWidget;
