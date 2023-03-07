import React, { Component } from "react";
import TextInput from "./common/TextInput";
import TextareaInput from "./common/TextareaInput";
import MonthInput from "./common/MonthInput";

export class EducationForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      formData: [],
      isMatched: false,
      sname2: "",
      eduCity2: "",
      eduState2: "",
      eduStart2: "",
      eduEnd2: "",
      degree2: "",
      courseWork2: "",
      isReMatched: false,
      sname3: "",
      eduCity3: "",
      eduState3: "",
      eduStart3: "",
      eduEnd3: "",
      degree3: "",
      courseWork3: ""
    };
  }

  add = (e) => {
    e.preventDefault();
    const formData = this.state.formData;
    const copyFormData = Object.assign([], formData);
    copyFormData.push({ formData });

    this.setState({ formData: copyFormData }, () => {
      setTimeout(() => {
        this.setState({ isMatched: true });
      }, 300);
    });
  };

  remove = (index) => {
    const copyFormData = Object.assign([], this.state.formData);
    copyFormData.splice(index, 1);
    this.setState({ formData: copyFormData });
  };

  // Move to the next step
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  // Go back to previous step
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { formData } = this.state;
    const { values, handleChange } = this.props;

    return (
      <>
        <form className="form" onSubmit={this.continue}>
          <h3 className="form-title">Education Information</h3>

          <div className="mb-3">
            <small className="form-text"><span className="text-decor">*</span>You may include up to 3 of the most relevant schools or programs you have attended.</small>
          </div>

          <div className="row">
            <div className="col-md-4">
              <TextInput
                id="sname"
                name="sname"
                label="School Name"
                onChange={handleChange("sname")}
                defaultValue={values.sname}
              />
            </div>
            <div className="col-md-4">
              <TextInput
                id="eduCity"
                name="eduCity"
                label="City"
                onChange={handleChange("eduCity")}
                defaultValue={values.eduCity}
              />
            </div>
            <div className="col-md-4">
              <TextInput
                id="eduState"
                name="eduState"
                label="State"
                placeholder="(e.g., NY, CA, or HI)"
                maxLength="2"
                onChange={handleChange("eduState")}
                defaultValue={values.eduState}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <TextInput
                id="degree"
                name="degree"
                label="Degree"
                onChange={handleChange("degree")}
                defaultValue={values.degree}
              />
            </div>
            <div className="col-md-4">
              <MonthInput
                type="month"
                id="eduStart"
                name="eduStart"
                placeholder="(e.g., Jan 2001)"
                label="Start (mm / year)"
                onChange={handleChange("eduStart")}
                defaultValue={values.eduStart}
              />
            </div>
            <div className="col-md-4">
              <MonthInput
                type="month"
                id="eduEnd"
                name="eduEnd"
                label="End (mm / year)"
                placeholder="(e.g., Jan 2001)"
                onChange={handleChange("eduEnd")}
                defaultValue={values.eduEnd}
              />
            </div>
          </div>

          <TextareaInput
            id="courseWork"
            name="courseWork"
            label="Course Work"
            className="float-start"
            placeholder="Enter description..."
            onChange={handleChange("courseWork")}
            defaultValue={values.courseWork}>
          </TextareaInput>

          <div className="row">
            <div className="col mb-3 text-end">

              {formData.length !== 1 &&
                <button
                  id="addBtn"
                  className="btn btn-sm float-end btn-primary"
                  title="Add"
                  onClick={(e) => this.add(e)}>
                  <i className="fa fa-plus-circle fa-fw"></i>
                </button>}
            </div>
          </div>

          {this.state.isMatched && this.state.formData.map((index) => (
            <div key={index}>

              <div className="row">
                <div className="col-md-4">
                  <TextInput
                    id="sname2"
                    name="sname2"
                    label="School Name"
                    onChange={handleChange("sname2")}
                    defaultValue={values.sname2}
                  />
                </div>
                <div className="col-md-4">
                  <TextInput
                    id="eduCity2"
                    name="eduCity2"
                    label="City"
                    onChange={handleChange("eduCity2")}
                    defaultValue={values.eduCity2}
                  />
                </div>
                <div className="col-md-4">
                  <TextInput
                    id="eduState2"
                    name="eduState2"
                    label="State"
                    placeholder="(e.g., NY, CA, or HI)"
                    maxLength="2"
                    onChange={handleChange("eduState2")}
                    defaultValue={values.eduState2}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <TextInput
                    id="degree2"
                    name="degree2"
                    label="Degree"
                    onChange={handleChange("degree2")}
                    defaultValue={values.degree2}
                  />
                </div>
                <div className="col-md-4">
                  <MonthInput
                    type="month"
                    id="eduStart2"
                    name="eduStart2"
                    placeholder="(e.g., Jan 2001)"
                    label="Start (mm / year)"
                    onChange={handleChange("eduStart2")}
                    defaultValue={values.eduStart2}
                  />
                </div>
                <div className="col-md-4">
                  <MonthInput
                    type="month"
                    id="eduEnd2"
                    name="eduEnd2"
                    label="End (mm / year)"
                    placeholder="(e.g., Jan 2001)"
                    onChange={handleChange("eduEnd2")}
                    defaultValue={values.eduEnd2}
                  />
                </div>
              </div>

              <TextareaInput
                id="courseWork"
                name="courseWork"
                label="Course Work"
                placeholder="Enter description..."
                onChange={handleChange("courseWork2")}
                defaultValue={values.courseWork2}>
              </TextareaInput>

              <div className="row">
                <div className="col mb-3 text-end">

                  {formData.length !== 1 &&
                    <button
                      id="removeBtn"
                      className="btn btn-sm btn-danger"
                      title="Remove"
                      onClick={() => this.remove(index)}>
                      <i className="fa fa-minus-circle fa-fw"></i>
                    </button>}
                </div>
              </div>

            </div>
          ))}

          {formData.map((x) => (
            <div key={x}>

              <div className="row">
                <div className="col-md-4">
                  <TextInput
                    id="sname3"
                    name="sname3"
                    label="School Name"
                    onChange={handleChange("sname3")}
                    defaultValue={values.sname3}
                  />
                </div>
                <div className="col-md-4">
                  <TextInput
                    id="eduCity3"
                    name="eduCity3"
                    label="City"
                    onChange={handleChange("eduCity3")}
                    defaultValue={values.eduCity3}
                  />
                </div>
                <div className="col-md-4">
                  <TextInput
                    id="eduState3"
                    name="eduState3"
                    label="State"
                    placeholder="e.g., NY, CA, or HI"
                    maxLength={2}
                    onChange={handleChange("eduState3")}
                    defaultValue={values.eduState3}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <TextInput
                    id="degree3"
                    name="degree3"
                    label="Degree"
                    onChange={handleChange("degree3")}
                    defaultValue={values.degree3}
                  />
                </div>
                <div className="col-md-4">
                  <MonthInput
                    id="eduStart3"
                    name="eduStart3"
                    label="Start (mm / year)"
                    onChange={handleChange("eduStart3")}
                    defaultValue={values.eduStart3}
                  />
                </div>
                <div className="col-md-4">
                  <MonthInput
                    id="eduEnd3"
                    name="eduEnd3"
                    label="End (mm / year)"
                    onChange={handleChange("eduEnd3")}
                    defaultValue={values.eduEnd3}
                  />
                </div>
              </div>

              <TextareaInput
                id="courseWork3"
                name="courseWork3"
                label="Course Work"
                placeholder="Enter course work..."
                onChange={handleChange("courseWork3")}
                defaultValue={values.courseWork3}>
              </TextareaInput>

              <div className="row">
                <div className="col mb-3 text-end">

                  {formData.length - 1 === x &&
                    <button
                      id="addBtn"
                      title="Add"
                      className="btn btn-sm btn-primary me-2"
                      onClick={(e) => this.add(e)}>
                      <i className="fa fa-plus-circle fa-fw"></i>
                    </button>}

                  {x ?
                    <button
                      id="removeBtn"
                      className="btn btn-sm btn-danger"
                      title="Remove"
                      onClick={() => this.remove(x)}>
                      <i className="fa fa-minus-circle fa-fw"></i>
                    </button> : null}

                </div>
              </div>

            </div>
          ))}

          <div className="mb-3 d-grid d-flex">
            <button
              id="prevBtn"
              className="btn btn-sm btn-danger me-3 w-50"
              onClick={this.back}>
              <i className="fa fa-arrow-left fa-fw"></i> Prev
            </button>

            <button
              id="nextBtn"
              onClick={this.continue}
              className="btn btn-sm btn-primary w-50">Next
              <i className="fa fa-arrow-right fa-fw"></i>
            </button>
          </div>

        </form>
      </>
    );
  }
}

export default EducationForm;