export type CrearEventoRequest = {
    nombre_evento?: string
    organizador?: {
        nombre: string,
        email: string,
    }
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

export function mapearEvento(form: FormData): CrearEventoRequest {
    const nombreEvento: string = form.get('nombre_evento')?.toString() ?? "";
    const nombreOrganizador = form.get('nombre_organizador')?.toString() ?? "";
    const emailOrganizador = form.get('email_organizador')?.toString() ?? "";
    return {
        nombre_evento: nombreEvento,
        organizador: {
            nombre: nombreOrganizador,
            email: emailOrganizador
        }
    }
}