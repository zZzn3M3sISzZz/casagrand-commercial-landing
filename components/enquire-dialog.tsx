"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useState,
  type FormEvent,
} from "react";
import { X } from "@phosphor-icons/react";
import { GoldButton } from "@/components/gold-button";
import { PROJECTS } from "@/lib/projects";

type EnquireContextValue = {
  open: boolean;
  openEnquire: (projectSlug?: string) => void;
  closeEnquire: () => void;
};

const EnquireContext = createContext<EnquireContextValue | null>(null);

export function useEnquire() {
  const ctx = useContext(EnquireContext);
  if (!ctx) throw new Error("useEnquire must be used within EnquireProvider");
  return ctx;
}

export function EnquireProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [projectSlug, setProjectSlug] = useState("");
  const openEnquire = useCallback((slug?: string) => {
    setProjectSlug(slug ?? "");
    setOpen(true);
  }, []);
  const closeEnquire = useCallback(() => setOpen(false), []);
  const value = useMemo(
    () => ({ open, openEnquire, closeEnquire }),
    [open, openEnquire, closeEnquire],
  );

  return (
    <EnquireContext.Provider value={value}>
      {children}
      <EnquireDialog projectSlug={projectSlug} />
    </EnquireContext.Provider>
  );
}

type FieldErrors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

function EnquireDialog({ projectSlug }: { projectSlug: string }) {
  const { open, closeEnquire } = useEnquire();
  const titleId = useId();
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    project: "",
    message: "",
  });

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeEnquire();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, closeEnquire]);

  useEffect(() => {
    if (open) {
      setStatus("idle");
      setErrors({});
      setForm((prev) => ({ ...prev, project: projectSlug }));
    }
  }, [open, projectSlug]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next: FieldErrors = {};
    if (!form.name.trim()) next.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Enter a valid email address.";
    }
    if (!/^[0-9+\-\s]{8,}$/.test(form.phone.trim())) {
      next.phone = "Enter a valid phone number.";
    }
    if (!form.message.trim()) next.message = "Tell us what you are looking for.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 500);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-dropdown flex items-end justify-center bg-black/50 p-4 sm:items-center"
      role="presentation"
      onClick={closeEnquire}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative w-full max-w-[560px] rounded-sm bg-canvas p-6 shadow-xl sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="absolute right-4 top-4 inline-flex size-11 items-center justify-center text-ink"
          onClick={closeEnquire}
          aria-label="Close enquiry form"
        >
          <X size={20} />
        </button>
        <h2 id={titleId} className="font-display text-3xl font-medium text-ink">
          Enquire Now
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Share a few details and our leasing team will help you find the right
          Casagrand commercial space.
        </p>

        {status === "success" ? (
          <p className="mt-8 text-base leading-relaxed text-ink" role="status">
            Thank you. We have received your enquiry and will be in touch shortly.
          </p>
        ) : (
          <form className="mt-6 flex flex-col gap-4" onSubmit={onSubmit} noValidate>
            <Field
              id="enquire-name"
              label="Full name"
              value={form.name}
              error={errors.name}
              onChange={(value) => setForm((prev) => ({ ...prev, name: value }))}
              autoComplete="name"
            />
            <Field
              id="enquire-email"
              label="Email"
              type="email"
              value={form.email}
              error={errors.email}
              onChange={(value) => setForm((prev) => ({ ...prev, email: value }))}
              autoComplete="email"
            />
            <Field
              id="enquire-phone"
              label="Phone"
              type="tel"
              value={form.phone}
              error={errors.phone}
              onChange={(value) => setForm((prev) => ({ ...prev, phone: value }))}
              autoComplete="tel"
            />
            <Field
              id="enquire-company"
              label="Company (optional)"
              value={form.company}
              onChange={(value) => setForm((prev) => ({ ...prev, company: value }))}
              autoComplete="organization"
            />
            <div className="flex flex-col gap-1.5">
              <label htmlFor="enquire-project" className="text-sm font-normal text-ink">
                Interested project
              </label>
              <select
                id="enquire-project"
                value={form.project}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, project: event.target.value }))
                }
                className="min-h-11 rounded-[2px] border border-line bg-canvas px-3 text-sm text-ink"
              >
                <option value="">Any / not sure yet</option>
                {PROJECTS.map((project) => (
                  <option key={project.slug} value={project.slug}>
                    {project.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="enquire-message" className="text-sm font-normal text-ink">
                Message
              </label>
              <textarea
                id="enquire-message"
                rows={4}
                value={form.message}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "enquire-message-error" : undefined}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, message: event.target.value }))
                }
                className="rounded-[2px] border border-line bg-canvas px-3 py-2 text-sm text-ink"
              />
              {errors.message ? (
                <p id="enquire-message-error" className="text-sm text-error" role="alert">
                  {errors.message}
                </p>
              ) : null}
            </div>
            <GoldButton type="submit" showArrow disabled={status === "submitting"}>
              {status === "submitting" ? "Sending…" : "Submit enquiry"}
            </GoldButton>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-normal text-ink">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-11 rounded-[2px] border border-line bg-canvas px-3 text-sm text-ink"
      />
      {error ? (
        <p id={`${id}-error`} className="text-sm text-error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
