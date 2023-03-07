import React, { Component } from "react";
import GeneralForm from "./GeneralForm";
import ExperienceForm from "./ExperienceForm";
import ConfirmForm from "./ConfirmForm";
import EducationForm from "./EducationForm";

export class ManageForm extends Component {
  state = {
    step: 1,
    fname: "",
    mname: "",
    lname: "",
    email: "",
    phone: "",
    genCity: "",
    genState: "",
    bio: "",

    cname: "",
    expCity: "",
    expState: "",
    position: "",
    expStart: "",
    expEnd: "",
    duties: "",
    isConfirmed: false,
    cname2: "",
    expCity2: "",
    expState2: "",
    position2: "",
    expStart2: "",
    expEnd2: "",
    duties2: "",
    cname3: "",
    expCity3: "",
    expState3: "",
    position3: "",
    expStart3: "",
    expEnd3: "",
    duties3: "",

    sname: "",
    eduCity: "",
    eduState: "",
    eduStart: "",
    eduEnd: "",
    degree: "",
    courseWork: "",
    isMatched: false,
    sname2: "",
    eduCity2: "",
    eduState2: "",
    eduStart2: "",
    eduEnd2: "",
    degree2: "",
    courseWork2: "",
    sname3: "",
    eduCity3: "",
    eduState3: "",
    eduStart3: "",
    eduEnd3: "",
    degree3: "",
    courseWork3: "",
  };

  // Handle change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  // Move to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // Move back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  render() {
    const { step } = this.state;
    const {
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
    } = this.state;

    const values = {
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
    };

    // Switch case
    switch (step) {
      case 1:
        return (
          <>
            <div className="homepage py-4">
              <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                <div className="d-flex justify-content-center">
                  <div className="text-center">
                    <h1 className="mx-auto my-0 text-uppercase">Free CV/Resume Builder</h1>
                    <h2 className="mx-auto mt-2 mb-4">React and Bootstrap for ultra-responsive web app.</h2>
                    <button className="btn btn-lg btn-start" onClick={this.nextStep}>Get Started</button>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <header className='text-center' role="banner">
            <h1>CV<span className="text-decor">/</span>Resume <span className="text-decor">Builder</span></h1>
              <p>Get Started By Filling In All Fields!</p>
            </header>
            <div className="container">
              <div className="row">
                <div className="col-12 mx-auto col-md-7 mt-5 bg-white form-wrap shadow-lg">
                  <small className="form-step">Step {step} of 4</small>
                  <GeneralForm
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                  />
                </div>
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <header className='text-center' role="banner">
            <h1>CV<span className="text-decor">/</span>Resume <span className="text-decor">Builder</span></h1>
              <p>Get Started By Filling In All Fields!</p>
            </header>
            <div className="container">
              <div className="row">
                <div className="col-12 mx-auto col-md-8 mt-5 bg-white form-wrap shadow-lg">
                  <small className="form-step">Step {step} of 4</small>
                  <ExperienceForm
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    handleChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <header className='text-center' role="banner">
            <h1>CV<span className="text-decor">/</span>Resume <span className="text-decor">Builder</span></h1>
              <p>Get Started By Filling In All Fields!</p>
            </header>
            <div className="container">
              <div className="row">
                <div className="col-12 mx-auto col-md-8 mt-5 bg-white form-wrap shadow-lg">
                  <small className="form-step">Step {step} of 4</small>
                  <EducationForm
                    handleChange={this.handleChange}
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                  />
                </div>
              </div>
            </div>
          </>
        );
      case 5:
        return (
          <>
            <div className='resume'>
              <div className='container'>
                <ConfirmForm
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  values={values}
                />
              </div>
            </div>
          </>
        );
      case 6:
        return (
          <>
            <header className='text-center' role="banner">
            <h1>CV<span className="text-decor">/</span>Resume <span className="text-decor">Builder</span></h1>
            </header>
            <div className="success-message bg-white text-center p-5 mt-5 container">
              <h3>Thank You For Your Submission!</h3>
              <p>We sent you an email with further instructions to download your resume.</p>
              <a href="/" className="text-decoration-none text-dark fw-bold">Back to Home</a>
            </div>
          </>
        );
      default:
    }
  }
}

export default ManageForm;
