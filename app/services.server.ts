export type CrearEventoRequest = {
    nombre_evento?: string
}

export type EventoCreadoResponse = {
    id: string
};

const URL_BASE: string = 'http://localhost:8080/api/v1/';

export async function crearEvento(request: CrearEventoRequest): Promise<EventoCreadoResponse> {
    return fetch(URL_BASE + 'eventos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request)
    })
    .then(response => response.json())
    .then(json => json);
}