function Footer() {
  return (
    <footer
      dir="rtl"
      className="footer bg-secondary relative pt-1 border-b-2 border-blue-700"
    >
      <div className="container mx-auto px-6">
        <div className="sm:flex sm:mt-8">
          <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col text-center md:flex-row justify-around">
            <div className="flex flex-col">
              <span className="font-bold text-secondary uppercase mb-2">
                تواصل معنا
              </span>
              <span className="my-2">
                <a href="#" className="text-primary  text-md ">
                  رابط
                </a>
              </span>
              <span className="my-2">
                <a href="#" className="text-primary  text-md ">
                  رابط
                </a>
              </span>
              <span className="my-2">
                <a href="#" className="text-primary  text-md ">
                  رابط
                </a>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-secondary uppercase mt-4 md:mt-0 mb-2">
                خدمات
              </span>
              <span className="my-2">
                <a href="#" className="text-primary text-md ">
                  رابط
                </a>
              </span>
              <span className="my-2">
                <a href="#" className="text-primary  text-md ">
                  رابط
                </a>
              </span>
              <span className="my-2">
                <a href="#" className="text-primary text-md ">
                  رابط
                </a>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-secondary uppercase mt-4 md:mt-0 mb-2">
                موقعنا
              </span>
              <span className="my-2">
                <a href="#" className="text-primary  text-md ">
                  رابط
                </a>
              </span>
              <span className="my-2">
                <a href="#" className="text-primary  text-md ">
                  رابط
                </a>
              </span>
              <span className="my-2">
                <a href="#" className="text-primary  text-md ">
                  رابط
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm text-primary font-bold mb-2">© 2021</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
