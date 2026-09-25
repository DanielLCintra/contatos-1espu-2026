import React from 'react'

const Statistics = ({ stats }) => {
    return (
        <div className="bg-white shadow rounded p-4">
            <h3 className="text-lg font-semibold mb-3">Estatísticas</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{stats?.total}</div>
                    <div className="text-sm text-gray-600">Total</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{stats?.comEmail}</div>
                    <div className="text-sm text-gray-600">Com Email</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{stats?.comTelefone}</div>
                    <div className="text-sm text-gray-600">Com Telefone</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{stats?.semEmail}</div>
                    <div className="text-sm text-gray-600">Sem Email</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600">{stats?.semTelefone}</div>
                    <div className="text-sm text-gray-600">Sem Telefone</div>
                </div>
            </div>
        </div>
    )
}

export default Statistics