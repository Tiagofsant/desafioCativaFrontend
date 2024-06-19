import CardTestimonial from "../../components/cardTestimonial/index";
import Title from "../../components/title";
import "./styles.css";

// -----------------------------------------------------------------------------------

export default function Testimonials() {
  return (
    <div className="testimonial-container">
      <Title>O que nossos clientes falam sobre nós</Title>

      <div className="testimonial-content">
        <CardTestimonial
          name="Paulo Strider"
          description="CEO da Strider Viagens"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum,
          consectetur aperiam nesciunt delectus sunt molestias dolorem eaque
          magni animi sit sed repudiandae esse iste rerum ipsam mollitia?
          Maiores, odit laboriosam.
        </CardTestimonial>

        <CardTestimonial
          name="José Roberto"
          description="CEO da Viaja+ Turismo"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum,
          consectetur aperiam nesciunt delectus sunt molestias dolorem eaque
          magni animi sit sed repudiandae esse iste rerum ipsam mollitia?
          Maiores, odit laboriosam.
        </CardTestimonial>

        <CardTestimonial
          name="Maria Cristina"
          description="CEO da FlyAround Turismo"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum,
          consectetur aperiam nesciunt delectus sunt molestias dolorem eaque
          magni animi sit sed repudiandae esse iste rerum ipsam mollitia?
          Maiores, odit laboriosam.
        </CardTestimonial>
      </div>
    </div>
  );
}
