"use client";

import logo from "public/assets/Icons/images/logo-secret-santa.png";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <>
        Bem vindo
        <Image width={600} alt="logo" src={logo} />{" "}
      </>
      {/* <Button onClick={addUser}>Add User</Button> */}
    </main>
  );
}
