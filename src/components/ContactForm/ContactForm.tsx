"use client";
import { useTranslations } from "next-intl";
import type { SubmitEvent } from "react";
import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function Formulario() {
  const [status, setStatus] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    pusiKaru: "",
  });
  const t = useTranslations("ContactForm");

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    // THIS IS NEW mailjet SHIT, HOPE IT WORKS NOW - IT DOES...
    e.preventDefault();
    setStatus(t("handleSubmit.sending"));

    const res = await fetch("/api/mailjet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus(t("handleSubmit.success"));
      setForm({ name: "", email: "", phone: "", message: "", pusiKaru: "" });
    } else {
      // To handle error from MailjetAPI, if not only HTML required is used
      // const data = await res.json();
      // setStatus(data.error || t("handleSubmit.error"));
      setStatus(t("handleSubmit.error"));
    }
  };

  return (
    <section
      id="contact-form"
      className={styles.container}
    >
      <form
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <label
          className={styles.label}
          htmlFor="name"
        >
          {t("name")}:
        </label>
        <input
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={styles.input}
          type="text"
          name="Nombre"
          id="name"
          placeholder={t("namePh")}
          inputMode="text"
          autoComplete="name"
          aria-describedby="describedby-name"
        />
        <span
          id="describedby-name"
          className={styles.description}
          aria-hidden="true"
        >
          {t("nameDesc")}
        </span>
        <label
          className={styles.label}
          htmlFor="email"
        >
          {t("email")}:
        </label>
        <input
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={styles.input}
          type="email"
          id="email"
          name="Email"
          placeholder={t("emailPh")}
          inputMode="email"
          autoComplete="email"
          aria-describedby="describedby-email"
        />
        <span
          id="describedby-email"
          className={styles.description}
          aria-hidden="true"
        >
          {t("emailDesc")}
        </span>
        <label
          className={styles.label}
          htmlFor="phone"
        >
          {t("phone")}:
        </label>
        <input
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className={styles.input}
          type="text"
          id="phone"
          name="Phone"
          placeholder={t("phonePh")}
          inputMode="tel"
          autoComplete="tel"
          aria-describedby="describedby-phone"
        />
        <span
          id="describedby-phone"
          className={styles.description}
          aria-hidden="true"
        >
          {t("phoneDesc")}
        </span>
        {/* kontrola govana koje stizu i salju */}
        <label
          aria-hidden="true"
          style={{ display: "none" }}
          htmlFor="website"
        >
          Website
        </label>
        <input
          value={form.pusiKaru}
          onChange={(e) => setForm({ ...form, pusiKaru: e.target.value })}
          id="website"
          type="text"
          name="Website"
          style={{ display: "none" }}
          aria-hidden="true"
          tabIndex={-1}
        />
        {/* Kraj govana */}
        <label
          className={styles.label}
          htmlFor="message"
        >
          {t("message")}:
        </label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={styles.input}
          name="Mensaje"
          id="message"
          cols={30}
          rows={6}
          placeholder={t("messagePh")}
          inputMode="text"
          aria-describedby="describedby-textarea"
        />
        <span
          id="describedby-textarea"
          className={styles.description}
          aria-hidden="true"
        >
          {t("messageDesc")}
        </span>
        <p
          className={styles.formMessage}
          role="status"
        >
          {status}
        </p>
        <button className={`btn ${styles.button}`}>{t("btn")}</button>
      </form>
    </section>
  );
}
