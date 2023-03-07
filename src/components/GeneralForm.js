import React, { Component } from 'react';
import TextInput from "./common/TextInput";
import TextareaInput from "./common/TextareaInput";

export class GeneralForm extends Component {

    // Move to next step
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <>
                <form className='form' onSubmit={this.continue}>
                    <h3 className="form-title">
                        General Information
                    </h3>

                    <div className="row">
                        <div className="col-md-5">
                            <TextInput
                                id="fname"
                                name="fname"
                                label="First Name"
                                onChange={handleChange("fname")}
                                defaultValue={values.fname}
                            />
                        </div>
                        <div className="col-md-3">
                            <TextInput
                                id="mname"
                                name="mname"
                                label="Middle Name"
                                onChange={handleChange("mname")}
                                defaultValue={values.mname}
                            />
                        </div>
                        <div className="col-md-4">
                            <TextInput
                                id="lname"
                                name="lname"
                                label="Last Name"
                                defaultValue={values.lname}
                                onChange={handleChange("lname")}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3">
                            <div className="form-group mb-2">
                                <label htmlFor="email">E-Mail</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    onChange={handleChange("email")}
                                    defaultValue={values.email}
                                />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <TextInput
                                id="phone"
                                name="phone"
                                label="Phone Number"
                                defaultValue={values.phone}
                                onChange={handleChange("phone")}
                            />
                        </div>
                        <div className="col-md-3">
                            <TextInput
                                id="genCity"
                                name="genCity"
                                label="City"
                                defaultValue={values.genCity}
                                onChange={handleChange("genCity")}
                            />
                        </div>
                        <div className="col-md-3">
                            <TextInput
                                id="genState"
                                name="genState"
                                label="State"
                                maxLength="2"
                                placeholder="e.g., NY, CA, or HI"
                                defaultValue={values.genState}
                                onChange={handleChange("genState")}
                            />
                        </div>
                    </div>

                    <TextareaInput
                        id="bio"
                        name="bio"
                        label="Short Bio"
                        placeholder="Enter bio/objective..."
                        rows="4"
                        cols="10"
                        defaultValue={values.bio}
                        onChange={handleChange("bio")}>
                    </TextareaInput>

                    <div className='mb-3 d-grid'>
                        <button
                            type="submit"
                            id="nextBtn"
                            onClick={this.continue}
                            className="btn btn-sm btn-primary w-100">
                            Next
                            <i className="fa fa-arrow-right fa-fw"></i>
                        </button>
                    </div>

                </form>
            </>
        )
    }
}

export default GeneralForm;