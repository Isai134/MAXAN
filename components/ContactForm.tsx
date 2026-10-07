'use client';

import { LoaderCircle, Send } from 'lucide-react';
import { useState } from 'react';

type Status = 'idle' | 'sending' | 'success' | 'error';

export function ContactForm({ serviceRequest = false }: { serviceRequest?: boolean }) {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function submit(formData: FormData) {
    setStatus('sending');
    setMessage('');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      if (!response.ok) throw new Error('Request failed');
      setStatus('success');
      setMessage('Gracias. Recibimos tus datos y atenderemos tu solicitud a la brevedad.');
    } catch {
      setStatus('error');
      setMessage('No fue posible procesar el formulario. Escríbenos a informes@maxan.com.mx.');
    }
  }

  return (
    <form
      action={submit}
      className="border-y border-ink/15 py-8 sm:py-10"
      aria-label={serviceRequest ? 'Solicitud de servicio' : 'Formulario de contacto'}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nombre(s)" name="firstName" placeholder="Nombre(s)..." />
        <Field label="Apellidos" name="lastName" placeholder="Apellidos..." />
        <Field
          label="Correo electrónico"
          name="email"
          type="email"
          placeholder="correo@empresa.com"
        />
        <Field label="Teléfono" name="phone" type="tel" placeholder="722 000 0000" />
        <Field label="Ciudad" name="city" placeholder="Ciudad..." />
        <Field label="Estado" name="state" placeholder="Estado..." />
        <div className="sm:col-span-2">
          <Field label="Empresa" name="company" placeholder="Empresa..." />
        </div>
        {serviceRequest && (
          <label className="sm:col-span-2">
            <span className="mb-2 block font-mono text-xs uppercase tracking-[0.08em] text-muted">
              Servicio de interés
            </span>
            <select
              name="service"
              required
              className="min-h-12 w-full border border-ink/25 bg-elevated px-3 focus:border-ink"
            >
              <option value="">Selecciona una opción</option>
              <option>Distintivo NMX-R-025-SCFI-2015</option>
              <option>Sistema de gestión ISO 9001</option>
              <option>Sistema de gestión ISO 14001</option>
              <option>Sistema de gestión ISO 45001</option>
              <option>Sistema de gestión ISO 22001</option>
              <option>Sistema de gestión ISO 37001</option>
              <option>Sistema de gestión ISO 21001</option>
              <option>Unidad de inspección</option>
              <option>Capacitación</option>
              <option>Curso</option>
              <option>Otro</option>
            </select>
          </label>
        )}
        <label className="sm:col-span-2">
          <span className="mb-2 block font-mono text-xs uppercase tracking-[0.08em] text-muted">
            Mensaje
          </span>
          <textarea
            name="message"
            required
            rows={6}
            placeholder="Cuéntanos qué necesitas..."
            className="w-full border border-ink/25 bg-elevated px-3 py-3 focus:border-ink"
          />
        </label>
      </div>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-lg text-xs leading-5 text-muted">
          Al enviar aceptas que MAXAN use tus datos únicamente para responder tu solicitud, conforme
          al Aviso de Privacidad.
        </p>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex min-h-12 items-center justify-center gap-2 bg-ink px-7 font-medium text-white transition hover:bg-maxan-800 disabled:opacity-60"
        >
          {status === 'sending' ? (
            <LoaderCircle className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
          Enviar
        </button>
      </div>
      <p
        className={`mt-5 text-sm ${status === 'error' ? 'text-danger' : 'text-maxan-700'}`}
        aria-live="polite"
      >
        {message}
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <label>
      <span className="mb-2 block font-mono text-xs uppercase tracking-[0.08em] text-muted">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="min-h-12 w-full border border-ink/25 bg-elevated px-3 focus:border-ink"
      />
    </label>
  );
}
