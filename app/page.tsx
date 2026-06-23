"use client";

import Image from "next/image";
import ThemeToggle from "./theme-toggle";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  Mail,
  Send,
  User,
  MessageSquare,
} from "lucide-react";

import {
  Code2,
  Database,
  GraduationCap,
  MapPin,
  Briefcase,
  Users
} from "lucide-react";

import {
  FaJava,
  FaReact,
  FaGithub,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiTailwindcss,
  SiBootstrap,
  SiNextdotjs,
} from "react-icons/si";
export default function Home() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_8l986q9",
        "template_j734vij",
        form.current,
        "7Qfc6nwmEk_b8dqiz"
      )
      .then(
        () => {
          alert("Mensaje enviado correctamente");
          form.current?.reset();
        },
        (error) => {
          alert("Error al enviar el mensaje");
          console.error(error);
        }
      );
  };
  return (
    <main className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-zinc-300 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

          <div className="flex items-center justify-center gap-3">

            <h3 className="text-xl font-bold">
              Alexis Marulanda
            </h3>
          </div>

          <div className="flex items-center gap-6 text-sm">

            <a href="#sobre-mi" className="hover:text-gray-600 dark:text-gray-400">
              Sobre mí
            </a>

            <a href="#tecnologias" className="hover:text-gray-600 dark:text-gray-400">
              Tecnologías
            </a>

            <a href="#proyectos" className="hover:text-gray-600 dark:text-gray-400">
              Proyectos
            </a>

            <a href="#experiencia" className="hover:text-gray-600 dark:text-gray-400">
              Experiencia
            </a>

            <a href="#certificaciones" className="hover:text-gray-600 dark:text-gray-400">
              Certificaciones
            </a>

            <a href="#contacto" className="hover:text-gray-600 dark:text-gray-400">
              Contacto
            </a>

            <ThemeToggle />

          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex min-h-screen items-center justify-center px-6">

        <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 md:flex-row">

          {/* TEXTO */}
          <div className="flex-1 text-center md:text-left">

            <h1 className="text-5xl font-bold md:text-7xl">
              Alexis Marulanda
            </h1>

            <h2 className="mt-4 text-2xl text-blue-500 font-semibold">
              Desarrollador Full Stack | Java • Spring Boot • MySQL
            </h2>

            <p className="mt-6 max-w-2xl text-lg text-gray-400">
              Tecnólogo en Análisis y Desarrollo de Software con experiencia
              en desarrollo web, bases de datos y aplicaciones empresariales.
              He participado en proyectos académicos, empresariales y
              personales utilizando tecnologías modernas para construir
              soluciones eficientes y escalables.
            </p>

            {/* DATOS */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-gray-400 md:justify-start">

              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-blue-500" />
                <span>Cundinamarca, Colombia</span>
              </div>

              <div className="flex items-center gap-2">
                <GraduationCap size={18} className="text-blue-500" />
                <span>Tecnólogo ADSO - SENA</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                </span>

                <span>Disponible para trabajar</span>
              </div>

            </div>

            {/* BOTONES */}
            <div className="mt-10 flex flex-wrap justify-center gap-4 md:justify-start">

              <div className="mt-10 flex flex-wrap justify-center gap-4 md:justify-start">

                <a
                  href="#proyectos"
                  className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Ver Proyectos
                </a>

                <a
                  href="/CV_Alexis_Marulanda_Java_Backend.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Descargar CV
                </a>

                <a
                  href="#contacto"
                  className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Contactarme
                </a>

              </div>

            </div>

          </div>

          {/* FOTO */}
          <div className="flex justify-center">

            <img
              src="/foto-perfil.png"
              alt="Alexis Marulanda"
              className="h-72 w-72 rounded-full border-4 border-blue-500 object-cover shadow-2xl md:h-96 md:w-96"
            />

          </div>

        </div>

      </section>

      {/* SOBRE MI */}
      <section id="sobre-mi" className="mx-auto max-w-6xl px-6 py-24">

        <h2 className="mb-4 text-center text-4xl font-bold">
          Sobre mí
        </h2>

        <p className="mx-auto mb-12 max-w-3xl text-center text-gray-500">
          Mi enfoque se basa en construir soluciones de software funcionales,
          mantenibles y orientadas a resolver necesidades reales, combinando
          aprendizaje continuo, disciplina y buenas prácticas de desarrollo.
        </p>

        {/* TARJETAS */}
        <div className="grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl border border-zinc-300 p-6 shadow-sm dark:border-zinc-700">

            <Code2 className="mb-4 text-blue-500" size={32} />

            <h3 className="text-xl font-bold">
              Desarrollo de Soluciones
            </h3>

            <p className="mt-3 text-gray-500">
              Desarrollo aplicaciones web enfocadas en resolver problemas reales,
              priorizando funcionalidad, escalabilidad y facilidad de mantenimiento.
            </p>

          </div>

          <div className="rounded-2xl border border-zinc-300 p-6 shadow-sm dark:border-zinc-700">

            <GraduationCap className="mb-4 text-blue-500" size={32} />

            <h3 className="text-xl font-bold">
              Aprendizaje Continuo
            </h3>

            <p className="mt-3 text-gray-500">
              Me mantengo en constante formación para fortalecer mis habilidades
              técnicas y adaptarme a nuevas herramientas y tecnologías.
            </p>

          </div>

          <div className="rounded-2xl border border-zinc-300 p-6 shadow-sm dark:border-zinc-700">

            <Database className="mb-4 text-blue-500" size={32} />

            <h3 className="text-xl font-bold">
              Pensamiento Analítico
            </h3>

            <p className="mt-3 text-gray-500">
              Disfruto analizar problemas, identificar oportunidades de mejora
              y diseñar soluciones estructuradas y eficientes.
            </p>

          </div>

          <div className="rounded-2xl border border-zinc-300 p-6 shadow-sm dark:border-zinc-700">

            <Users className="mb-4 text-blue-500" size={32} />

            <h3 className="text-xl font-bold">
              Trabajo Colaborativo
            </h3>

            <p className="mt-3 text-gray-500">
              Valoro la comunicación efectiva, la colaboración y el intercambio
              de conocimiento para alcanzar objetivos comunes.
            </p>

          </div>

        </div>

        {/* ESTADÍSTICAS */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">

          <div className="rounded-2xl border border-zinc-300 p-6 text-center dark:border-zinc-700">

            <h3 className="text-4xl font-bold text-blue-500">
              4+
            </h3>

            <p className="mt-2 text-gray-500">
              Proyectos desarrollados
            </p>

          </div>

          <div className="rounded-2xl border border-zinc-300 p-6 text-center dark:border-zinc-700">

            <h3 className="text-4xl font-bold text-blue-500">
              10+
            </h3>

            <p className="mt-2 text-gray-500">
              Tecnologías utilizadas
            </p>

          </div>

          <div className="rounded-2xl border border-zinc-300 p-6 text-center dark:border-zinc-700">

            <h3 className="text-4xl font-bold text-blue-500">
              1
            </h3>

            <p className="mt-2 text-gray-500">
              Experiencia empresarial
            </p>

          </div>

        </div>

      </section>

      {/* TECNOLOGIAS */}
      <section id="tecnologias" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Tecnologías
        </h2>

        <div className="space-y-10">

          {/* FRONTEND */}
          <div>
            <h3 className="mb-4 text-2xl font-semibold">
              Frontend
            </h3>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

              <div className="rounded-xl border p-5 text-center transition-all hover:scale-105 hover:shadow-lg">
                <FaHtml5 className="mx-auto text-5xl" />
                <p className="mt-3 font-semibold">HTML5</p>
              </div>

              <div className="rounded-xl border p-5 text-center transition-all hover:scale-105 hover:shadow-lg">
                <FaCss3Alt className="mx-auto text-5xl" />
                <p className="mt-3 font-semibold">CSS3</p>
              </div>

              <div className="rounded-xl border p-5 text-center transition-all hover:scale-105 hover:shadow-lg">
                <SiTailwindcss className="mx-auto text-5xl" />
                <p className="mt-3 font-semibold">Tailwind CSS</p>
              </div>

              <div className="rounded-xl border p-5 text-center transition-all hover:scale-105 hover:shadow-lg">
                <SiBootstrap className="mx-auto text-5xl" />
                <p className="mt-3 font-semibold">Bootstrap</p>
              </div>

            </div>
          </div>

          {/* BACKEND */}
          <div>
            <h3 className="mb-4 text-2xl font-semibold">
              Backend
            </h3>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

              <div className="rounded-xl border p-5 text-center transition-all hover:scale-105 hover:shadow-lg">
                <FaJava className="mx-auto text-5xl" />
                <p className="mt-3 font-semibold">Java</p>
              </div>

              <div className="rounded-xl border p-5 text-center transition-all hover:scale-105 hover:shadow-lg">
                <SiSpringboot className="mx-auto text-5xl" />
                <p className="mt-3 font-semibold">Spring Boot</p>
              </div>

              <div className="rounded-xl border p-5 text-center transition-all hover:scale-105 hover:shadow-lg">
                <SiPython className="mx-auto text-5xl" />
                <p className="mt-3 font-semibold">Python</p>
              </div>

            </div>
          </div>

          {/* BASES DE DATOS */}
          <div>
            <h3 className="mb-4 text-2xl font-semibold">
              Bases de Datos
            </h3>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

              <div className="rounded-xl border p-5 text-center transition-all hover:scale-105 hover:shadow-lg">
                <SiMysql className="mx-auto text-5xl" />
                <p className="mt-3 font-semibold">MySQL</p>
              </div>

              <div className="rounded-xl border p-5 text-center transition-all hover:scale-105 hover:shadow-lg">
                <SiMongodb className="mx-auto text-5xl" />
                <p className="mt-3 font-semibold">MongoDB</p>
              </div>

              <div className="rounded-xl border p-5 text-center transition-all hover:scale-105 hover:shadow-lg">
                <SiFirebase className="mx-auto text-5xl" />
                <p className="mt-3 font-semibold">Firebase</p>
              </div>

            </div>
          </div>

          {/* HERRAMIENTAS */}
          <div>
            <h3 className="mb-4 text-2xl font-semibold">
              Herramientas
            </h3>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

              <div className="rounded-xl border p-5 text-center transition-all hover:scale-105 hover:shadow-lg">
                <FaGitAlt className="mx-auto text-5xl" />
                <p className="mt-3 font-semibold">Git</p>
              </div>

              <div className="rounded-xl border p-5 text-center transition-all hover:scale-105 hover:shadow-lg">
                <FaGithub className="mx-auto text-5xl" />
                <p className="mt-3 font-semibold">GitHub</p>
              </div>

            </div>
          </div>

          {/* EN FORMACION */}
          <div>
            <h3 className="mb-4 text-2xl font-semibold">
              En Formación
            </h3>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

              <div className="rounded-xl border p-5 text-center transition-all hover:scale-105 hover:shadow-lg">
                <FaReact className="mx-auto text-5xl" />
                <p className="mt-3 font-semibold">React</p>
              </div>

              <div className="rounded-xl border p-5 text-center transition-all hover:scale-105 hover:shadow-lg">
                <SiJavascript className="mx-auto text-5xl" />
                <p className="mt-3 font-semibold">JavaScript</p>
              </div>

              <div className="rounded-xl border p-5 text-center transition-all hover:scale-105 hover:shadow-lg">
                <SiTypescript className="mx-auto text-5xl" />
                <p className="mt-3 font-semibold">TypeScript</p>
              </div>

              <div className="rounded-xl border p-5 text-center transition-all hover:scale-105 hover:shadow-lg">
                <SiNextdotjs className="mx-auto text-5xl" />
                <p className="mt-3 font-semibold">Next.js</p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="mx-auto max-w-6xl px-6 py-24">

        <h2 className="mb-4 text-center text-4xl font-bold">
          Proyectos
        </h2>

        <p className="mb-12 text-center text-gray-500">
          Algunos de los proyectos que he desarrollado durante mi formación y práctica profesional.
        </p>

        <div className="grid gap-6 md:grid-cols-2">

          {/* INVENTARIO */}
          <div className="overflow-hidden rounded-xl border border-zinc-300 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-zinc-700">

            <Image
              src="/inventario.png"
              alt="Sistema Inventario"
              width={1200}
              height={700}
              className="h-48 w-full object-cover"
            />

            <div className="p-5">

              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                Proyecto Destacado
              </span>

              <h3 className="mt-3 text-xl font-bold">
                Sistema Inventario Minimercado
              </h3>

              <p className="mt-3 text-sm text-gray-500">
                Aplicación web para gestionar inventario, compras, ventas y proveedores de un minimercado.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded bg-zinc-200 px-2 py-1 text-xs dark:bg-zinc-800">Java</span>
                <span className="rounded bg-zinc-200 px-2 py-1 text-xs dark:bg-zinc-800">JSP</span>
                <span className="rounded bg-zinc-200 px-2 py-1 text-xs dark:bg-zinc-800">Servlets</span>
                <span className="rounded bg-zinc-200 px-2 py-1 text-xs dark:bg-zinc-800">MySQL</span>
                <span className="rounded bg-zinc-200 px-2 py-1 text-xs dark:bg-zinc-800">JDBC</span>
                <span className="rounded bg-zinc-200 px-2 py-1 text-xs dark:bg-zinc-800">MVC</span>
              </div>

              <div className="mt-5 flex gap-3">

                <a
                  href="https://github.com/marulanda10/InventarioMinimercado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700"
                >
                  <FaGithub size={18} />
                  Código
                </a>

                <a
                  href="https://youtu.be/bkO3_6lA538"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                >
                  <FaYoutube size={18} />
                  Ver Demo
                </a>

              </div>

            </div>
          </div>

          {/* SLEEP TRACKER */}
          <div className="overflow-hidden rounded-xl border border-zinc-300 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-zinc-700">

            <Image
              src="/sleeptracker.png"
              alt="Sleep Tracker"
              width={1200}
              height={700}
              className="h-48 w-full object-cover"
            />

            <div className="p-5">

              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                Proyecto Personal
              </span>

              <h3 className="mt-3 text-xl font-bold">
                Sleep Tracker
              </h3>

              <p className="mt-3 text-sm text-gray-500">
                Aplicación web para registrar y analizar hábitos de sueño utilizando Firebase.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded bg-zinc-200 px-2 py-1 text-xs dark:bg-zinc-800">React</span>
                <span className="rounded bg-zinc-200 px-2 py-1 text-xs dark:bg-zinc-800">TypeScript</span>
                <span className="rounded bg-zinc-200 px-2 py-1 text-xs dark:bg-zinc-800">Firebase</span>
                <span className="rounded bg-zinc-200 px-2 py-1 text-xs dark:bg-zinc-800">Tailwind</span>
              </div>

              <div className="mt-5 flex gap-3">

                <a
                  href="https://github.com/marulanda10/sleep-tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700"
                >
                  <FaGithub size={18} />
                  Código
                </a>

                <a
                  href="https://youtu.be/waJ3LDxQl2Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                >
                  <FaYoutube size={18} />
                  Ver Demo
                </a>

              </div>

            </div>
          </div>

          {/* CONCESIONARIO */}
          <div className="overflow-hidden rounded-xl border border-zinc-300 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-zinc-700">

            <Image
              src="/concesionario.png"
              alt="Sistema Concesionario"
              width={1200}
              height={700}
              className="h-48 w-full object-cover"
            />

            <div className="p-5">

              <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                Proyecto Académico
              </span>

              <h3 className="mt-3 text-xl font-bold">
                Sistema Concesionario
              </h3>

              <p className="mt-3 text-sm text-gray-500">
                CRUD para la gestión de vehículos desarrollado con Java, Swing y JPA.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded bg-zinc-200 px-2 py-1 text-xs dark:bg-zinc-800">Java</span>
                <span className="rounded bg-zinc-200 px-2 py-1 text-xs dark:bg-zinc-800">JPA</span>
                <span className="rounded bg-zinc-200 px-2 py-1 text-xs dark:bg-zinc-800">MySQL</span>
                <span className="rounded bg-zinc-200 px-2 py-1 text-xs dark:bg-zinc-800">Swing</span>
                <span className="rounded bg-zinc-200 px-2 py-1 text-xs dark:bg-zinc-800">MVC</span>
              </div>

              <div className="mt-5 flex gap-3">

                <a
                  href="https://github.com/marulanda10/concesionario-java-swing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700"
                >
                  <FaGithub size={18} />
                  Código
                </a>

                <a
                  href="https://youtu.be/CMj-0F_YfHU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                >
                  <FaYoutube size={18} />
                  Ver Demo
                </a>

              </div>

            </div>
          </div>

          {/* VETERINARIA */}
          <div className="overflow-hidden rounded-xl border border-zinc-300 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-zinc-700">

            <Image
              src="/veterinaria.png"
              alt="Sistema Veterinaria"
              width={1200}
              height={700}
              className="h-48 w-full object-cover"
            />

            <div className="p-5">

              <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
                Proyecto Académico
              </span>

              <h3 className="mt-3 text-xl font-bold">
                Sistema Veterinario
              </h3>

              <p className="mt-3 text-sm text-gray-500">
                Aplicación para registrar mascotas y propietarios en una peluquería canina.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded bg-zinc-200 px-2 py-1 text-xs dark:bg-zinc-800">Java</span>
                <span className="rounded bg-zinc-200 px-2 py-1 text-xs dark:bg-zinc-800">JPA</span>
                <span className="rounded bg-zinc-200 px-2 py-1 text-xs dark:bg-zinc-800">MySQL</span>
                <span className="rounded bg-zinc-200 px-2 py-1 text-xs dark:bg-zinc-800">Swing</span>
              </div>

              <div className="mt-5 flex gap-3">

                <a
                  href="https://github.com/marulanda10/peluqueria-canina-java"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700"
                >
                  <FaGithub size={18} />
                  Código
                </a>

                <a
                  href="https://youtu.be/ZWnYtyAAu38"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                >
                  <FaYoutube size={18} />
                  Ver Demo
                </a>

              </div>

            </div>
          </div>

        </div>

      </section>

      {/* EXPERIENCIA */}
      <section id="experiencia" className="mx-auto max-w-7xl px-6 py-24">

        <h2 className="mb-4 text-center text-5xl font-bold">
          Experiencia
        </h2>

        <p className="mx-auto mb-20 max-w-3xl text-center text-gray-500">
          Formación académica, experiencia empresarial y proyectos desarrollados
          durante mi crecimiento como desarrollador de software.
        </p>

        <div className="relative">

          {/* Línea central */}
          <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-zinc-300 dark:bg-zinc-700 md:block"></div>

          <div className="space-y-24">

            {/* BLUETAB */}
            <div className="relative grid items-center md:grid-cols-2">

              <div></div>

              <div className="pl-12">
                <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
                  Nov 2025 - May 2026
                </span>

                <h3 className="mt-4 text-3xl font-bold">
                  Bluetab Solutions
                </h3>

                <p className="font-medium text-blue-500">
                  Etapa Productiva
                </p>

                <div className="mt-4 rounded-2xl border border-zinc-300 p-6 shadow-sm dark:border-zinc-700">

                  <ul className="mt-4 list-disc space-y-2 pl-5 text-left text-gray-600 dark:text-gray-300">
                    <li>Apoyo en equipos encargados del desarrollo de sitios internos.</li>

                    <li>Participación en actividades relacionadas con el ciclo de vida de los datos.</li>

                    <li>Introducción al procesamiento de datos utilizando PySpark.</li>

                    <li>Aprendizaje de conceptos de gobierno y calidad de datos.</li>

                    <li>Trabajo colaborativo bajo procesos y metodologías empresariales.</li>
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded bg-zinc-200 px-3 py-1 text-xs dark:bg-zinc-800">
                      Python
                    </span>

                    <span className="rounded bg-zinc-200 px-3 py-1 text-xs dark:bg-zinc-800">
                      PySpark
                    </span>

                    <span className="rounded bg-zinc-200 px-3 py-1 text-xs dark:bg-zinc-800">
                      Gobierno de Datos
                    </span>

                    <span className="rounded bg-zinc-200 px-3 py-1 text-xs dark:bg-zinc-800">
                      Sites Corporativos
                    </span>
                  </div>

                </div>
              </div>

              <div className="absolute left-1/2 top-1/2 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-green-500 dark:border-zinc-900 md:block"></div>

            </div>

            {/* PROYECTOS PERSONALES */}
            <div className="relative grid items-center md:grid-cols-2">

              <div className="pr-12 text-right">

                <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
                  Jun 2025 - Actualidad
                </span>

                <h3 className="mt-4 text-3xl font-bold">
                  Proyectos Personales
                </h3>

                <p className="font-medium text-blue-500">
                  Desarrollo Full Stack
                </p>

                <div className="mt-4 rounded-2xl border border-zinc-300 p-6 shadow-sm dark:border-zinc-700">

                  <ul className="mt-4 list-disc space-y-2 pl-5 text-left text-gray-600 dark:text-gray-300">
                    <li>Desarrollo de la aplicación web Sleep Tracker.</li>
                    <li>Implementación de frontend moderno con React y TypeScript.</li>
                    <li>Integración de Firebase para almacenamiento de datos.</li>
                    <li>Construcción de proyectos backend utilizando Java y JPA.</li>
                    <li>Aplicación de buenas prácticas de programación y arquitectura de software.</li>
                  </ul>

                  <div className="mt-5 flex flex-wrap justify-end gap-2">
                    <span className="rounded bg-zinc-200 px-3 py-1 text-xs dark:bg-zinc-800">
                      React
                    </span>

                    <span className="rounded bg-zinc-200 px-3 py-1 text-xs dark:bg-zinc-800">
                      TypeScript
                    </span>

                    <span className="rounded bg-zinc-200 px-3 py-1 text-xs dark:bg-zinc-800">
                      Firebase
                    </span>

                    <span className="rounded bg-zinc-200 px-3 py-1 text-xs dark:bg-zinc-800">
                      Spring Boot
                    </span>
                  </div>

                </div>
              </div>

              <div></div>

              <div className="absolute left-1/2 top-1/2 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-blue-500 dark:border-zinc-900 md:block"></div>

            </div>

            {/* SENA */}
            <div className="relative grid items-center md:grid-cols-2">

              <div></div>

              <div className="pl-12">

                <span className="rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-700">
                  Feb 2025 - Jun 2025
                </span>

                <h3 className="mt-4 text-3xl font-bold">
                  Proyecto Formativo SENA
                </h3>

                <p className="font-medium text-blue-500">
                  Sistema de Inventario Web
                </p>

                <div className="mt-4 rounded-2xl border border-zinc-300 p-6 shadow-sm dark:border-zinc-700">

                  <ul className="mt-4 list-disc space-y-2 pl-5 text-left text-gray-600 dark:text-gray-300">
                    <li>Desarrollo completo de aplicación web para gestión de inventario.</li>

                    <li>Implementación de módulos de productos, compras, ventas y proveedores.</li>

                    <li>Diseño y construcción de base de datos relacional en MySQL.</li>

                    <li>Aplicación del patrón MVC utilizando Java, JSP y Servlets.</li>

                    <li>Ejecución de pruebas funcionales y validación del sistema.</li>
                  </ul>


                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded bg-zinc-200 px-3 py-1 text-xs dark:bg-zinc-800">
                      Java
                    </span>

                    <span className="rounded bg-zinc-200 px-3 py-1 text-xs dark:bg-zinc-800">
                      JSP
                    </span>

                    <span className="rounded bg-zinc-200 px-3 py-1 text-xs dark:bg-zinc-800">
                      Servlets
                    </span>

                    <span className="rounded bg-zinc-200 px-3 py-1 text-xs dark:bg-zinc-800">
                      JDBC
                    </span>

                    <span className="rounded bg-zinc-200 px-3 py-1 text-xs dark:bg-zinc-800">
                      MySQL
                    </span>
                  </div>

                </div>
              </div>

              <div className="absolute left-1/2 top-1/2 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-orange-500 dark:border-zinc-900 md:block"></div>

            </div>

          </div>

        </div>

      </section>

      {/* CERTIFICACIONES */}
      <section id="certificaciones" className="mx-auto max-w-6xl px-6 py-24">

        <h2 className="mb-12 text-center text-4xl font-bold">
          Certificaciones
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          {/* MYSQL */}
          <div className="rounded-2xl border border-zinc-300 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-zinc-700">

            <Image
              src="/certificados/mysql.png"
              alt="Certificado MySQL"
              width={600}
              height={400}
              className="mb-4 h-40 w-full rounded-lg object-cover border border-zinc-300 dark:border-zinc-700"
            />

            <h3 className="text-xl font-bold">
              Introducción a las Bases de Datos Relacionales (MySQL)
            </h3>

            <p className="mt-2 text-sm text-blue-500">
              TodoCode Academy
            </p>

            <p className="mt-3 text-gray-500">
              10 de noviembre de 2024
            </p>

            <a
              href="/certificados/certificado-bd-relacionales-con-mysql-feh1f1dvmoyo.html"
              target="_blank"
              className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Ver certificado
            </a>
          </div>

          {/* HTML Y CSS */}
          <div className="rounded-2xl border border-zinc-300 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-zinc-700">

            <Image
              src="/certificados/html-css.png"
              alt="Certificado HTML y CSS"
              width={600}
              height={400}
              className="mb-4 h-40 w-full rounded-lg object-cover border border-zinc-300 dark:border-zinc-700"
            />

            <h3 className="text-xl font-bold">
              HTML y CSS desde CERO
            </h3>

            <p className="mt-2 text-sm text-blue-500">
              TodoCode Academy
            </p>

            <p className="mt-3 text-gray-500">
              29 de septiembre de 2024
            </p>

            <a
              href="/certificados/certificado-certificado-html-y-css-yeyanzdaeock.html"
              target="_blank"
              className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Ver certificado
            </a>
          </div>

          {/* GIT */}
          <div className="rounded-2xl border border-zinc-300 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-zinc-700">

            <Image
              src="/certificados/git-github.png"
              alt="Certificado Git y GitHub"
              width={600}
              height={400}
              className="mb-4 h-40 w-full rounded-lg object-cover border border-zinc-300 dark:border-zinc-700"
            />

            <h3 className="text-xl font-bold">
              Introducción a Git y GitHub
            </h3>

            <p className="mt-2 text-sm text-blue-500">
              TodoCode Academy
            </p>

            <p className="mt-3 text-gray-500">
              28 de noviembre de 2024
            </p>

            <a
              href="/certificados\certificado-git-y-github-m2xddydg9zr6.html"
              target="_blank"
              className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Ver certificado
            </a>
          </div>

          {/* ALGORITMOS */}
          <div className="rounded-2xl border border-zinc-300 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-zinc-700">

            <Image
              src="/certificados/algoritmos.png"
              alt="Certificado Algoritmos"
              width={600}
              height={400}
              className="mb-4 h-40 w-full rounded-lg object-cover border border-zinc-300 dark:border-zinc-700"
            />

            <h3 className="text-xl font-bold">
              Introducción a los Algoritmos y la Programación
            </h3>

            <p className="mt-2 text-sm text-blue-500">
              TodoCode Academy
            </p>

            <p className="mt-3 text-gray-500">
              15 de septiembre de 2024
            </p>

            <a
              href="/certificados/certificado-introduccion-a-los-algoritmos-xz5xjvgjxvr3.html"
              target="_blank"
              className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Ver certificado
            </a>
          </div>

          {/* SPRING BOOT */}
          <div className="rounded-2xl border border-zinc-300 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-zinc-700">

            <Image
              src="/certificados/springboot.png"
              alt="Certificado Spring Boot"
              width={600}
              height={400}
              className="mb-4 h-40 w-full rounded-lg object-cover border border-zinc-300 dark:border-zinc-700"
            />

            <h3 className="text-xl font-bold">
              Desarrollo de APIs en Java con Spring Boot
            </h3>

            <p className="mt-2 text-sm text-blue-500">
              TodoCode Academy
            </p>

            <p className="mt-3 text-gray-500">
              8 de noviembre de 2025
            </p>

            <a
              href="/certificados/certificado-spring-boot-n0omyq5wt4aq.html"
              target="_blank"
              className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Ver certificado
            </a>
          </div>

          {/* ADSO SENA */}
          <div className="rounded-2xl border border-zinc-300 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-zinc-700">

            <h3 className="text-xl font-bold">
              Tecnólogo en Análisis y Desarrollo de Software
            </h3>

            <p className="mt-2 text-sm text-green-600">
              SENA
            </p>

            <p className="mt-3 text-gray-500">
              8 de diciembre de 2025
            </p>

            <a
              href="#"
              className="mt-4 inline-block rounded-lg bg-zinc-600 px-4 py-2 text-white cursor-default"
            >
              Certificado en trámite
            </a>

          </div>

        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="mx-auto max-w-6xl px-6 py-24">

        <h2 className="mb-4 text-center text-4xl font-bold">
          Contacto
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-500">
          Actualmente me encuentro en búsqueda de oportunidades como
          Desarrollador de Software. Si deseas contactarme para una
          oferta laboral, proyecto o colaboración, puedes hacerlo
          mediante el siguiente formulario o mis redes profesionales.
        </p>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* FORMULARIO */}
          <div className="rounded-2xl border border-zinc-300 p-8 shadow-sm dark:border-zinc-700">

            <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold">
              <Send size={24} />
              Envíame un mensaje
            </h3>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-5"
            >

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Nombre
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Tu nombre"
                    className="w-full rounded-lg border border-zinc-300 bg-transparent py-3 pl-10 pr-4 outline-none focus:border-blue-500 dark:border-zinc-700"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Correo electrónico
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="correo@ejemplo.com"
                    className="w-full rounded-lg border border-zinc-300 bg-transparent py-3 pl-10 pr-4 outline-none focus:border-blue-500 dark:border-zinc-700"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Mensaje
                </label>

                <div className="relative">
                  <MessageSquare
                    size={18}
                    className="absolute left-3 top-4 text-gray-400"
                  />

                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Escribe tu mensaje..."
                    className="w-full rounded-lg border border-zinc-300 bg-transparent py-3 pl-10 pr-4 outline-none focus:border-blue-500 dark:border-zinc-700"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
              >
                Enviar mensaje
              </button>

            </form>

          </div>

          {/* INFORMACIÓN DE CONTACTO */}
          <div className="space-y-6">

            <div className="rounded-2xl border border-zinc-300 p-6 shadow-sm dark:border-zinc-700">

              <div className="flex items-center gap-3">
                <Mail className="text-blue-500" />
                <h3 className="text-xl font-semibold">
                  Correo
                </h3>
              </div>

              <p className="mt-4 text-gray-500 break-all">
                marulandaalexis1010@gmail.com
              </p>

              <a
                href="mailto:marulandaalexis1010@gmail.com"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                Enviar correo →
              </a>

            </div>

            <div className="rounded-2xl border border-zinc-300 p-6 shadow-sm dark:border-zinc-700">

              <div className="flex items-center gap-3">
                <FaGithub className="text-gray-500" />
                <h3 className="text-xl font-semibold">
                  GitHub
                </h3>
              </div>

              <p className="mt-4 text-gray-500">
                github.com/marulanda10
              </p>

              <a
                href="https://github.com/marulanda10"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                Ver perfil →
              </a>

            </div>

            <div className="rounded-2xl border border-zinc-300 p-6 shadow-sm dark:border-zinc-700">

              <div className="flex items-center gap-3">
                <FaLinkedin className="text-blue-500" />
                <h3 className="text-xl font-semibold">
                  LinkedIn
                </h3>
              </div>

              <p className="mt-4 text-gray-500">
                linkedin.com/in/alexis-marulanda
              </p>

              <a
                href="https://www.linkedin.com/in/alexis-marulanda-41026b396/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                Ver perfil →
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="mt-24 border-t border-zinc-300 py-10 dark:border-zinc-700">

        <div className="mx-auto max-w-6xl px-6 text-center">

          <h3 className="text-xl font-bold">
            Alexis Marulanda
          </h3>

          <p className="mt-2 text-gray-500">
            Desarrollador de Software Full Stack
          </p>

          <div className="mt-6 flex justify-center gap-6">

            <a
              href="https://github.com/marulanda10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition hover:text-blue-500"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/alexis-marulanda-41026b396/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition hover:text-blue-500"
            >
              LinkedIn
            </a>

            <a
              href="mailto:marulandaalexis1010@gmail.com"
              className="text-gray-500 transition hover:text-blue-500"
            >
              Correo
            </a>

          </div>

          <p className="mt-8 text-sm text-gray-500">
            © 2026 Alexis Marulanda. Todos los derechos reservados.
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Construido con Next.js, React y Tailwind CSS.
          </p>

        </div>

      </footer>

    </main>
  );
}