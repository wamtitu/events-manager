import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
    email: yup.string().required('email is required'),
    password: yup.string().required('password is required'),
})

function Login() {
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onsubmit= (data)=>{
        console.log(data)
    }
  return (
    <div>
    <div className="form-container">
        <form onSubmit={handleSubmit(onsubmit)}>
            <h6>enter email and password to login</h6>
            <input placeholder="email" {...register('email')}/>
            {errors.email && <p>{errors.email.message}</p>}
            <input placeholder="password" {...register('password')}/>
            {errors.password && <p>{errors.password.message}</p>}
            <input type="submit"/>
        </form>
    </div>
    </div>
  )
}

export default Login