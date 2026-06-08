import { Eye, EyeOff, Lock, Mail, User, AlertCircle } from 'lucide-react'
import { useState } from 'react'
import corndropIcone from '../assets/corndrop_icone.svg'
import fundoTela from '../assets/fundo_tela.png'

export default function LoginForm({
    register,
    handleSubmit,
    onSubmit,
    errors,
    loading,
    error
}) {
    const [showSenha, setShowSenha] = useState(false)

    return (
        <div
            className="min-h-screen bg-[#fff8f3] bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `linear-gradient(135deg, rgba(255, 248, 243, 0.86), rgba(246, 236, 225, 0.72) 48%, rgba(1, 45, 29, 0.42)), url(${fundoTela})`,
            }}
        >
            <div className="flex flex-col items-center justify-center min-h-screen p-4">
                <div className="w-full max-w-md">
                    <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_8px_32px_rgba(31,27,20,0.06)] p-8 md:p-10">

                        <div className="flex flex-col items-center mb-5">
                            <img src={corndropIcone} alt="CornDrop" className="w-14 h-14 mb-2" />
                            <span className="text-xl font-bold text-primary-dark">CornDrop</span>
                        </div>

                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
                            Bem-vindo de volta!
                        </h1>
                        <p className="text-center text-gray-600 text-sm mb-8">
                            Acesse sua conta para gerenciar seus ativos com precisão.
                        </p>

                        {error && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <p className="text-red-700 text-sm">{error}</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div>
                                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">
                                    E-mail
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="email"
                                        placeholder="seu@email.com"
                                        {...register('email', {
                                            required: 'E-mail é obrigatório',
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: 'E-mail inválido'
                                            }
                                        })}
                                        className={`w-full pl-12 pr-4 py-3 bg-gray-100 border-2 rounded-lg transition-colors ${errors.email ? 'border-red-500' : 'border-transparent'
                                            } focus:outline-none focus:border-primary-dark`}
                                    />
                                </div>
                                {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>}
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">
                                    Senha
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type={showSenha ? 'text' : 'password'}
                                        placeholder="••••••••"
                                        {...register('password', { required: 'Senha é obrigatória' })}
                                        className={`w-full pl-12 pr-12 py-3 bg-gray-100 border-2 rounded-lg transition-colors ${errors.password ? 'border-red-500' : 'border-transparent'
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
                                {errors.password && <p className="text-red-600 text-xs mt-1">{errors.password.message}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-primary-dark hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2 mt-8"
                            >
                                {loading ? (
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                ) : (
                                    <>Entrar <span className="text-lg">→</span></>
                                )}
                            </button>
                        </form>

                        <p className="text-center text-gray-600 text-sm mt-6">
                            Não tem uma conta?{' '}
                            <a href="/register" className="text-primary-dark font-semibold hover:underline">
                                Criar Minha Conta
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
