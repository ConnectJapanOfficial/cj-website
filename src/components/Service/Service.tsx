import type { IServiceProps } from "../../utilities/interface";

const Service = ({ service, seeDetailsText }: IServiceProps) => {
  return (
    <div className="card w-full bg-base-100 card-lg shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{service.title}</h2>
        <p>{service.description}</p>
        <div className="justify-center card-actions">
          <button className="btn btn-primary">{seeDetailsText}</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
