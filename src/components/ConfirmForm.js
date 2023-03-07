import React, { Component } from "react";

export class ConfirmForm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {
        fname,
        mname,
        lname,
        email,
        phone,
        genCity,
        genState,
        bio,

        cname,
        expCity,
        expState,
        position,
        expStart,
        expEnd,
        duties,

        cname2,
        expCity2,
        expState2,
        position2,
        expStart2,
        expEnd2,
        duties2,

        cname3,
        expCity3,
        expState3,
        position3,
        expStart3,
        expEnd3,
        duties3,

        sname,
        eduCity,
        eduState,
        eduStart,
        eduEnd,
        degree,
        courseWork,

        sname2,
        eduCity2,
        eduState2,
        eduStart2,
        eduEnd2,
        degree2,
        courseWork2,

        sname3,
        eduCity3,
        eduState3,
        eduStart3,
        eduEnd3,
        degree3,
        courseWork3,
      },
    } = this.props;

    return (
      <>
        <div className="section section1">
          <h2>
            {fname} {mname} {lname}
          </h2>

          <div className="contact-info">
            <a
              href="mailto:{email}"
              rel="noopener noreferrer"
              target="_blank"
              className="contact"
            >
              <i className="fa fa-envelope fa-fw"></i> {email}
            </a>

            <a
              href="tel:+1{phone}"
              rel="noopener noreferrer"
              target="_blank"
              className="contact"
            >
              <i className="fa fa-phone-square fa-fw"></i> +1 {phone}
            </a>

            <a href="/#" className="contact">
              <i className="fa fa-map-marker-alt fa-fw"></i> {genCity},{" "}
              {genState}
            </a>
          </div>
        </div>

        <div className="section section2">
          <h4>
            Objective <br /> <hr className="m-0" />
          </h4>
          <p className="">{bio}</p>
        </div>

        <div className="section section3">
          <h4>
            Work Experience <br /> <hr className="m-0" />
          </h4>

          <div className="experience mb-3">
            <div className="d-flex">
              <h5 className="flex-grow-1">{position}</h5>
              <span className="flex-shrink-1">
                {expStart} &ndash; {expEnd}
              </span>
            </div>
            <div className="d-flex m-0 p-0">
              <h6 className="flex-grow-1">{cname}</h6>
              <span className="flex-shrink-1">
                {expCity}, {expState}
              </span>
            </div>
            <p className="indent">{duties}</p>
          </div>

          <div className="experience mb-3">
            <div className="d-flex">
              <h5 className="flex-grow-1">{position2}</h5>
              <span className="flex-shrink-1">
                {expStart2} &ndash; {expEnd2}
              </span>
            </div>
            <div className="d-flex m-0 p-0">
              <h6 className="flex-grow-1">{cname2}</h6>
              <span className="flex-shrink-1">
                {expCity2}, {expState2}
              </span>
            </div>
            <p className="indent">{duties2}</p>
          </div>

          <div className="experience">
            <div className="d-flex">
              <h5 className="flex-grow-1">{position3}</h5>
              <span className="flex-shrink-1">
                {expStart3} &ndash; {expEnd3}
              </span>
            </div>
            <div className="d-flex m-0 p-0">
              <h6 className="flex-grow-1">{cname3}</h6>
              <span className="flex-shrink-1">
                {expCity3}, {expState3}
              </span>
            </div>
            <p className="indent">{duties3}</p>
          </div>
        </div>

        <div className="section section3">
          <h4>
            Education and Training <br /> <hr className="m-0" />
          </h4>

          <div className="education mb-3">
            <div className="d-flex m-0 p-0">
              <h5 className="flex-grow-1">{degree}</h5>
              <span className="flex-shrink-1">
                {eduStart} &ndash; {eduEnd}
              </span>
            </div>
            <div className="d-flex m-0 p-0">
              <h6 className="flex-grow-1">{sname}</h6>
              <span className="flex-shrink-1">
                {eduCity}, {eduState}
              </span>
            </div>
            <p className="indent">{courseWork}</p>
          </div>

          <div className="education mb-3">
            <div className="d-flex m-0 p-0">
              <h5 className="flex-grow-1">{degree2}</h5>
              <span className="flex-shrink-1">
                {eduStart2} &ndash; {eduEnd2}
              </span>
            </div>
            <div className="d-flex">
              <h6 className="flex-grow-1">{sname2}</h6>
              <span className="flex-shrink-1">
                {eduCity2}, {eduState2}
              </span>
            </div>
            <p className="indent">{courseWork2}</p>
          </div>

          <div className="education">
            <div className="d-flex">
              <h5 className="flex-grow-1">{degree3}</h5>
              <span className="flex-shrink-1">
                {eduStart3} &ndash; {eduEnd3}
              </span>
            </div>
            <div className="d-flex">
              <h6 className="flex-grow-1">{sname3}</h6>
              <span className="flex-shrink-1">
                {eduCity3}, {eduState3}
              </span>
            </div>
            <p className="indent">{courseWork3}</p>
          </div>
        </div>

        <div className="button-container d-flex mt-5">
          <button
            type="button"
            id="prevBtn"
            onClick={this.back}
            className="btn btn-sm btn-danger me-2 w-50"
          >
            <i className="fa fa-arrow-left fa-fw"></i> Prev
          </button>

          <button
            type="submit"
            id="nextBtn"
            onClick={this.continue}
            className="btn btn-sm btn-primary w-50"
          >
            Submit <i className="fa fa-arrow-right fa-fw"></i>
          </button>
        </div>
      </>
    );
  }
}

export default ConfirmForm;
