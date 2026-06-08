import { Eye, EyeOff, Lock, Mail, User, AlertCircle } from 'lucide-react'
import { useState } from 'react'
import corndropIcone from '../assets/corndrop_icone.svg'
import fundoTela from '../assets/fundo_tela.png'

export default function RegisterForm({
  register,
  handleSubmit,
  onSubmit,
  errors,
  loading,
  error,
  senha,
}) {
  const [showSenha, setShowSenha] = useState(false)
  const [showConfirmarSenha, setShowConfirmarSenha] = useState(false)

  return (
    <div
      className="min-h-screen bg-[#fff8f3] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(255, 248, 243, 0.86), rgba(246, 236, 225, 0.72) 48%, rgba(1, 45, 29, 0.42)), url(${fundoTela})`,
      }}
    >
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        {/* Container Principal */}
        <div className="w-full max-w-md">
          {/* Card do Formulário */}
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_8px_32px_rgba(31,27,20,0.06)] p-8 md:p-10">
            {/* Título */}
            <div className="flex flex-col items-center mb-5">
          
              <img src={corndropIcone} alt="CornDrop" className="w-14 h-14 mb-2" />
              <span className="text-xl font-bold text-primary-dark">CornDrop</span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
              Inicie sua Jornada na Agricultura de Precisão
            </h1>
            <p className="text-center text-gray-600 text-sm mb-8">
              Crie sua conta para gerenciar seus ativos com precisão tecnológica.
            </p>
            {/* Card de Erro */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            {/* Formulário */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">
                  Nome Completo
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Ex: João da Silva"
                    {...register('nomeCompleto', {
                      required: 'Nome completo é obrigatório',
                      minLength: { value: 3, message: 'Mínimo 3 caracteres' }
                    })}
                    className={`w-full pl-12 pr-4 py-3 bg-gray-100 border-2 rounded-lg transition-colors ${
                      errors.nomeCompleto ? 'border-red-500' : 'border-transparent'
                    } focus:outline-none focus:border-primary-dark`}
                  />
                </div>
                {errors.nomeCompleto && (
                  <p className="text-red-600 text-xs mt-1">{errors.nomeCompleto.message}</p>
                )}
              </div>

              {/* E-mail */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">
                  E-mail Profissional
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="nome@fazenda.com.br"
                    {...register('emailProfissional', {
                      required: 'E-mail é obrigatório',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'E-mail inválido'
                      }
                    })}
                    className={`w-full pl-12 pr-4 py-3 bg-gray-100 border-2 rounded-lg transition-colors ${
                      errors.emailProfissional ? 'border-red-500' : 'border-transparent'
                    } focus:outline-none focus:border-primary-dark`}
                  />
                </div>
                {errors.emailProfissional && (
                  <p className="text-red-600 text-xs mt-1">{errors.emailProfissional.message}</p>
                )}
              </div>

              {/* Senha */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">
                  Senha
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showSenha ? 'text' : 'password'}
                    placeholder="••••••••"
                    {...register('senha', {
                      required: 'Senha é obrigatória',
                      minLength: { value: 6, message: 'Mínimo 6 caracteres' }
                    })}
                    className={`w-full pl-12 pr-12 py-3 bg-gray-100 border-2 rounded-lg transition-colors ${
                      errors.senha ? 'border-red-500' : 'border-transparent'
                    } focus:outline-none focus:border-primary-dark`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowSenha(!showSenha)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showSenha ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.senha && (
                  <p className="text-red-600 text-xs mt-1">{errors.senha.message}</p>
                )}
              </div>

              {/* Confirmar Senha */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">
                  Confirmar Senha
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showConfirmarSenha ? 'text' : 'password'}
                    placeholder="••••••••"
                    {...register('confirmarSenha', {
                      required: 'Confirmação de senha é obrigatória',
                      validate: (value) =>
                        value === senha || 'As senhas não coincidem'
                    })}
                    className={`w-full pl-12 pr-12 py-3 bg-gray-100 border-2 rounded-lg transition-colors ${
                      errors.confirmarSenha ? 'border-red-500' : 'border-transparent'
                    } focus:outline-none focus:border-primary-dark`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmarSenha(!showConfirmarSenha)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmarSenha ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.confirmarSenha && (
                  <p className="text-red-600 text-xs mt-1">{errors.confirmarSenha.message}</p>
                )}
              </div>

              {/* Botão Envio */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary-dark hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2 mt-8"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Criando conta...
                  </>
                ) : (
                  <>
                    Criar Minha Conta
                    <span className="text-lg">→</span>
                  </>
                )}
              </button>
            </form>

            {/* Link para Login */}
            <p className="text-center text-gray-600 text-sm mt-6">
              Já possui uma conta?{' '}
              <a href="/" className="text-primary-dark font-semibold hover:underline">
                Fazer Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
