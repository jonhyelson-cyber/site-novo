
import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const EarningCalculator: React.FC = () => {
  const [clients, setClients] = useState(10);
  const [avgTicket, setAvgTicket] = useState(20000); 
  const [teamSize, setTeamSize] = useState(0);

  const chartData = useMemo(() => {
    const directCommissionRate = 0.0035 * 1.2; 
    const directEarnings = clients * avgTicket * directCommissionRate;
    const teamCommissionBonus = teamSize * (directEarnings * 0.05);
    const totalMonthlyEarnings = directEarnings + teamCommissionBonus;
    
    return [
      { month: 'Mês 1', earnings: totalMonthlyEarnings },
      { month: 'Mês 3', earnings: totalMonthlyEarnings * 1.8 },
      { month: 'Mês 6', earnings: totalMonthlyEarnings * 4 },
      { month: 'Mês 12', earnings: totalMonthlyEarnings * 12 },
    ];
  }, [clients, avgTicket, teamSize]);

  return (
    <section id="calculadora" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#001B3D]">Simule seu <span className="text-[#00A89E]">Crescimento</span></h2>
          <p className="mt-4 text-xl text-gray-600">O único modelo de negócio que une recorrência real com bônus de liderança.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100">
            <div className="space-y-10">
              <div>
                <label className="flex justify-between text-xs font-black text-[#001B3D] uppercase tracking-widest mb-4">
                  <span>Minha Carteira Direta</span>
                  <span className="text-[#00A89E]">{clients} estabelecimentos</span>
                </label>
                <input 
                  type="range" min="1" max="100" value={clients} 
                  onChange={(e) => setClients(parseInt(e.target.value))}
                  className="w-full h-3 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#00A89E]"
                />
              </div>

              <div>
                <label className="flex justify-between text-xs font-black text-[#001B3D] uppercase tracking-widest mb-4">
                  <span>TPV Médio p/ Cliente</span>
                  <span className="text-[#00A89E]">R$ {avgTicket.toLocaleString('pt-BR')}</span>
                </label>
                <input 
                  type="range" min="5000" max="100000" step="5000" value={avgTicket} 
                  onChange={(e) => setAvgTicket(parseInt(e.target.value))}
                  className="w-full h-3 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#00A89E]"
                />
              </div>

              <div className="pt-6 border-t border-gray-100">
                <label className="flex justify-between text-xs font-black text-[#001B3D] uppercase tracking-widest mb-4">
                  <span>Liderança de Equipe</span>
                  <span className="text-[#00A89E]">{teamSize} representantes</span>
                </label>
                <input 
                  type="range" min="0" max="50" value={teamSize} 
                  onChange={(e) => setTeamSize(parseInt(e.target.value))}
                  className="w-full h-3 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#FFCC00]"
                />
              </div>

              <div className="bg-[#001B3D] p-8 rounded-[2rem] text-white shadow-2xl shadow-[#001B3D]/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/></svg>
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00A89E] mb-2">Estimativa de Renda Mensal</p>
                <h3 className="text-4xl font-black">
                  R$ {(chartData[3].earnings).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </h3>
                <p className="text-[9px] text-gray-400 mt-4 leading-tight uppercase font-bold">
                  Inclui Recorrência Direta + Bônus Equipe (5%) + Mix de Produtos COBAN.
                </p>
              </div>
            </div>
          </div>

          <div className="h-[400px] w-full flex flex-col justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12, fontWeight: 'bold'}} />
                <Tooltip 
                  cursor={{fill: '#f3f4f6'}}
                  contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontWeight: 'bold'}}
                />
                <Bar dataKey="earnings" radius={[12, 12, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 3 ? '#00A89E' : '#001B3D'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarningCalculator;
