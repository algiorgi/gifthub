import type { ActionFunctionArgs } from "@vercel/remix";

import type { EventoCreadoResponse } from "~/services.server";

import { Form, redirect, useFetcher } from "@remix-run/react";
import { crearEvento, mapearEvento } from "~/services.server";
import { useState } from "react";

interface Participante {
  nombre: string,
  email: string,
}

const PARTICIPANTE_VACIO : Participante = {nombre: "", email: ""};

export const action = async ({ params, request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const evento: EventoCreadoResponse = await crearEvento(
    mapearEvento(formData)
  );
  return redirect(`/eventos/${evento.id}`);
};

function AgregarParticipante({onAgregarParticipante}: {onAgregarParticipante: (p: Participante) => void}) {
  const [participante, setParticipante] = useState<Participante>(PARTICIPANTE_VACIO);

  function handleAgregarParticipante() {
    setParticipante(PARTICIPANTE_VACIO);
    onAgregarParticipante(participante);
  }

  return (
    <>
      <label className="block mb-2 text-sm text-gray-600">Participantes</label>
      <div className="grid grid-flow-col gap-4 justify-stretch">

          <input
            value={participante.nombre}
            onChange={(e) => setParticipante({...participante, nombre: e.target.value})}
            data-testid="input-nombre-participante"
            type="text"
            placeholder="ej. Homero"
            className="px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
          />
          <input
            value={participante.email}
            onChange={(e) => setParticipante({...participante, email: e.target.value})}
            data-testid="input-email-participante"
            type="email"
            placeholder="ej. homero@familiaadams.com"
            className="px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
          />
          <button
            type="button"
            className="w-full px-2 py-4 text-white bg-green-500 rounded-md focus:bg-600-600 focus:outline-none"
            onClick={() => handleAgregarParticipante()}
          >
            Agregar
          </button>
      </div>
    </>
  );
}

export default function IndexRoute() {
  const [participantes, setParticipantes] = useState<Array<Participante>>([])

  function onAgregarParticipante(participante: Participante): void {
    setParticipantes([...participantes, participante])
  }

  const listaDeParticipantes =
  <div className="mb-6">
    <ul role="list" className="p-1 divide-y divide-slate-200">
      {participantes.map((participante: Participante, indice: number ) => (
        <li key={participante.email} className="flex py-4 first:pt-0 last:pb-0">
          <input type="hidden" name={`participante_nombre`} value={participante.nombre}></input>
          <input type="hidden" name={`participante_email`} value={participante.email}></input>
          <span className="text-base font-medium text-slate-600">{participante.nombre} ({participante.email})</span>
        </li>
      ))
      }
    </ul>
  </div>


  return (
    <div className="container mx-auto">
      <div className="max-w-xl mx-auto my-10 bg-white rounded-md shadow-sm">
        <div className="text-center">
          <h1 className="my-3 text-3xl font-semibold text-gray-700">
            ¡Crea tu evento!
          </h1>
          <p className="text-gray-400">
            Elegí un nombre, agrega los participantes, fija un monto y ¡listo!
          </p>
        </div>
        <div className="mt-2">
          <Form id="crear-evento-form" method="POST">
            <div className="mb-6">
              <label className="block mb-2 text-sm text-gray-600">Nombre</label>
              <input
                data-testid="input-nombre-evento"
                type="text"
                name="nombre_evento"
                placeholder="ej. Cumpleaños tio Cosa"
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm text-gray-600">
                Organizador
              </label>
              <div className="grid grid-flow-col gap-4 justify-stretch">
                <input
                  data-testid="input-nombre-organizador"
                  type="text"
                  name="nombre_organizador"
                  placeholder="ej. Tio Lucas"
                  className="px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
                <input
                  data-testid="input-email-organizador"
                  type="email"
                  name="email_organizador"
                  placeholder="ej. tiolucas@familiaadams.com"
                  className="px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
              </div>
            </div>
            <div className="mb-6">
              <AgregarParticipante onAgregarParticipante={onAgregarParticipante}/>
            </div>
            { listaDeParticipantes }
            <div className="mb-6">
              <button
                type="submit"
                className="w-full px-2 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
              >
                Crear
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
