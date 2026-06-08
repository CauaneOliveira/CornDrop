import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import LoginForm from '../components/LoginForm'

export default function LoginPage() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: '',
        }
    })

    const onSubmit = async (data) => {
        try {
            setLoading(true)
            setError('')

            const response = await axios.post('/api/users/login', data)

            // redirecionar para dashboard
            console.log('Login realizado com sucesso:', response.data)
            navigate('/dashboard')

        } catch (err) {
            setError(err.response?.data?.message || 'E-mail ou senha inválidos. Tente novamente.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <LoginForm
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            errors={errors}
            loading={loading}
            error={error}
        />
    )
}