import FeatureItem from "./FeatureItem";
import accessIcon from "/images/icon-access-anywhere.svg";
import securityIcon from "/images/icon-security.svg";
import collaborationIcon from "/images/icon-collaboration.svg";
import anyFileIcon from "/images/icon-any-file.svg";

function Feature() {
  return (
    <section id="features" className="pt-12 bg-gray-50 dark:bg-darkBlue1">
      <div className="container mx-auto px-6 pb-32">
        <div className="flex flex-col space-y-24 text-center md:flex-row md:space-y-0">
          <FeatureItem
            img={accessIcon}
            title="Access your file from anywhere"
            text="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
          />
          <FeatureItem
            img={securityIcon}
            title="Security you can trust"
            text="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
          />
        </div>

        <div className="flex flex-col space-y-24 mt-28 text-center md:flex-row md:space-y-0">
          <FeatureItem
            img={collaborationIcon}
            title="Access your file from anywhere"
            text="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
          />
          <FeatureItem
            img={anyFileIcon}
            title="Security you can trust"
            text="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
          />
        </div>
      </div>
    </section>
  );
}

export default Feature;
