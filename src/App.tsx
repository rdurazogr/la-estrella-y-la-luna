import { useState } from 'react';
import { Star, Sparkles, Heart, Users, Mail, Phone, Music, Lightbulb, Target, BookOpen } from 'lucide-react';

function App() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
      <Stars />

      <header className="relative z-10 container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="text-yellow-300" size={32} />
            <span className="text-xl font-bold">Cuántica Producciones</span>
          </div>
          <button
            onClick={() => setShowContact(true)}
            className="bg-yellow-400 text-slate-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
          >
            Contacto
          </button>
        </nav>
      </header>

      <main className="relative z-10">
        <HeroSection />
        <WhySpecialSection />
        <SynopsisSection />
        <DetailedSynopsisSection />
        <ObjectivesSection />
        <StructureSection />
        <ThemesSection />
        <ArtisticElementsSection />
        <CharacterSection />
        <ImpactSection />
        <CompanyBioSection />
        <TeamBiosSection />
        <FullCreditsSection />
        <ContactSection show={showContact} onClose={() => setShowContact(false)} />
      </main>

      <footer className="relative z-10 bg-slate-950 bg-opacity-80 py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">© 2024 Cuántica Producciones - Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );
}

function Stars() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(80)].map((_, i) => {
        const sizeCategory = Math.random();
        let size, className;

        if (sizeCategory < 0.4) {
          size = Math.random() * 8 + 6;
          className = 'star-sparkle';
        } else {
          size = Math.random() * 3 + 2;
          className = Math.random() > 0.5 ? 'star-round' : 'star-tiny';
        }

        const duration = Math.random() * 4 + 2;
        const delay = Math.random() * 3;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const opacity = Math.random() * 0.4 + 0.6;

        return (
          <div
            key={i}
            className={`absolute animate-twinkle ${className}`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: `${top}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              opacity: opacity,
            }}
          />
        );
      })}
    </div>
  );
}

function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            La Estrella
            <br />
            <span className="text-yellow-300">y la Luna</span>
          </h1>
          <p className="text-xl text-blue-200 leading-relaxed">
            Una obra de teatro para peques de 0 a 3 años, llena de colores, luces y canciones para brillar con autenticidad.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2 bg-blue-900 bg-opacity-50 px-4 py-2 rounded-full">
              <Users size={20} />
              <span>0-3 años</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-900 bg-opacity-50 px-4 py-2 rounded-full">
              <Heart size={20} className="text-red-400" />
              <span>40 minutos</span>
            </div>
          </div>
          <blockquote className="border-l-4 border-yellow-300 pl-4 italic text-lg text-blue-100">
            "No importa el tamaño de tu brillo, sino cómo iluminas en la oscuridad."
          </blockquote>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-yellow-300 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
          <img
            src="/Foto promocional.png"
            alt="La Estrella y la Luna"
            className="relative rounded-3xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}

function WhySpecialSection() {
  const features = [
    {
      icon: <Heart className="text-pink-400" size={32} />,
      title: 'Suave y Colorida',
      description: 'Es suave, colorida y tranquila. Diseñada con cariño para ser visualmente estimulante para los más pequeños.'
    },
    {
      icon: <Music className="text-yellow-400" size={32} />,
      title: 'Tres Canciones A Capela',
      description: 'Tiene tres canciones a capela que invitan a moverse y cantar.'
    },
    {
      icon: <Lightbulb className="text-blue-400" size={32} />,
      title: 'Lenguaje Visual',
      description: 'Usa gestos, luces y objetos visuales que ayudan a comprender la historia.'
    },
    {
      icon: <Users className="text-green-400" size={32} />,
      title: 'Totalmente Inclusiva',
      description: 'Está diseñada para niños y niñas desde 0 hasta 3 años, incluyendo a personitas con necesidades especiales o diversidad funcional. Ideal para espacios inclusivos como escuelas infantiles, centros de atención temprana o funciones accesibles.'
    }
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          ¿Por Qué Esta Obra es <span className="text-yellow-300">Especial</span>?
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-slate-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:bg-opacity-70 border border-slate-700"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-blue-200">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SynopsisSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="bg-gradient-to-r from-blue-900 to-slate-800 bg-opacity-50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-700">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="text-yellow-300">Sinopsis</span>
        </h2>
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-blue-100 leading-relaxed">
          <p>
            <span className="text-yellow-300 font-semibold">La Estrella y la Luna</span> narra la historia de una pequeña estrella que se siente sola y diferente en el vasto cielo nocturno.
          </p>
          <p>
            Un encuentro con la Luna, que también se siente especial en su singularidad, enseña a la estrella a reconocer y valorar su propio brillo. A través de juegos y canciones, La Luna guía al público en una aventura de <span className="font-semibold text-white">autoaceptación y autoestima</span>, destacando la belleza de la diversidad y la importancia de ser uno mismo.
          </p>
          <div className="bg-yellow-300 text-slate-900 rounded-2xl p-6 mt-8 font-semibold text-center">
            "Una obra de teatro para peques de 0 a 3 años, llena de colores, luces y canciones para brillar con autenticidad."
          </div>
        </div>
      </div>
    </section>
  );
}

function DetailedSynopsisSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Sinopsis <span className="text-yellow-300">Completa</span>
        </h2>
        <div className="bg-slate-800 bg-opacity-50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-700 space-y-6 text-lg text-blue-100 leading-relaxed">
          <p>
            <span className="text-yellow-300 font-semibold">La Estrella y la Luna</span> es una obra de teatro infantil que cuenta la historia de una pequeña estrella que se siente diferente a las demás y lucha por encontrar su lugar en el vasto cielo.
          </p>
          <p>
            A través de su encuentro con la Luna, quien también es "diferente" debido a sus cambios de forma y brillo, ambas descubren que ser único y auténtico es lo que les hace especiales.
          </p>
          <p>
            A lo largo de la obra, la Luna guía a la estrella a aceptar su luz propia, animando también a los niños y niñas del público a reconocer y valorar su propia individualidad.
          </p>
          <p>
            La obra aborda temas como la <span className="text-yellow-300">autoestima, la inclusión, la importancia de ser uno mismo, y el valor de la empatía</span>, todo de una manera divertida, cálida y accesible para los más pequeños. La Luna, a través de canciones y relatos, conecta con el público y crea un ambiente de magia y cercanía.
          </p>
        </div>
      </div>
    </section>
  );
}

function ObjectivesSection() {
  const objectives = [
    {
      icon: <Heart className="text-pink-400" size={32} />,
      text: 'Fomentar la autoestima y la autoaceptación en los niños, destacando que todos tienen una luz única.'
    },
    {
      icon: <Users className="text-green-400" size={32} />,
      text: 'Enseñar valores de inclusión y empatía, mostrando que las diferencias nos enriquecen.'
    },
    {
      icon: <Sparkles className="text-yellow-400" size={32} />,
      text: 'Establecer una conexión emocional entre el personaje de la Luna y los niños, utilizando un lenguaje sencillo y canciones.'
    },
    {
      icon: <Target className="text-blue-400" size={32} />,
      text: 'Crear un espacio de entretenimiento educativo, en el que los niños participen activamente a través de las canciones y las interacciones.'
    }
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        Objetivos de la <span className="text-yellow-300">Obra</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {objectives.map((objective, index) => (
          <div
            key={index}
            className="bg-slate-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 flex gap-4"
          >
            <div className="flex-shrink-0">{objective.icon}</div>
            <p className="text-blue-100 leading-relaxed">{objective.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function StructureSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        Estructura de la <span className="text-yellow-300">Obra</span>
      </h2>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-gradient-to-br from-blue-900 to-slate-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
          <h3 className="text-2xl font-bold mb-4 text-yellow-300">Introducción</h3>
          <p className="text-blue-100 leading-relaxed">
            La Luna se presenta al público y relata cómo, aunque es la única en el cielo que cambia de forma, ha aprendido a valorar su propio brillo. La Luna conecta con los niños, contando que, en su viaje, conoció a una pequeña estrella que también se sentía "diferente".
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-blue-900 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
          <h3 className="text-2xl font-bold mb-4 text-yellow-300">Nudo</h3>
          <p className="text-blue-100 leading-relaxed">
            La Luna narra cómo conoció a la estrella, quien le confió sus inseguridades. A través de una divertida canción, la Luna anima a la estrella a reconocer su propio brillo, demostrando que no necesita parecerse a las demás para ser especial. En este viaje La luna le presenta al resto de personajes cada uno con su propio brillo y forma de ser.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-slate-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
          <h3 className="text-2xl font-bold mb-4 text-yellow-300">Desenlace</h3>
          <p className="text-blue-100 leading-relaxed">
            La pequeña estrella encuentra la confianza para brillar con su luz propia. La Luna concluye su relato compartiendo con los niños el mensaje final de la historia: cada uno tiene un brillo único que el mundo necesita. Termina con una canción que invita al público a celebrar sus propias "luces".
          </p>
        </div>
      </div>
    </section>
  );
}

function ThemesSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        Temas <span className="text-yellow-300">Principales</span>
      </h2>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-slate-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
          <h3 className="text-2xl font-bold mb-4 text-yellow-300 flex items-center gap-3">
            <Star className="text-yellow-400" size={28} />
            Autoestima y Aceptación
          </h3>
          <p className="text-blue-100 leading-relaxed">
            La obra anima a los niños a reconocer y valorar sus propias características únicas, incluso aquellas que pueden hacerlos sentir distintos.
          </p>
        </div>

        <div className="bg-slate-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
          <h3 className="text-2xl font-bold mb-4 text-yellow-300 flex items-center gap-3">
            <Users className="text-green-400" size={28} />
            Inclusión y Empatía
          </h3>
          <p className="text-blue-100 leading-relaxed">
            La Estrella y la Luna enfatiza la importancia de apoyar y aceptar las diferencias de los demás, resaltando cómo cada uno tiene un papel especial.
          </p>
        </div>

        <div className="bg-slate-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
          <h3 className="text-2xl font-bold mb-4 text-yellow-300 flex items-center gap-3">
            <Sparkles className="text-blue-400" size={28} />
            Identidad y Singularidad
          </h3>
          <p className="text-blue-100 leading-relaxed">
            La obra refuerza la idea de que no existe un "modo correcto" de ser o brillar, y que la diversidad en el cielo y en la vida es hermosa.
          </p>
        </div>
      </div>
    </section>
  );
}

function ArtisticElementsSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        Elementos <span className="text-yellow-300">Artísticos</span>
      </h2>
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="bg-gradient-to-br from-blue-900 to-slate-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
          <h3 className="text-3xl font-bold mb-6 text-yellow-300">Escenografía</h3>
          <div className="space-y-4 text-blue-100 leading-relaxed">
            <p>
              <strong className="text-white">Personajes:</strong> A lo largo de la obra iremos conociendo a diversos personajes, cada uno con diferentes tamaños, nombres, texturas, movimientos y sonidos, con los cuales el público podrá interactuar durante la representación.
            </p>
            <p>
              <strong className="text-white">Diseño Minimalista:</strong> Un gran círculo blanco en el centro del escenario representa la Luna, rodeado por luces pequeñas y de colores para las estrellas.
            </p>
            <p>
              <strong className="text-white">Iluminación:</strong> Las luces en tonos suaves (azules, blancos y amarillos) se utilizan para crear una atmósfera nocturna mágica, que puede intensificarse o suavizarse en diferentes momentos de la obra.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-blue-900 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
          <h3 className="text-3xl font-bold mb-6 text-yellow-300">Vestuario</h3>
          <p className="text-blue-100 leading-relaxed">
            <strong className="text-white">La Luna:</strong> La actriz usa una túnica plateada brillante y un maquillaje en los mismos tonos. La vestimenta es suave y fluida, permitiendo que la actriz realice movimientos amplios y soñadores.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-slate-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
          <h3 className="text-3xl font-bold mb-6 text-yellow-300 flex items-center gap-3">
            <Music size={32} />
            Canciones
          </h3>
          <p className="text-blue-100 mb-4">
            <strong className="text-white">Compositora de melodía y letra:</strong> Gema Zelarayán
          </p>
          <div className="space-y-4">
            <div className="bg-slate-900 bg-opacity-50 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-2 text-yellow-300">Una luz distinta (canción inicial)</h4>
              <p className="text-blue-100">Una canción suave que invita al público a explorar el cielo junto a la Luna, introducción musical de la obra.</p>
            </div>
            <div className="bg-slate-900 bg-opacity-50 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-2 text-yellow-300">Una luz pequeña (canción del nudo)</h4>
              <p className="text-blue-100">Juego guiado. La Luna anima a la estrella a descubrir su valor personal con esta canción.</p>
            </div>
            <div className="bg-slate-900 bg-opacity-50 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-2 text-yellow-300">Brilla, brilla (canción final)</h4>
              <p className="text-blue-100">Juego guiado. Canción optimista, donde recordamos a todos los personajes de la obra. Es una melodía divertida y motivadora, en la que los niños pueden aplaudir y seguir el ritmo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CharacterSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        Perfil del Personaje: <span className="text-yellow-300">La Luna</span>
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900 bg-opacity-50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-700">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">Descripción</h3>
              <p className="text-blue-100 leading-relaxed">
                La Luna es un personaje cercano, alegre y algo melancólico. Con su dulzura y sabiduría, logra conectar rápidamente con los niños, mostrándoles que incluso los seres que parecen fuertes o mágicos también sienten dudas. A través de su relación con la pequeña estrella, la Luna comparte valores de autoaceptación y empatía. La actriz encarna una personalidad soñadora y amable, hablando con naturalidad y cariño a los niños.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">Objetivo del personaje</h3>
              <p className="text-blue-100 leading-relaxed">
                Guiar a la pequeña estrella (y, simbólicamente, a cada niño en la audiencia) hacia el descubrimiento de su valor propio y la importancia de aceptar sus particularidades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImpactSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        Impacto <span className="text-yellow-300">Esperado</span>
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-800 bg-opacity-50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-700">
          <p className="text-lg text-blue-100 leading-relaxed">
            Se espera que <span className="text-yellow-300 font-semibold">La Estrella y la Luna</span> conecte de forma emocional con los niños y niñas, dejándoles un mensaje claro y positivo sobre la importancia de aceptarse a uno mismo y valorar las diferencias.
          </p>
          <p className="text-lg text-blue-100 leading-relaxed mt-6">
            La obra permite que los niños participen activamente, y las canciones refuerzan los valores de autoestima e inclusión. Los padres, profesores o acompañantes también pueden encontrar en la obra una herramienta útil para dialogar con los niños sobre temas importantes como la identidad y la empatía.
          </p>
        </div>
      </div>
    </section>
  );
}

function CompanyBioSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        <span className="text-yellow-300">Cuántica Producciones</span>
      </h2>
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="bg-gradient-to-br from-blue-900 to-slate-800 bg-opacity-50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-700">
          <div className="text-center mb-6">
            <p className="text-xl text-yellow-300 font-semibold">Compañía de Artes Escénicas y Audiovisuales</p>
            <p className="text-blue-200 mt-2">Fundada en 2014 | Con sede en Madrid</p>
            <p className="text-blue-200">Dirección artística: Gema Zelarayán</p>
          </div>

          <div className="space-y-6 text-blue-100 leading-relaxed">
            <p>
              Cuántica Producciones es una compañía madrileña fundada en 2014 por la actriz y creadora Gema Zelarayán, quien además es Graduada en Educación Social por la UNED y Técnico Superior en Integración Social. Con una visión interdisciplinaria, social y artística, Cuántica apuesta por proyectos escénicos y audiovisuales que combinan calidad artística, identidad propia y compromiso con el contexto contemporáneo.
            </p>
            <p>
              La compañía se estructura sobre tres pilares fundamentales: <span className="text-yellow-300 font-semibold">creación, producción/distribución y formación</span>, consolidando un modelo de trabajo integral y colaborativo. Surge de la experiencia acumulada en otras iniciativas previas como la Cía. Accidente Coreografiado, con una fuerte base de experimentación escénica y trabajo colectivo.
            </p>
          </div>
        </div>

        <div className="bg-slate-800 bg-opacity-50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-700">
          <h3 className="text-3xl font-bold mb-8 text-yellow-300 text-center">Trayectoria Teatral Cuántica Producciones</h3>
          <p className="text-blue-100 leading-relaxed mb-8">
            Desde sus inicios, Cuántica Producciones ha desarrollado propuestas teatrales con una fuerte carga expresiva, visual y humorística, abordando problemáticas sociales desde un lenguaje accesible, cercano y comprometido.
          </p>

          <h4 className="text-2xl font-bold mb-6 text-yellow-300">Obras destacadas:</h4>
          <div className="space-y-6">
            <div className="bg-slate-900 bg-opacity-50 rounded-xl p-6">
              <h5 className="text-xl font-bold mb-2 text-white">Algo personal (2025)</h5>
              <p className="text-blue-200 mb-2">Dir. Vicente Ayala</p>
              <p className="text-blue-100">Comedia negra sobre dos ex amigas atrapadas en el sótano de su antiguo colegio, donde los rencores del pasado y el humor más ácido se enfrentan en un duelo tan hilarante como revelador sobre el bullying y la reconciliación.</p>
            </div>

            <div className="bg-slate-900 bg-opacity-50 rounded-xl p-6">
              <h5 className="text-xl font-bold mb-2 text-white">¡Qué Pelos! (2017–2019)</h5>
              <p className="text-blue-200 mb-2">Dir. Joaco Martín</p>
              <p className="text-blue-100">Comedia social protagonizada por dos mujeres que abren una peluquería en plena crisis económica, donde lo absurdo y lo paranormal se entrelazan con la cotidianidad.</p>
            </div>

            <div className="bg-slate-900 bg-opacity-50 rounded-xl p-6">
              <h5 className="text-xl font-bold mb-2 text-white">Mujeres al Rojo Vivo (2015–2017)</h5>
              <p className="text-blue-200 mb-2">Dir. Gema Zelarayán</p>
              <p className="text-blue-100">Un viaje escénico-musical a través de distintas personalidades femeninas, explorando con humor y sensibilidad la imagen de la mujer en la sociedad.</p>
            </div>

            <div className="bg-slate-900 bg-opacity-50 rounded-xl p-6">
              <h5 className="text-xl font-bold mb-2 text-white">Loca Comedia de Poesía (2014)</h5>
              <p className="text-blue-200 mb-2">Texto y dirección: Rebeca Vecino</p>
              <p className="text-blue-100">Espectáculo didáctico para jóvenes, orientado a fomentar el interés por la poesía española desde la comicidad.</p>
            </div>
          </div>

          <p className="text-blue-100 leading-relaxed mt-8">
            Estas obras se han representado en espacios emblemáticos como el <span className="text-white font-semibold">Teatro Galileo Galilei, el Real Teatro de Aranjuez</span>, y en escenarios de Donosti, Badajoz, Gijón, así como en reconocidas salas alternativas de Madrid.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-blue-900 bg-opacity-50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-700">
          <h3 className="text-3xl font-bold mb-6 text-yellow-300 text-center">Trayectoria y Visión</h3>
          <p className="text-blue-100 leading-relaxed text-center">
            Con más de una década de trayectoria, Cuántica Producciones mantiene una identidad artística marcada por la experimentación, la cercanía con el público y la búsqueda constante de nuevos lenguajes. Su enfoque combina formación continua, investigación escénica y trabajo colaborativo, lo que ha permitido a la compañía posicionarse en la escena independiente madrileña como una propuesta sólida, fresca y comprometida.
          </p>
        </div>
      </div>
    </section>
  );
}

function TeamBiosSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        <span className="text-yellow-300">Biografías</span>
      </h2>
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="bg-gradient-to-br from-slate-800 to-blue-900 bg-opacity-50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-700">
          <h3 className="text-3xl font-bold mb-4 text-yellow-300">Ana Serzo - Directora</h3>
          <p className="text-xl text-blue-300 mb-6">Actriz | Creadora Escénica | Clown | Performera</p>

          <div className="space-y-4 text-blue-100 leading-relaxed">
            <img
              src="/foto ana.png"
              alt="Ana Serzo"
              className="float-left mr-6 mb-4 w-48 md:w-64 rounded-lg shadow-lg"
            />
            <p>
              Con más de 20 años de trayectoria, Ana Serzo ha desarrollado una sólida carrera en teatro, danza, improvisación, performance y teatro musical. Su versatilidad escénica, dominio gestual, gran capacidad para la improvisación y potente vis cómica le han otorgado un estilo propio y una reconocida solvencia como actriz.
            </p>
            <p>
              Ha trabajado con diversas compañías nacionales e internacionales, destacando su colaboración con la emblemática compañía <span className="text-white font-semibold">Yllana</span>, así como su participación en numerosos montajes de creación contemporánea y espectáculos de vanguardia.
            </p>
            <p>
              Desde 2008 forma parte de <span className="text-yellow-300 font-semibold">La Excéntrica | Escuela y Compañía de Artes Escénicas de Vanguardia</span>, dirigida por Joaco Martín, donde se desempeña como actriz, creadora, ayudante de dirección, profesora asistente y socia activa. También fue parte fundamental en la gestión de la sala La Excéntrica, un espacio referente en Madrid para la formación, creación y exhibición de propuestas escénicas contemporáneas.
            </p>
            <p>
              Es fundadora de <span className="text-white font-semibold">Clownas, Cía.</span>, donde destaca su trabajo en el unipersonal <em>Clownas by Ana Serzo</em>, presentado en múltiples salas y festivales, incluyendo el Teatro Circo Price (Madrid). También participa de manera protagónica en producciones de La Excéntrica, Cía., como <em>The Clowns & Freak Show, Ana se la Juega, A la Puta Calle</em> y <em>Cuanto Peor, Mejor</em>, entre otras, así como en Clownferencias y Biocomedias, con gran reconocimiento por parte del público y la crítica.
            </p>
            <p>
              Desde 2019, forma parte de <span className="text-white font-semibold">Beti Alai Producciones</span> como intérprete, ayudante de dirección y creadora, contribuyendo a nuevas propuestas escénicas con un enfoque innovador.
            </p>
            <p>
              Su formación es extensa y diversa, habiéndose formado en escuelas como Escalante (Valencia), El Almadén y La Excéntrica (Madrid), además de nutrirse de grandes maestros como <span className="text-white">Philippe Gaulier, Gabriel Chamé, Mar Navarro, Andrés del Bosque, Maite Guevara, Gaspar Campuzano, Fanny Giraud y Joaco Martín</span>, entre muchos otros.
            </p>
            <p className="text-yellow-300 font-semibold">
              Ana Serzo se consolida como una artista integral: carismática, creativa, arriesgada y con un profundo compromiso con las artes escénicas vivas, libres y transformadoras.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-slate-800 bg-opacity-50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-700">
          <h3 className="text-3xl font-bold mb-4 text-yellow-300">Gema Zelarayán - Actriz</h3>
          <p className="text-xl text-blue-300 mb-6">Actriz | Productora | Artista Escénica</p>

          <div className="space-y-4 text-blue-100 leading-relaxed">
            <img
              src="/foto gema.png"
              alt="Gema Zelarayán"
              className="float-left mr-6 mb-4 w-48 md:w-64 rounded-lg shadow-lg"
            />
            <p>
              Con más de 20 años de trayectoria, Gema Zelarayán es una actriz y creadora escénica formada en la <span className="text-white font-semibold">Escuela de Replika (Madrid)</span> y en <span className="text-white font-semibold">HB Studio (Nueva York)</span>, donde profundizó en técnica actoral y trabajo de escenas con Pablo Andrade y María Fontanals.
            </p>
            <p>
              Su formación integral abarca voz, cuerpo y técnica interpretativa: esgrima y lucha escénica (con Jon Bermúdez), técnica vocal (con Carol Dubois, Miguel Tubia y Sergio Camacho), biomecánica teatral (Meyerhold), análisis del personaje a través del eneagrama y comedia con Quino Falero.
            </p>
            <p>
              Con una sólida trayectoria en teatro, ha participado en montajes como <em>Fin</em> (nominado a Mejor Autoría en los Premios Max), <em>Esperaré, ¡Qué Pelos!, El Fruto, Madrid se volvió eterna</em> y <em>Mujeres al Rojo Vivo</em>. Ha pisado escenarios como el Teatro Real Carlos III de Aranjuez, Sala Galileo Galilei, Sala Alfil y Centro Cultural de Lugarritz (San Sebastián).
            </p>
            <p>
              Durante tres temporadas fue parte del elenco del musical <span className="text-white font-semibold">El Libro de la Selva</span>, con gira nacional en espacios como el Auditorio Principal de A Coruña, Teatro Circo de Orihuela, Teatro Bernal (Murcia) y Teatro El Sindicat (Alicante), entre otros.
            </p>
            <p>
              Como creadora y productora, ha sido cofundadora de las compañías <span className="text-yellow-300 font-semibold">Accidente Coreografiado y Cuántica Producciones</span>, desarrollando proyectos de investigación escénica, producción y distribución teatral.
            </p>
            <p className="text-yellow-300 font-semibold">
              Gema Zelarayán se define por su versatilidad, compromiso artístico y búsqueda constante de nuevos lenguajes interpretativos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FullCreditsSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        Equipo <span className="text-yellow-300">Completo</span>
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-slate-800 via-blue-900 to-slate-800 bg-opacity-50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-700">
          <h3 className="text-3xl font-bold mb-8 text-yellow-300 text-center">La Estrella y la Luna</h3>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-blue-100">
            <div>
              <p className="mb-3"><strong className="text-white">Escrita por:</strong> Gema Zelarayán</p>
              <p className="mb-3"><strong className="text-white">Dirigida por:</strong> Ana Serzo</p>
              <p className="mb-3"><strong className="text-white">Con:</strong> Gema Zelarayán</p>
              <p className="mb-3"><strong className="text-white">Cover:</strong> Ana Serzo</p>
              <p className="mb-3"><strong className="text-white">Diseño de luces:</strong> Ana Serzo</p>
              <p className="mb-3"><strong className="text-white">Espacio sonoro:</strong> Rodrigo Durazo</p>
              <p className="mb-3"><strong className="text-white">Asesora movimiento:</strong> Ana Serzo</p>
            </div>
            <div>
              <p className="mb-3"><strong className="text-white">Escenografía:</strong> Gema Zelarayán y Ana Serzo</p>
              <p className="mb-3"><strong className="text-white">Diseño y Vestuario:</strong> Clara Macias</p>
              <p className="mb-3"><strong className="text-white">Fotos:</strong> Cuántica Producciones</p>
              <p className="mb-3"><strong className="text-white">Diseño Gráfico:</strong> Cuántica Producciones</p>
              <p className="mb-3"><strong className="text-white">Técnico de sonido y luces:</strong> Rodrigo Durazo y Ana Serzo</p>
              <p className="mb-3"><strong className="text-white">Teaser - Operador de cámara:</strong> Rodrigo Durazo</p>
              <p className="mb-3"><strong className="text-white">Montaje y color:</strong> Cuántica Producciones</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-blue-200">
              <strong className="text-yellow-300">Con la colaboración de:</strong> Centro Cultural de Lavapiés
            </p>
          </div>
        </div>

        <div className="mt-12 bg-slate-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
          <h3 className="text-2xl font-bold mb-6 text-yellow-300 text-center">Ficha Técnica Completa</h3>
          <div className="space-y-3 text-blue-100">
            <p><strong className="text-white">Título:</strong> La Estrella y la Luna</p>
            <p><strong className="text-white">Género:</strong> Teatro infantil, educativo y musical</p>
            <p><strong className="text-white">Duración aproximada:</strong> 40 minutos</p>
            <p><strong className="text-white">Público:</strong> Niños y niñas de 0 a 3 años, incluyendo personitas con necesidades especiales o diversidad funcional.</p>
            <p><strong className="text-white">Intérprete:</strong> Actriz única en el papel de La Luna, como narradora y personaje principal.</p>
            <p><strong className="text-white">Escenografía y vestuario:</strong> Propuesta minimalista que representa el cielo nocturno. Incluye un círculo blanco como Luna y luces de colores como estrellas con el uso de un proyector de la propia compañía.</p>
            <p><strong className="text-white">Tiempo de montaje:</strong> 90 minutos</p>
            <p><strong className="text-white">Dimensiones mínimas del escenario:</strong> 4 m de ancho x 4 m de fondo x 3 m de alto</p>
            <p><strong className="text-white">Equipo de sonido:</strong> Sistema básico para reproducir música.</p>
            <p><strong className="text-white">Luces:</strong> Adaptable al rider de cada espacio.</p>
            <div>
              <p><strong className="text-white">Necesidades especiales:</strong></p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Posibilidad de que la actriz acceda al público durante la representación.</li>
                <li>Posibilidad de que el público se siente cerca de la escena, incluso dentro de ella, en el suelo.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection({ show, onClose }: { show: boolean; onClose: () => void }) {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-slate-800 rounded-3xl p-8 max-w-md w-full border border-slate-700 transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-3xl font-bold mb-6 text-yellow-300">Contacto</h3>
        <div className="space-y-4">
          <div>
            <p className="text-2xl font-bold mb-4 text-white">Gema Zelarayán</p>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-yellow-300" size={24} />
            <div>
              <p className="text-sm text-blue-300">Email</p>
              <a href="mailto:zelarayana@gmail.com" className="text-white hover:text-yellow-300 transition-colors">
                zelarayana@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-yellow-300" size={24} />
            <div>
              <p className="text-sm text-blue-300">Email Alternativo</p>
              <a href="mailto:cuanticaproducciones2014@gmail.com" className="text-white hover:text-yellow-300 transition-colors text-sm">
                cuanticaproducciones2014@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-yellow-300" size={24} />
            <div>
              <p className="text-sm text-blue-300">Teléfono</p>
              <a href="tel:649055447" className="text-white hover:text-yellow-300 transition-colors">
                649 055 447
              </a>
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="mt-8 w-full bg-yellow-400 text-slate-900 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default App;
