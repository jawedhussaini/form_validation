import React from 'react'
import {useForm} from 'react-hook-form'
import content from './data'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup';

let schema = yup.object().shape({
email:yup.string().email().required("eamil is required"),

password:yup.string().required().min(5).max(45)
});
function Index() {
   const {register,handleSubmit,formState: { errors }}=useForm({
    resolver:yupResolver(schema),
  })

 console.log(errors)
  return (
    <div className="container"> 
  <h1>react-form-hook</h1>
  <form onSubmit={handleSubmit((data) => console.log(data))}>
  
    {
      content.inputs.map((input,key)=>{
        return(
        <div key={key}>
          <p>
            <label>{input.lable}</label>
          </p>
          <p>
            <input name={input.name}  {...register(`${input.type}`)} type={input.type} />
          </p>
       <p className="error-color">{errors[input.type]?.message}</p>
        </div>
      )})
    }
    <button type="submit">submit</button>
  </form>
    </div>
  )
}

export default Index
