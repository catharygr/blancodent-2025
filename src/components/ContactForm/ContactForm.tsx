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
      setForm({ name: "", email: "", phone: "", message: "" });
    } else {
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
          {t("name")}: *
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
        />
        <span className={styles.description}>{t("nameDesc")}</span>
        <label
          className={styles.label}
          htmlFor="email"
        >
          {t("email")}: *
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
        />
        <span className={styles.description}>{t("emailDesc")}</span>
        <label
          className={styles.label}
          htmlFor="phone"
        >
          {t("phone")}:
        </label>
        <input
          // required
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className={styles.input}
          type="text"
          id="phone"
          name="Phone"
          placeholder={t("phonePh")}
        />
        <span className={styles.description}>{t("phoneDesc")}</span>
        <label
          className={styles.label}
          htmlFor="message"
        >
          {t("message")}:
        </label>
        <input
          type="text"
          name="_honey"
          style={{ display: "none" }}
        ></input>
        <textarea
          // required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={styles.input}
          name="Mensaje"
          id="message"
          cols={30}
          rows={6}
          placeholder={t("messagePh")}
        />
        <span className={styles.description}>{t("messageDesc")}</span>
        <p className={styles.formMessage}>{status}</p>
        <button className={`btn ${styles.button}`}>{t("btn")}</button>
      </form>
    </section>
  );
}
