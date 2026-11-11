import { useState } from 'react';
import loginImg from '../images/loginimagem.jpg';
import { SafeArea } from '../components/safearea';

export default function Login_Screen() {
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleGoogleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
    }, 1200);
  };

  return (
    <SafeArea className="bg-[#F5EFEA] text-[#1C1A19] font-sans antialiased items-center justify-center p-4 sm:p-8 lg:p-12 selection:bg-[#EAE0DB] selection:text-[#1C1A19]">
      
      {/* Container Principal Ampliado no Desktop */}
      <div className="w-full max-w-md md:max-w-4xl lg:max-w-5xl bg-[#FBF8F5] rounded-[32px] sm:rounded-[40px] shadow-2xl shadow-[#1C1A19]/10 border border-[#EBE3DE] overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[580px] lg:min-h-[680px] transition-all">
        
        {/* LADO ESQUERDO: Banner Visual com Imagem Local */}
        <div className="md:col-span-6 lg:col-span-6 relative p-6 sm:p-10 lg:p-12 flex flex-col justify-between bg-gradient-to-br from-[#F5EFEA] via-[#EAE0DB] to-[#E2D4C9] overflow-hidden min-h-[340px] md:min-h-full">
          
          {/* Elementos Decorativos de Fundo */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#E5D7CE]/60 rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/70 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />
          
          {/* Header Superior - Painel Profissional */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/85 backdrop-blur-md border border-[#E2D6CE] text-xs tracking-wider uppercase font-semibold text-[#4A4441] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#C89B84] animate-pulse"></span>
              Painel Profissional
            </div>
          </div>

          {/* Moldura da Imagem do Salão */}
          <div className="relative z-10 my-6 flex-1 flex flex-col justify-center">
            <div className="relative mx-auto w-full rounded-[28px] overflow-hidden shadow-xl border-4 border-white/90 group">
              <img 
                src={loginImg} 
                alt="Gestão de Atendimentos Capilares" 
                className="w-full h-[220px] sm:h-[260px] lg:h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A19]/75 via-[#1C1A19]/20 to-transparent" />
              
              {/* Texto Sobreposto na Imagem */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[11px] uppercase tracking-widest text-[#E2D6CE] font-sans block mb-1">
                  Gestão Capilar Simplificada
                </span>
                <p className="font-serif italic text-base sm:text-lg lg:text-xl font-light text-[#F5EFEA] leading-tight">
                  "Organize seus horários e valores com elegância e facilidade."
                </p>
              </div>
            </div>
          </div>

          {/* Rodapé do Banner */}
          <div className="relative z-10 pt-4 border-t border-[#E5D7CE]/80 flex items-center justify-between text-xs text-[#7D736E]">
            <span className="font-serif italic text-sm text-[#4A4441] font-medium">Controle de Atendimentos</span>
            <span className="font-mono text-xs text-[#8C8078] tracking-wider uppercase">v1.0.0</span>
          </div>
        </div>

        {/* LADO DIREITO: Form de Autenticação para a Cabeleireira */}
        <div className="md:col-span-6 lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between bg-[#FBF8F5]">
          
          {/* Header da Marca */}
          <div className="flex items-center justify-between mb-6 md:mb-0">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#1C1A19] flex items-center justify-center text-white shadow-sm">
                <svg className="w-4 h-4 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <circle cx="6" cy="6" r="3" />
                  <circle cx="6" cy="18" r="3" />
                  <line x1="20" y1="4" x2="8.12" y2="15.88" />
                  <line x1="14.47" y1="14.48" x2="20" y2="20" />
                  <line x1="8.12" y1="8.12" x2="12" y2="12" />
                </svg>
              </div>
              <span className="font-serif text-xl tracking-wider font-semibold text-[#1C1A19]">
                AGENDA <span className="text-xs font-sans text-[#A37B65] font-light">BEAUTY</span>
              </span>
            </div>
          </div>

          {/* Conteúdo do Login */}
          <div className="my-auto py-4 sm:py-6">
            <div className="space-y-2 mb-6 text-left">
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#A37B65] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#A37B65]"></span>
                Área da Profissional
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl text-[#1C1A19] font-normal leading-tight">
                Olá, bem-vinda de volta.
              </h1>
              <p className="text-xs sm:text-sm lg:text-base text-[#6E635E] font-sans leading-relaxed">
                Acesse seu painel pessoal para gerenciar horários, tabelas de valores e organizar suas clientes.
              </p>
            </div>

            {/* Ação Principal: Login Google */}
            <div className="space-y-4">
              <button
                onClick={handleGoogleLogin}
                disabled={isLoading}
                className="w-full relative group overflow-hidden flex items-center justify-center gap-3 bg-white hover:bg-[#FAF6F3] text-[#1C1A19] font-medium py-4 px-6 rounded-2xl border border-[#E2D6CE] shadow-sm hover:shadow-md hover:border-[#C8B8AE] transition-all duration-300 active:scale-[0.99] disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#F5EFEA]/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-[#1C1A19] border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>

                    <span className="text-sm sm:text-base tracking-wide font-medium">
                      Entrar com Google
                    </span>

                    <svg className="w-5 h-5 text-[#A37B65] ml-auto group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-[#8C8078]">
                <svg className="w-4 h-4 text-[#34A853]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Autenticação rápida e segura via Google</span>
              </div>
            </div>

            {/* Divisória Decorativa */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#EAE0DB]"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#FBF8F5] px-3 text-[#9E9087] font-medium tracking-widest text-[10px]">
                  Recursos da sua agenda
                </span>
              </div>
            </div>

            {/* Micro Cards de Funcionalidades (3 itens) */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <div className="p-3 rounded-2xl bg-[#F5EFEA]/60 border border-[#EBE3DE] flex flex-col justify-between">
                <div className="w-7 h-7 rounded-xl bg-[#EAE0DB] flex items-center justify-center text-[#8C644E] mb-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[11px] sm:text-xs font-semibold text-[#1C1A19]">Agenda Pessoal</h3>
                  <p className="text-[9px] sm:text-[10px] text-[#7D736E] leading-tight mt-0.5">Controle de horários</p>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-[#F5EFEA]/60 border border-[#EBE3DE] flex flex-col justify-between">
                <div className="w-7 h-7 rounded-xl bg-[#EAE0DB] flex items-center justify-center text-[#8C644E] mb-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[11px] sm:text-xs font-semibold text-[#1C1A19]">Ficha de Clientes</h3>
                  <p className="text-[9px] sm:text-[10px] text-[#7D736E] leading-tight mt-0.5">Histórico e dados</p>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-[#F5EFEA]/60 border border-[#EBE3DE] flex flex-col justify-between">
                <div className="w-7 h-7 rounded-xl bg-[#EAE0DB] flex items-center justify-center text-[#8C644E] mb-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[11px] sm:text-xs font-semibold text-[#1C1A19]">Tabela de Valores</h3>
                  <p className="text-[9px] sm:text-[10px] text-[#7D736E] leading-tight mt-0.5">Cobranças personalizadas</p>
                </div>
              </div>
            </div>

          </div>

          {/* Rodapé de Créditos FN Labs */}
          <div className="mt-6 pt-5 border-t border-[#EAE0DB] text-center space-y-1.5">
            <p className="text-xs text-[#5C534E] font-medium">
              Desenvolvido por <span className="font-bold text-[#1C1A19]">FN Labs</span>
            </p>
            <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#8C8078]">
              <svg className="w-3.5 h-3.5 text-[#01875F]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a2.37 2.37 0 0 1-.61-1.637V3.451c0-.62.228-1.205.61-1.637zM15.206 13.414l2.766 2.766-12.87 7.43a2.38 2.38 0 0 1-1.077.301l11.181-10.497zm0-2.828L5.1-1.096a2.38 2.38 0 0 1 1.077.301l12.87 7.43-2.841 2.851zM16.62 12l3.418-1.973a2.392 2.392 0 0 1 0 3.946L16.62 12z" />
              </svg>
              <span>Disponível na Google Play Store</span>
            </div>
          </div>

        </div>

      </div>

      {/* Toast de Notificação */}
      {showToast && (
        <div className="fixed bottom-6 left-6 right-6 sm:left-auto sm:right-8 z-50 bg-[#1C1A19] text-white px-5 py-4 rounded-2xl shadow-2xl flex items-center gap-3.5 border border-[#383330] animate-bounce max-w-md mx-auto sm:mx-0">
          <svg className="w-6 h-6 text-[#34A853] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="text-xs sm:text-sm">
            <p className="font-semibold text-[#F5EFEA]">Autenticado com sucesso!</p>
            <p className="text-[#A39890]">Abrindo sua agenda FN Labs...</p>
          </div>
        </div>
      )}

    </SafeArea>
  );
}