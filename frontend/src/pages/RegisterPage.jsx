import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import RegisterForm from '../components/RegisterForm'

export default function RegisterPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      nomeCompleto: '',
      emailProfissional: '',
      senha: '',
      confirmarSenha: '',
    }
  })

  const senha = watch('senha')

  const onSubmit = async (data) => {
    if (data.senha !== data.confirmarSenha) {
      setError('As senhas não coincidem')
      return
    }

    try {
      setLoading(true)
      setError('')

      const payload = {
        name: data.nomeCompleto,
        email: data.emailProfissional,
        password: data.senha,
      }

      await axios.post('/api/users/register', payload)
      setSuccess(true)
    } catch (err) {
      setError(err.response?.data?.message || 'Erro ao criar conta. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-md">
          <div className="text-green-600 text-5xl mb-4">✓</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Conta Criada com Sucesso!</h1>
          <p className="text-gray-600 mb-6">Sua conta foi criada. Você pode fazer login agora.</p>
          <a href="/login" className="text-primary-dark hover:underline font-semibold">
            Ir para Login
          </a>
        </div>
      </div>
    )
  }

  return (
    <RegisterForm
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={errors}
      loading={loading}
      error={error}
      senha={senha}
    />
  )
}
