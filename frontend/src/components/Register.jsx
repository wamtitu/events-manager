import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import './../styles/register.css'

const schema = yup.object({
    fullname: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
})
function Signup() {

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onsubmit= (data)=>{
        console.log(data)
    }
  return (
    <div className="form-container">
        <form onSubmit={handleSubmit(onsubmit)}>
            <h6>fill the form to register</h6>
            <input placeholder="fullname" {...register('fullname')} />
            {errors.fullname && <p>{errors.fullname.message}</p>}
            <input placeholder="email" {...register('email')}/>
            {errors.email && <p>{errors.email.message}</p>}
            <input placeholder="password" {...register('password')}/>
            {errors.password && <p>{errors.password.message}</p>}
            <input placeholder="confirmPassword" {...register('confirmPassword')}/>
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
            <input type="submit"/>
        </form>
    </div>
  )
}

export default Signup