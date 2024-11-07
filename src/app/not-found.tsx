"use client";

import Error from "next/error";
import Link from "next/link";

const styles = {
  a: {
    display: "inline-block",
    padding: "1rem 0 0 1rem",
    color: "white",
    textDecoration: "underline",
    textUnderlineOffset: "0.4em",
  },
};

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <Link
          style={styles.a}
          href="/"
        >
          Home
        </Link>
        <Error statusCode={404} />
      </body>
    </html>
  );
}
