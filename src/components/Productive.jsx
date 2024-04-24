import productiveImg from "/images/illustration-stay-productive.png";
import arrowIcon from "/images/icon-arrow.svg";

function Productive() {
  return (
    <section id="productive" className="bg-white dark:bg-darkBlue">
      <div className="container flex flex-col items-center mx-auto px-6 pt-24 pb-32 md:flex-row md:space-x-16">
        <div className="md:w-1/2">
          <img src={productiveImg} alt="" className="mb-10" />
        </div>

        <div className="flex flex-col items-start md:w-1/2">
          <div className="flex flex-col space-y-5">
            <h4 className="max-w-md text-xl font-bol md:text-4xl">
              Stay productive, wherever you are
            </h4>
            <div className="text-md md:text-lg">
              Never let location be and issue when accessing your files. Fylo
              has you covered for all of your file storage needs.
            </div>

            <div className="text-md md:text-lg">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </div>
          </div>
          <div className="block mt-4">
            <a href="#" className="border-b border-accentCyan text-accentCyan">
              See how Fylo works{" "}
              <img src={arrowIcon} alt="" className="inline" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Productive;
