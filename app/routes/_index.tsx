import type { ActionFunctionArgs } from "@vercel/remix";

import type { EventoCreadoResponse } from "~/services.server";

import { Form, redirect } from "@remix-run/react";
import { crearEvento } from "~/services.server";

export const action = async ({ params, request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const crearEventoRequest = Object.fromEntries(formData);
  const evento: EventoCreadoResponse = await crearEvento(crearEventoRequest);
  return redirect(`/eventos/${evento.id}`);
};

export default function IndexRoute() {
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
