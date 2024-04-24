import TestimonialsItems from "./TestimonialsItems";
import quotesImg from "/images/bg-quotes.png";
import profile1 from "/images/profile-1.jpg";
import profile2 from "/images/profile-2.jpg";
import profile3 from "/images/profile-3.jpg";

function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-50 dark:bg-darkBlue">
      <div className="container mx-auto px-6 pt-12 pb-80 md:pb-96">
        <div className="relative flex flex-col w-full space-y-6 md:flex-row md:space-y-0 md:space-x-12">
          <img
            src={quotesImg}
            alt=""
            className="absolute left-1 -top-2 w-10 md:-top-16 md:w-20"
          />
          <TestimonialsItems
            content="Fylo has improved our team productivity by and order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
            img={profile1}
            name="Satish Patel"
            position="Founder & CEO. Huddle"
          />
          <TestimonialsItems
            content="Fylo has improved our team productivity by and order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
            img={profile2}
            name="Bruce McKenzie"
            position="Founder & CEO. Fuddle"
          />
          <TestimonialsItems
            content="Fylo has improved our team productivity by and order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
            img={profile3}
            name="Eva Boyd"
            position="Founder & CEO. Puddle"
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
