import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
const ProductReviewForm = () => {

  

const content={
    inputs:[
        {
        name:"name"
        ,lable:"name",
        type:'text'
    },
      
  
      {
        name:"birth_date"
        ,lable:"Birth day",
        type:'date'
      },
      
      {
      name:"wouldRecommend",
      lable:"wouldRecommend",
      type:"checkbox",
    } ,
         {
        name:"phone"
        ,lable:"phone",
        type:'phone'
      }, 
         {
        name:"title"
        ,lable:"title",
        type:'text'
      }, 
         {
        name:"review"
        ,lable:"review",
        type:"textarea",
        as:"textarea"
      }, 
         {
        name:"rating"
        ,lable:"rating",
        type:'number'
      }, 
      {
      name:"wouldRecommend",
      lable:"wouldRecommend",
      type:"checkbox",
    }


      ],
}

    const groups = ["NATO", "FBI", "CIA", "KKS"];
    const gender = ["male", "female", "anoder gender"];

  const validationSchema = Yup.object({
    group: Yup.string().required("Please select a group").oneOf(groups),
    name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Firstname is required"),
    email: Yup.string().email().required().matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"invalide email"),
    phone: Yup.string().required().matches(/^\+(?:[0-9] ?){2,10}[0-9]$/g,"Invalid phone number"),
    title: Yup.string().required().min(2, "Too Short!").max(50, "Too Long!").required("title is required"),
    review: Yup.string().required().min(2, "Too Short!").max(400, "Too Long!"),
    birth_date: Yup.string().required(),
    gender:Yup.string().required("please select a gender ").oneOf(gender),
    rating: Yup.number().min(1).max(10).required(),
    date: Yup.date().default(() => new Date()),
    wouldRecommend: Yup.boolean().default(false),
  });
    const initialValues = {
    name: "",
    email: "",
    title: "",
    review: "",
    rating: "",
    phone:"",
    birth_date:"",
    date: new Date(),
    wouldRecommend: false,
    group: "",
    gender:"",
  };

  const onSubmit = (values) => {
    console.log(values)
  };

  const group = groups.map((groups, key) => (
    <option value={groups} key={key}>
      {groups}
    </option>
    
  ));
   const genders = gender.map((gender, key) => (
    <option value={gender} key={key}>
      {gender}
    </option>
    
  ));

  const renderError = (message) => <p className="help is-danger">{message}</p>;
  return (
   <>
 
 <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        await onSubmit(values);
        resetForm();
      }}
    >
      <Form>
        <div
          className="container"
          style={{
            width: "60%",
          }}
        >
            <h1>SIV FORM </h1>
           <div className="field">
            <label className="label" htmlFor="group">
             Nato Groups
            </label>
            <div className="control">
              <Field name="group" as="select" className="select is-fullwidth">
                <option value={""}>Select a grpup</option>
                {group}
              </Field>
              <ErrorMessage name="groupss" render={renderError} />
            </div>
          </div>
   {
      content.inputs.map((input,key)=>{
        if(input.name==="review"){
 return(
        <div key={key}>
          <div className="field">
            <label className="label" htmlFor={input.name}>
              {input.lable}
            </label>
            <div className="control">
              <Field
                name={input.name}
                type={input.type}
                className="input"
                placeholder="Full name"
                as={input.as}
              
              />
              <ErrorMessage name={input.name} render={renderError} />
            </div>
          </div>
        </div>)
        }
        else{
        return(
        <div key={key}>
          <div className="field">
            <label className="label" htmlFor={input.name}>
              {input.lable}
            </label>
            <div className="control">
              <Field
                name={input.name}
                type={input.type}
                className="input"
                placeholder="Full name"
              />
              <ErrorMessage name={input.name} render={renderError} />
            </div>
          </div>
        </div>)
        }
      })
    }
     <div className="field">
            <label className="label" htmlFor="gender">
              gender
            </label>
            <div className="control">
              <Field name="gender" as="select" className="select is-fullwidth">
                <option value={""}>Select a gender</option>
                {genders}
              </Field>
              <ErrorMessage name="gender" render={renderError} />
            </div>
          </div>
          <button type="submit" className="button is-primary">
            Submit
          </button>
        </div>
      </Form>
    </Formik>

</>
  )

;}

export default ProductReviewForm;