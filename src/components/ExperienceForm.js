import React, { Component } from "react";
import TextInput from "./common/TextInput";
import TextareaInput from "./common/TextareaInput";
import MonthInput from "./common/MonthInput";

export class ExperienceForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: [],
      isConfirmed: false,
      cname2: "",
      expCity2: "",
      expState2: "",
      position2: "",
      expStart2: "",
      expEnd2: "",
      duties2: "",
      isReConfirmed: false,
      cname3: "",
      expCity3: "",
      expState3: "",
      position3: "",
      expStart3: "",
      expEnd3: "",
      duties3: "",
    };
  };

  add = (e) => {
    e.preventDefault();
    // this.expID = this.expID + 1;
    const formData = this.state.formData;
    const copyFormData = Object.assign([], formData);
    copyFormData.push({ formData });

    this.setState({ formData: copyFormData }, () => {
      setTimeout(() => {
        this.setState({ isConfirmed: true });
      }, 300);
    });
  };

  remove = (index) => {
    const copyFormData = Object.assign([], this.state.formData);
    copyFormData.splice(index, 1);
    this.setState({ formData: copyFormData });
  };

  // Next step
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  // Move back to current step
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    const { formData } = this.state;
    return (
      <>
        <form className="form">
          <h3 className="form-title">Experience Information</h3>

          <div className="mb-3">
            <small className="form-text">
              <span className="text-decor">*</span>You may include up to 3 of
              your most recent positions.
            </small>
          </div>

          <div className="row">
            <div className="col-md-4">
              <TextInput
                id="cname"
                name="cname"
                label="Company Name"
                onChange={handleChange("cname")}
                defaultValue={values.cname}
              />
            </div>
            <div className="col-md-4">
              <TextInput
                id="expCity"
                name="expCity"
                label="City"
                onChange={handleChange("expCity")}
                defaultValue={values.expCity}
              />
            </div>
            <div className="col-md-4">
              <TextInput
                id="expState"
                name="expState"
                label="State"
                placeholder="e.g., NY, CA, or HI"
                maxLength="2"
                onChange={handleChange("expState")}
                defaultValue={values.expState}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <TextInput
                id="position"
                name="position"
                label="Position"
                onChange={handleChange("position")}
                defaultValue={values.position}
              />
            </div>
            <div className="col-md-4">
              <MonthInput
                id="expStart"
                name="expStart"
                placeholder="(e.g., Jan 2001)"
                label="Start (mm / year)"
                onChange={handleChange("expStart")}
                defaultValue={values.expStart}
              />
            </div>
            <div className="col-md-4">
              <MonthInput
                id="expEnd"
                name="expEnd"
                placeholder="(e.g., Jan 2001)"
                label="End (mm / year)"
                onChange={handleChange("expEnd")}
                defaultValue={values.expEnd}
              />
            </div>
          </div>

          <TextareaInput
            id="duties"
            name="duties"
            label="Duties"
            placeholder="Enter role and duties..."
            onChange={handleChange("duties")}
            defaultValue={values.duties}
          ></TextareaInput>

          <div className="row">
            <div className="col text-end mb-3">
            {formData.length !== 1 &&
              <button
                id="addBtn"
                title="Add"
                className="btn btn-sm btn-primary"
                onClick={(e) => this.add(e)}>
                <i className="fa fa-plus-circle fa-fw"></i>
              </button> }
            </div>
          </div>

          {this.state.isConfirmed &&
            formData.map((index) => (
            <div key={index}>
              <div className="row">
                <div className="col-md-4">
                  <TextInput
                    id="cname2"
                    name="cname2"
                    label="Company Name"
                    onChange={handleChange("cname2")}
                    defaultValue={values.cname2}
                  />
                </div>
                <div className="col-md-4">
                  <TextInput
                    id="expCity2"
                    name="expCity2"
                    label="City"
                    onChange={handleChange("expCity2")}
                    defaultValue={values.expCity2}
                  />
                </div>
                <div className="col-md-4">
                  <TextInput

                    id="expState2"
                    name="expState2"
                    label="State"
                    placeholder="e.g., NY, CA, or HI"
                    maxLength="2"
                    onChange={handleChange("expState2")}
                    defaultValue={values.expState2}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <TextInput
                    id="position2"
                    name="position2"
                    label="Position"
                    onChange={handleChange("position2")}
                    defaultValue={values.position2}
                  />
                </div>
                <div className="col-md-4">
                  <MonthInput
                    id="expStart2"
                    name="expStart2"
                    label="Start (mm / year)"
                    placeholder="(e.g., Jan 2001)"
                    onChange={handleChange("expStart2")}
                    defaultValue={values.expStart2}
                  />
                </div>
                <div className="col-md-4">
                  <MonthInput
                    id="expEnd2"
                    name="expEnd2"
                    label="End (mm / year)"
                    placeholder="(e.g., Jan 2001)"
                    onChange={handleChange("expEnd2")}
                    defaultValue={values.expEnd2}
                  />
                </div>
              </div>

              <TextareaInput
                id="duties2"
                name="duties2"
                label="Duties"
                placeholder="Enter role and duties..."
                onChange={handleChange("duties2")}
                defaultValue={values.duties2}
              ></TextareaInput>

              <div className="row">
                <div className="col mb-3 text-end">
                  
                {formData.length !== 1 &&
                  <button
                    id="removeBtn"
                    title="Remove"
                    className="btn btn-sm btn-danger"
                    onClick={() => this.remove(index)}>
                    <i className="fa fa-minus-circle fa-fw"></i>
                  </button> }
                </div>
              </div>
            </div>
          ))}

          {this.state.isConfirmed &&
            formData.map((x) => (
            <div key={x}>
              <div className="row">
                <div className="col-md-4">
                  <TextInput
                    id="cname3"
                    name="cname3"
                    label="Company Name"
                    onChange={handleChange("cname3")}
                    defaultValue={values.cname3}
                  />
                </div>
                <div className="col-md-4">
                  <TextInput
                    id="expCity3"
                    name="expCity3"
                    label="City"
                    onChange={handleChange("expCity3")}
                    defaultValue={values.expCity3}
                  />
                </div>
                <div className="col-md-4">
                  <TextInput
                    id="expState3"
                    name="expState3"
                    label="State"
                    placeholder="e.g., NY, CA, or HI"
                    maxLength="2"
                    onChange={handleChange("expState3")}
                    defaultValue={values.expState}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <TextInput
                    id="position3"
                    name="position3"
                    label="Position"
                    onChange={handleChange("position3")}
                    defaultValue={values.position}
                  />
                </div>
                <div className="col-md-4">
                  <MonthInput
                    id="expStart3"
                    name="expStart3"
                    placeholder="(e.g., Jan 2001)"
                    label="Start (mm / year)"
                    onChange={handleChange("expStart3")}
                    defaultValue={values.expStart3}
                  />
                </div>
                <div className="col-md-4">
                  <MonthInput
                    id="expEnd3"
                    name="expEnd3"
                    placeholder="(e.g., Jan 2001)"
                    label="End (mm / year)"
                    onChange={handleChange("expEnd3")}
                    defaultValue={values.expEnd3}
                  />
                </div>
              </div>

              <TextareaInput
                id="duties3"
                name="duties3"
                label="Duties"
                placeholder="Enter role and duties..."
                onChange={handleChange("duties3")}
                defaultValue={values.duties3}
              ></TextareaInput>

               <div className="row">
                <div className="col mb-3 text-end">
                
                {formData.length - 1 === x && 
                <button
                    id="addBtn"
                    title="Add"
                    className="btn btn-sm btn-primary me-2"
                    onClick={(e) => this.add(e)}>
                    <i className="fa fa-plus-circle fa-fw"></i>
                  </button> }

                {x ? 
                  <button
                    id="removeBtn"
                    title="Remove"
                    className="btn btn-sm btn-danger"
                    onClick={() => this.remove(x)}>
                    <i className="fa fa-minus-circle fa-fw"></i>
                  </button>: null}
                </div>
              </div>
            </div>
          ))}

          <div className="mb-3 d-grid d-flex">
            <button
              id="prevBtn"
              className="btn btn-sm btn-danger me-3 w-50"
              onClick={this.back}
            >
              <i className="fa fa-arrow-left fa-fw"></i> Prev
            </button>
            <button
              id="nextBtn"
              onClick={this.continue}
              className="btn btn-sm btn-primary w-50"
            >
              Next <i className="fa fa-arrow-right fa-fw"></i>
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default ExperienceForm;
