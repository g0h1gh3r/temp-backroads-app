import Title from './Title'
import { services } from '../data'
const Services = () => {
  return (
    <div>
      <section className="section services" id="services">
        <Title title="our" subTitle="services"></Title>
        <div className="section-center services-center">
          {services.map(({ id, icon, title, text }) => {
            return (
              <article key={id} className="service">
                <span className="service-icon">
                  <i className={icon}></i>
                </span>
                <div className="service-info">
                  <h4 className="service-title">{title}</h4>
                  <p className="service-text">{text}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}
export default Services
