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
            <span className="mb-2 block text-sm font-semibold">Servicio de interés</span>
            <select
              name="service"
              required
              className="min-h-12 w-full border-b border-ink/15 bg-transparent px-1 focus:border-maxan-500 focus:outline-none"
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
          <span className="mb-2 block text-sm font-semibold">Mensaje</span>
          <textarea
            name="message"
            required
            rows={6}
            placeholder="Cuéntanos qué necesitas..."
            className="w-full border-y border-ink/15 bg-transparent px-1 py-3 focus:border-maxan-500 focus:outline-none"
          />
        </label>
      </div>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-lg text-xs leading-5 text-slate-500">
          Al enviar aceptas que MAXAN use tus datos únicamente para responder tu solicitud, conforme
          al Aviso de Privacidad.
        </p>
        <button
          disabled={status === 'sending'}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-7 font-semibold text-white transition hover:bg-maxan-700 disabled:opacity-60"
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
        className={`mt-5 text-sm ${status === 'error' ? 'text-red-700' : 'text-maxan-700'}`}
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
      <span className="mb-2 block text-sm font-semibold">{label}</span>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="min-h-12 w-full border-b border-ink/15 bg-transparent px-1 focus:border-maxan-500 focus:outline-none"
      />
    </label>
  );
}
