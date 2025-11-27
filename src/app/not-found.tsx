"use client";

import Error from "next/error";
import Link from "next/link";

const styles = {
  a: {
    display: "inline-block",
    color: "red",
    textDecoration: "underline",
    textUnderlineOffset: "0.4rem",
    padding: "1rem 0 0 1rem",
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
          {"<-- HOME"}
        </Link>
        <Error statusCode={404} />
      </body>
    </html>
  );
}
