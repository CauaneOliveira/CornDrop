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
        <div className="bg-white rounded-2xl shadow-lg p-10 text-center max-w-md">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Conta Criada com Sucesso!</h1>
          <p className="text-gray-500 text-sm mb-2">
            Enviamos um e-mail de boas-vindas para você. Verifique sua caixa de entrada.
          </p>
          <p className="text-gray-400 text-xs mb-6">(Confira também a pasta de spam caso não encontre)</p>
          <a href="/login" className="text-primary-dark hover:underline font-semibold">
            Ir para Login →
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
