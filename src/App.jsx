import React, { useEffect, useState } from 'react';

const questions = [
  { question: '¿Cuál es el planeta más grande del sistema solar?', options: ['Saturno', 'Júpiter', 'Neptuno', 'Marte'], answer: 1, category: 'CIENCIA' },
  { question: '¿En qué país se encuentra la ciudad de Kioto?', options: ['China', 'Corea del Sur', 'Japón', 'Tailandia'], answer: 2, category: 'GEOGRAFÍA' },
  { question: '¿Quién pintó Guernica?', options: ['Salvador Dalí', 'Joan Miró', 'Diego Rivera', 'Pablo Picasso'], answer: 3, category: 'ARTE' },
  { question: '¿Cuál es el océano más extenso?', options: ['Atlántico', 'Índico', 'Pacífico', 'Ártico'], answer: 2, category: 'GEOGRAFÍA' },
  { question: '¿Cuántos lados tiene un dodecágono?', options: ['10', '11', '12', '14'], answer: 2, category: 'CULTURA' },
  { question: '¿Qué gas absorben principalmente las plantas?', options: ['Oxígeno', 'Dióxido de carbono', 'Nitrógeno', 'Helio'], answer: 1, category: 'CIENCIA' },
  { question: '¿Cuál es la capital de Canadá?', options: ['Toronto', 'Vancouver', 'Montreal', 'Ottawa'], answer: 3, category: 'GEOGRAFÍA' },
  { question: '¿En qué año llegó el ser humano a la Luna?', options: ['1965', '1969', '1972', '1975'], answer: 1, category: 'HISTORIA' },
  { question: '¿Qué instrumento tiene teclas, cuerdas y martillos?', options: ['Arpa', 'Clavicordio', 'Piano', 'Acordeón'], answer: 2, category: 'MÚSICA' },
  { question: '¿Cuál es el elemento químico cuyo símbolo es Au?', options: ['Plata', 'Cobre', 'Oro', 'Aluminio'], answer: 2, category: 'CIENCIA' },
  { question: '¿Qué país tiene forma de bota?', options: ['Grecia', 'Italia', 'Croacia', 'Portugal'], answer: 1, category: 'GEOGRAFÍA' },
  { question: '¿Quién escribió Don Quijote de la Mancha?', options: ['Lope de Vega', 'Federico García Lorca', 'Miguel de Cervantes', 'Francisco de Quevedo'], answer: 2, category: 'LITERATURA' },
  { question: '¿Cuál es el mamífero más grande del mundo?', options: ['Elefante africano', 'Ballena azul', 'Jirafa', 'Tiburón ballena'], answer: 1, category: 'NATURALEZA' },
  { question: '¿Qué civilización construyó Chichén Itzá?', options: ['Azteca', 'Inca', 'Maya', 'Olmeca'], answer: 2, category: 'HISTORIA' },
  { question: '¿Cuál es el resultado de 9 × 8?', options: ['64', '70', '72', '81'], answer: 2, category: 'CULTURA' },
  { question: '¿En qué continente está el desierto del Sahara?', options: ['Asia', 'África', 'Oceanía', 'América'], answer: 1, category: 'GEOGRAFÍA' },
  { question: '¿Qué órgano bombea la sangre por el cuerpo?', options: ['Pulmón', 'Hígado', 'Riñón', 'Corazón'], answer: 3, category: 'CIENCIA' },
  { question: '¿Cuál de estos animales es un marsupial?', options: ['Koala', 'Panda', 'Lémur', 'Nutria'], answer: 0, category: 'NATURALEZA' },
  { question: '¿Cuál es el idioma con más hablantes nativos?', options: ['Inglés', 'Español', 'Hindi', 'Chino mandarín'], answer: 3, category: 'CULTURA' },
  { question: '¿Qué artista es conocido como el rey del pop?', options: ['Prince', 'Freddie Mercury', 'Michael Jackson', 'Elton John'], answer: 2, category: 'MÚSICA' },
];

const alphabet = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
const hangmanPhrase = 'Abandonador de familias y adicto a las trans';
const maxMistakes = 6; 

const fullLetterText = `Vaya, si pudiste resolver esto. Muchas Felicidades, aquí tu regalo (leer hasta el final).

Receta Tradicional de Mole Poblano

Ingredientes:
- 3 chiles ancho, desvenados y sin semillas
- 3 chiles pasilla, desvenados y sin semillas
- 3 chiles mulatos, desvenados y sin semillas
- 1 tablilla de chocolate de mesa
- 1 plátano macho maduro, frito
- 1 tortilla de maíz tostada
- 1 bolillo o telera rebanado y tostado
- 1/4 de taza de almendras y 1/4 de taza de cacahuates
- 1/4 de taza de pasas y ajonjolí tostado
- Especias: 1 pizca de anís, clavos de olor, pimienta negra y una raja de canela
- 2 tomates rojos (jitomates) y 1 cebolla mediana
- 2 dientes de ajo
- Caldo de pollo (el necesario)
- Manteca de cerdo o aceite vegetal
- Sal al gusto

Preparación:
Asar y freír los chiles: Pasa los chiles ligeramente por aceite caliente (cuidado de no quemarlos para que no amarguen) y déjalos remojando en agua caliente por unos 25 minutos.

Preparar los complementos: En la misma grasa, fríe ligeramente las almendras, los cacahuates, las pasas, el pan, la tortilla y el plátano macho.

Licuar: Licúa los chiles remojados junto con las especias, los frutos secos fritos, el pan, la tortilla, el plátano, los tomates, la cebolla y los ajos, utilizando caldo de pollo para facilitar el licuado hasta obtener una pasta homogénea.

Freír el mole: En una olla grande o cazuela de barro, calienta un poco de manteca o aceite y vierte con cuidado la mezcla anterior (cuidado con las salpicaduras).

Incorporar el chocolate: Agrega la tablilla de chocolate y un poco más de caldo si la mezcla está muy espesa. Cocina a fuego lento sin dejar de mover durante 30 a 40 minutos hasta que los sabores se integren perfectamente y adquiera un color oscuro y brillante. ¡Sirve caliente con piezas de pollo cocido y espolvorea ajonjolí por encima!

¡Feliz Cumpleaños, César!
Ahora sí, dejando la cocina y el mame a un lado... ¡Feliz cumpleaños Césarin!

La verdad es que quería empezar con lo del mole solo para despistar un poco, pero ya que estamos, un pajarito chismoso nos dijo que ibas a cumplir años y que si podíamos ayudarla a prepararte algo especial (espero poder terminar esto a tiempo), sin duda alguna ese pajarito chismoso te ama mucho y nosotros... te queremos mucho también, así que si, aprovecho para hablar por todos y tomar este día para decirte lo mucho que te queremos y lo importante que eres para todos nosotros.

Te aprecio muchísimo y hay cosas de ti que de verdad te admiro. Por un lado, valoro infinitamente tu amistad y ese empeño constante por mantener al grupo unido a pesar de la distancia, a veces te desapareces pero se nota que aún así te esfuerzas para sigamos en contacto y eso no tiene precio. Por el otro lado, admiro muchísimo tu carisma y esa personalidad toda loca que tienes para siempre busca aprender cosas nuevas para no quedarse estancado jamás. Eres una inspiración en ese sentido.

Obviamente, no podemos dejar pasar la oportunidad de recordarte que te queremos un buen mi estimado, aunque a veces nos abandones o canceles los planes de un día para otro así porque si. Ya es hora de que dejes los vicios (o al menos que le bajes dos rayitas, aunque por ahí ese mismo pajarito chismoso nos dijo que ya cambiaste y eso es increíble), y créeme que de verdad se te extraña un montón.

Pásatela increíble en tu día, come mucho mole, ríete fuerte y celebra como te mereces. ¡Un abrazo bien fuerte de parte de todos!`;

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function Polaroid({ number, rotation, captionText }) {
  const [missing, setMissing] = useState(false);
  return (
    <div className="polaroid-card" style={{ transform: `rotate(${rotation}deg)` }}>
      <div className="polaroid-image-wrapper">
        {!missing ? (
          <img 
            src={`/imagenes/imagen${number}.jpg`} 
            alt={`Recuerdo 0${number}`} 
            onError={() => setMissing(true)} 
          />
        ) : (
          <div className="polaroid-fallback">Recuerdo 0{number}</div>
        )}
      </div>
      <p className="polaroid-caption">{captionText || `Recuerdo #${number}`}</p>
    </div>
  );
}

function App() {
  const [screen, setScreen] = useState('login');
  const [secret, setSecret] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [cipherAnswer, setCipherAnswer] = useState('');
  const [cipherError, setCipherError] = useState(false);
  const [remaining, setRemaining] = useState(() => shuffle(questions.map((_, index) => index)));
  const [roundQuestions, setRoundQuestions] = useState([]);
  const [roundNumber, setRoundNumber] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [roundResult, setRoundResult] = useState(null);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [letterProgress, setLetterProgress] = useState(0);

  const startRound = (pool) => {
    const freshPool = pool.length >= 5 ? pool : shuffle(questions.map((_, index) => index));
    setRoundQuestions(freshPool.slice(0, 5).map((index) => questions[index]));
    setRemaining(freshPool.slice(5));
    setRoundNumber((current) => current + 1);
    setQuestionIndex(0);
    setScore(0);
    setRoundResult(null);
  };

  const submitSecret = (event) => {
    event.preventDefault();
    if (secret.trim().toUpperCase() === 'CESAR') {
      setLoginError(false);
      setScreen('intro');
    } else setLoginError(true);
  };

  const submitCipher = (event) => {
    event.preventDefault();
    if (cipherAnswer.trim().toUpperCase() === 'FELIZ') {
      setCipherError(false);
      startRound(remaining);
      setScreen('trivia');
    } else setCipherError(true);
  };

  const answerQuestion = (answerIndex) => {
    if (roundResult !== null) return;
    const nextScore = score + (answerIndex === roundQuestions[questionIndex].answer ? 1 : 0);
    setScore(nextScore);
    if (questionIndex === 4) setRoundResult(nextScore);
    else setQuestionIndex((current) => current + 1);
  };

  const wrongGuesses = guessedLetters.filter((letter) => !hangmanPhrase.toLowerCase().includes(letter)).length;
  const isHangmanWon = [...hangmanPhrase.toLowerCase()].filter((character) => /[a-z]/.test(character)).every((letter) => guessedLetters.includes(letter));
  const isHangmanLost = wrongGuesses >= maxMistakes;

  const guessLetter = (letter) => {
    const normalized = letter.toLowerCase();
    if (guessedLetters.includes(normalized) || isHangmanWon || isHangmanLost) return;
    setGuessedLetters((current) => [...current, normalized]);
  };

  useEffect(() => {
    if (screen !== 'hangman' || isHangmanWon || isHangmanLost) return undefined;
    const handleKeyDown = (event) => {
      if (/^[a-zñ]$/i.test(event.key)) guessLetter(event.key);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [screen, guessedLetters, isHangmanWon, isHangmanLost]);

  useEffect(() => {
    if (screen !== 'letter') return undefined;
    const timer = window.setInterval(() => {
      setLetterProgress((current) => {
        if (current >= fullLetterText.length) {
          clearInterval(timer);
          return current;
        }
        return current + 3;
      });
    }, 25);
    return () => clearInterval(timer);
  }, [screen]);

  const progressLabel = { login: 'ACCESO', intro: 'ACCESO', cipher: 'PRUEBA 1/3', trivia: 'PRUEBA 2/3', hangman: 'PRUEBA 3/3', letter: 'CARTA DE CUMPLEAÑOS' }[screen];

  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="topbar-right">
          <span className="progress-badge">{progressLabel}</span>
        </div>
      </header>

      {/* Pantalla 1: Login */}
      {screen === 'login' && (
        <section className="screen center-screen" aria-labelledby="login-title">
          <div className="card-box glow">
            <h1 id="login-title">¿Quien eres?</h1>
            <p className="lede">Tu nombre pero sin acentos.</p>
            <form className="secret-form" onSubmit={submitSecret}>
              <div className="input-group">
                <input 
                  id="secret" 
                  type="password" 
                  value={secret} 
                  onChange={(event) => setSecret(event.target.value)} 
                  placeholder="Tu nombre aquí..." 
                  autoComplete="off" 
                  autoFocus 
                />
                <button className="primary-btn" type="submit">Entrar</button>
              </div>
              {loginError && <p className="error-text" role="alert">Mmm, esa no es la clave secreta. Inténtalo de nuevo.</p>}
            </form>
          </div>
        </section>
      )}

      {/* Pantalla 2: Intro */}
      {screen === 'intro' && (
        <section className="screen center-screen" aria-labelledby="intro-title">
          <div className="card-box glow text-center">
            <span className="card-subtitle">BIENVENIDO</span>
            <h1 id="intro-title">¡Qué gusto verte por aquí!</h1>
            <p className="lede">Hay algo que quiero decirte. Pero antes, tendrás que superar 3 pequeñas pruebas.</p>
            <button className="primary-btn large" onClick={() => setScreen('cipher')}>Comenzar</button>
          </div>
        </section>
      )}

      {/* Pantalla 3: Código Secreto (Cenit Polar con instrucciones claras) */}
      {screen === 'cipher' && (
        <section className="screen center-screen" aria-labelledby="cipher-title">
          <div className="card-box wide">
            <div className="screen-tag">PRUEBA 01 DE 03 • CENIT POLAR</div>
            <h1 id="cipher-title">Descifra el mensaje</h1>
            <p className="lede-small">
              El <b>Cenit Polar</b> es un cifrado por sustitución. Cada letra de una pareja se reemplaza por su contraria.
            </p>
            
            {/* Guía explicativa muy clara */}
            <div className="cipher-instructions-box">
              <span className="inst-title">¿Cómo funciona?</span>
              <p>Reemplaza cada letra de la palabra encriptada buscando su pareja en la siguiente lista:</p>
              <div className="cipher-pairs-row">
                <span>C <b>⇄</b> P</span><span>E <b>⇄</b> O</span><span>N <b>⇄</b> L</span><span>I <b>⇄</b> A</span><span>T <b>⇄</b> R</span>
              </div>
              <small><i>Ejemplo: Si ves una <b>P</b>, la cambias por <b>C</b>. Si ves una <b>E</b>, la cambias por <b>O</b>.</i></small>
            </div>

            <div className="cipher-box">
              <span>PALABRA A DESCIFRAR</span>
              <strong>FONAZ</strong>
            </div>
            <form className="answer-form" onSubmit={submitCipher}>
              <label htmlFor="cipher-answer">¿Cuál es la palabra descifrada?</label>
              <div className="input-group">
                <input id="cipher-answer" value={cipherAnswer} onChange={(event) => setCipherAnswer(event.target.value)} placeholder="Escribe tu respuesta..." autoComplete="off" autoFocus />
                <button className="primary-btn" type="submit">Verificar</button>
              </div>
              {cipherError && <p className="error-text" role="alert">Casi... Aplica el cambio con las parejas de arriba.</p>}
            </form>
          </div>
        </section>
      )}

      {/* Pantalla 4: Trivia */}
      {screen === 'trivia' && (
        <section className="screen center-screen" aria-labelledby="trivia-title">
          <div className="card-box wide">
            <div className="screen-tag">PRUEBA 02 DE 03 • CULTURA GENERAL</div>
            {roundResult === null ? (
              <>
                <div className="trivia-header-info">
                  <span>Ronda {String(roundNumber).padStart(2, '0')}</span>
                  <span>Pregunta {String(questionIndex + 1).padStart(2, '0')} / 05</span>
                </div>
                <div className="progress-bar">
                  <span style={{ width: `${((questionIndex + 1) / 5) * 100}%` }} />
                </div>
                <span className="category-pill">{roundQuestions[questionIndex]?.category}</span>
                <h2 id="trivia-title" className="trivia-title">{roundQuestions[questionIndex]?.question}</h2>
                <div className="options-grid">
                  {roundQuestions[questionIndex]?.options.map((option, index) => (
                    <button className="option-card" key={option} onClick={() => answerQuestion(index)}>
                      <span className="opt-num">{String.fromCharCode(65 + index)}</span>
                      <span className="opt-txt">{option}</span>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center">
                <span className="card-subtitle">RONDA FINALIZADA</span>
                <div className="big-score">{roundResult} <span>/ 5</span></div>
                <h1>{roundResult === 5 ? '¡Excelente puntaje!' : '¡Buen intento!'}</h1>
                <p className="lede">{roundResult === 5 ? '¡GOOOOOOOOOOOD VAS BIEN PERRIN!' : 'Necesitas 5 aciertos para pasar. Vas de nuevo puñetas'}</p>
                {roundResult === 5 ? (
                  <button className="primary-btn large" onClick={() => setScreen('hangman')}>Ir a la prueba final</button>
                ) : (
                  <button className="primary-btn large" onClick={() => startRound(remaining)}>Intentar otra vez</button>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Pantalla 5: El Ahorcado con Monito Clásico */}
      {screen === 'hangman' && (
        <section className="screen center-screen" aria-labelledby="hangman-title">
          <div className="card-box wide">
            <div className="screen-tag">PRUEBA 03 DE 03 • PRUEBA FINAL</div>
            <div className="hangman-top">
              <div>
                <h1 id="hangman-title" className="margin-zero">Adivina la frase oculta</h1>
                <p className="lede-small">Demuestra que conoces al cumpleañero, ¿Qué eres?.</p>
                <p className="lede-small">Eres un...</p>
              </div>

              {/* Dibujo clásico del monito de ahorcado en SVG */}
              <div className="hangman-drawing-box">
                <svg height="90" width="80" viewBox="0 0 100 100">
                  {/* Horca base */}
                  <line x1="10" y1="90" x2="90" y2="90" stroke="#78716c" strokeWidth="4" strokeLinecap="round" />
                  <line x1="30" y1="10" x2="30" y2="90" stroke="#78716c" strokeWidth="4" strokeLinecap="round" />
                  <line x1="30" y1="10" x2="70" y2="10" stroke="#78716c" strokeWidth="4" strokeLinecap="round" />
                  <line x1="70" y1="10" x2="70" y2="25" stroke="#78716c" strokeWidth="3" strokeLinecap="round" />

                  {/* 1. Cabeza (wrongGuesses >= 1) */}
                  {wrongGuesses >= 1 && <circle cx="70" cy="35" r="10" stroke="#881337" strokeWidth="3" fill="none" />}
                  {/* 2. Tronco (wrongGuesses >= 2) */}
                  {wrongGuesses >= 2 && <line x1="70" y1="45" x2="70" y2="70" stroke="#881337" strokeWidth="3" strokeLinecap="round" />}
                  {/* 3. Brazo izquierdo (wrongGuesses >= 3) */}
                  {wrongGuesses >= 3 && <line x1="70" y1="52" x2="55" y2="62" stroke="#881337" strokeWidth="3" strokeLinecap="round" />}
                  {/* 4. Brazo derecho (wrongGuesses >= 4) */}
                  {wrongGuesses >= 4 && <line x1="70" y1="52" x2="85" y2="62" stroke="#881337" strokeWidth="3" strokeLinecap="round" />}
                  {/* 5. Pierna izquierda (wrongGuesses >= 5) */}
                  {wrongGuesses >= 5 && <line x1="70" y1="70" x2="58" y2="85" stroke="#881337" strokeWidth="3" strokeLinecap="round" />}
                  {/* 6. Pierna derecha (wrongGuesses >= 6) */}
                  {wrongGuesses >= 6 && <line x1="70" y1="70" x2="82" y2="85" stroke="#881337" strokeWidth="3" strokeLinecap="round" />}
                </svg>
                <div className="hangman-count-text">Fallos: <b>{wrongGuesses}</b> / {maxMistakes}</div>
              </div>
            </div>

            <div className="phrase-board">
              {hangmanPhrase.split(' ').map((word, wordIndex) => (
                <span className="phrase-word" key={`${word}-${wordIndex}`}>
                  {[...word].map((letter, letterIndex) => (
                    <span className="phrase-letter" key={`${letter}-${letterIndex}`}>
                      {guessedLetters.includes(letter.toLowerCase()) || isHangmanLost ? letter : '_'}
                    </span>
                  ))}
                </span>
              ))}
            </div>

            {!isHangmanWon && !isHangmanLost && (
              <div className="virtual-keyboard">
                {alphabet.map((letter) => (
                  <button 
                    key={letter} 
                    className="key-pad"
                    disabled={guessedLetters.includes(letter.toLowerCase())} 
                    onClick={() => guessLetter(letter)}
                  >
                    {letter}
                  </button>
                ))}
              </div>
            )}

            {isHangmanLost && (
              <div className="alert-box error">
                <p>Ups, vas de nuevo puñeton</p>
                <button className="primary-btn mt-2" onClick={() => setGuessedLetters([])}>Intentar de nuevo</button>
              </div>
            )}

            {isHangmanWon && (
              <div className="alert-box success">
                <p>¡Lo lograsteeeeeeeee con!</p>
                <strong>¡FELIZ CUMPLEAÑOS, CÉSARIN!</strong>
                <button className="primary-btn large mt-3" onClick={() => { setLetterProgress(0); setScreen('letter'); }}>¿Y el premio?</button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Pantalla 6: Carta y Galería de Fotos Polaroid al Final */}
      {screen === 'letter' && (
        <section className="screen letter-screen-container" aria-labelledby="letter-title">
          <div className="letter-paper">
            <div className="letter-header-tag">WENAS</div>
            <h1 id="letter-title" className="letter-main-title">¡Feliz Cumpleaños, <span>César</span>!</h1>

            {/* Efecto de escritura en tiempo real */}
            <article className="letter-content-box">
              <pre className="typing-area">{fullLetterText.slice(0, letterProgress)}</pre>
              {letterProgress < fullLetterText.length && <span className="cursor-blink">|</span>}
            </article>

            {/* Galería de fotos Polaroid estrictamente hasta el final de la carta */}
            {letterProgress > 120 && (
              <div className="polaroid-section">
                <div className="polaroid-divider">
                </div>
                <div className="polaroids-flex">
                  <Polaroid number={1} rotation={-2} captionText="¿Recuerdas esto? " />
                  <Polaroid number={2} rotation={2} captionText="¿O tal vez esto?" />
                  <Polaroid number={3} rotation={-3} captionText="Estabas muy drogado para recordar esto..." />
                  <Polaroid number={4} rotation={2.5} captionText="Un caballero elegante que aprobo su TT con Jenni" />
                </div>
              </div>
            )}

            {letterProgress >= fullLetterText.length && (
              <div className="letter-ending">
                <p>¡Pásatela increíble hoy y siempre, saludos brou!</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Estilos CSS */}
      <style>{`
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          background-color: #fcfaf7;
          color: #292524;
        }
        .app-shell {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .topbar {
          background: #ffffff;
          border-bottom: 1px solid #f0ebe1;
          padding: 0.85rem 1.75rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 2px 10px rgba(0,0,0,0.02);
        }
        .wordmark {
          font-weight: 800;
          font-size: 1rem;
          color: #881337;
          letter-spacing: -0.3px;
        }
        .progress-badge {
          font-size: 0.75rem;
          font-weight: 700;
          color: #78716c;
          background: #f5f2eb;
          padding: 0.3rem 0.75rem;
          border-radius: 99px;
          letter-spacing: 0.5px;
        }
        .screen {
          flex: 1;
          padding: 2rem 1rem;
          max-width: 920px;
          margin: 0 auto;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .center-screen {
          align-items: center;
        }
        .card-box {
          background: #ffffff;
          border: 1px solid #e7e0d3;
          border-radius: 20px;
          padding: 2.5rem;
          width: 100%;
          max-width: 480px;
          box-shadow: 0 12px 35px rgba(0,0,0,0.04);
        }
        .card-box.wide {
          max-width: 640px;
        }
        .glow {
          box-shadow: 0 15px 40px rgba(136, 19, 55, 0.06);
        }
        .text-center {
          text-align: center;
        }
        .card-subtitle {
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 1.2px;
          color: #881337;
          display: block;
          margin-bottom: 0.5rem;
        }
        h1 {
          font-size: 1.85rem;
          color: #1c1917;
          margin: 0 0 0.5rem 0;
          letter-spacing: -0.5px;
        }
        .lede {
          color: #57534e;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.75rem;
        }
        .lede-small {
          color: #57534e;
          font-size: 0.9rem;
          margin-bottom: 1rem;
          line-height: 1.5;
        }
        .input-group {
          display: flex;
          gap: 0.5rem;
        }
        input {
          flex: 1;
          padding: 0.8rem 1rem;
          border: 1px solid #d6cebf;
          border-radius: 12px;
          font-size: 0.95rem;
          outline: none;
          background: #faf8f5;
          transition: all 0.2s;
        }
        input:focus {
          border-color: #881337;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(136, 19, 55, 0.08);
        }
        .primary-btn {
          background: #881337;
          color: #fff;
          border: none;
          padding: 0.8rem 1.4rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          transition: background 0.2s, transform 0.1s;
        }
        .primary-btn:hover {
          background: #700f2d;
        }
        .primary-btn.large {
          width: 100%;
          padding: 0.95rem;
          font-size: 1rem;
        }
        .error-text {
          color: #dc2626;
          font-size: 0.8rem;
          margin-top: 0.75rem;
          font-weight: 600;
        }
        .screen-tag {
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 1px;
          color: #881337;
          margin-bottom: 1rem;
        }
        .cipher-instructions-box {
          background: #faf8f5;
          border: 1px solid #e7e0d3;
          border-radius: 12px;
          padding: 1rem 1.25rem;
          margin-bottom: 1.25rem;
        }
        .inst-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: #881337;
          display: block;
          margin-bottom: 0.35rem;
        }
        .cipher-instructions-box p {
          margin: 0 0 0.75rem 0;
          font-size: 0.85rem;
          color: #44403c;
        }
        .cipher-pairs-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 0.75rem;
        }
        .cipher-pairs-row span {
          background: #ffffff;
          border: 1px solid #e7e0d3;
          padding: 0.35rem 0.65rem;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
        }
        .cipher-instructions-box small {
          color: #78716c;
          font-size: 0.75rem;
        }
        .cipher-box {
          background: #faf8f5;
          border: 1px dashed #d6cebf;
          border-radius: 12px;
          padding: 1rem;
          text-align: center;
          margin-bottom: 1.5rem;
        }
        .cipher-box span {
          font-size: 0.7rem;
          font-weight: 700;
          color: #78716c;
          display: block;
          margin-bottom: 0.25rem;
        }
        .cipher-box strong {
          font-size: 1.4rem;
          letter-spacing: 2px;
          color: #1c1917;
        }
        .trivia-header-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          font-weight: 700;
          color: #78716c;
          margin-bottom: 0.5rem;
        }
        .progress-bar {
          height: 5px;
          background: #f0ebe1;
          border-radius: 99px;
          overflow: hidden;
          margin-bottom: 1.25rem;
        }
        .progress-bar span {
          display: block;
          height: 100%;
          background: #881337;
          transition: width 0.3s ease;
        }
        .category-pill {
          display: inline-block;
          font-size: 0.65rem;
          font-weight: 800;
          background: #fef2f2;
          color: #991b1b;
          padding: 0.2rem 0.6rem;
          border-radius: 6px;
          margin-bottom: 0.5rem;
          letter-spacing: 0.5px;
        }
        .trivia-title {
          font-size: 1.25rem;
          line-height: 1.4;
          margin: 0 0 1.25rem 0;
          color: #1c1917;
        }
        .options-grid {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .option-card {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          width: 100%;
          background: #faf8f5;
          border: 1px solid #e7e0d3;
          padding: 0.85rem 1rem;
          border-radius: 12px;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s;
          font-size: 0.95rem;
          font-weight: 500;
          color: #292524;
        }
        .option-card:hover {
          background: #fdf2f4;
          border-color: #881337;
        }
        .opt-num {
          background: #e7e0d3;
          color: #44403c;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 700;
        }
        .big-score {
          font-size: 3rem;
          font-weight: 800;
          color: #881337;
          line-height: 1;
          margin: 0.75rem 0;
        }
        .big-score span {
          font-size: 1.25rem;
          color: #a8a29e;
        }
        .hangman-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        .margin-zero { margin: 0; }
        .hangman-drawing-box {
          background: #faf8f5;
          border: 1px solid #e7e0d3;
          padding: 0.5rem 1rem;
          border-radius: 12px;
          text-align: center;
        }
        .hangman-count-text {
          font-size: 0.7rem;
          color: #78716c;
          margin-top: -4px;
        }
        .phrase-board {
          display: flex;
          flex-wrap: wrap;
          gap: 1.2rem;
          justify-content: center;
          margin: 1.5rem 0;
          background: #faf8f5;
          padding: 1.25rem;
          border-radius: 12px;
          border: 1px dashed #d6cebf;
        }
        .phrase-word {
          display: flex;
          gap: 0.3rem;
        }
        .phrase-letter {
          width: 24px;
          height: 32px;
          border-bottom: 3px solid #881337;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1rem;
          color: #1c1917;
        }
        .virtual-keyboard {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(32px, 1fr));
          gap: 0.35rem;
          margin-top: 1rem;
        }
        .key-pad {
          background: #faf8f5;
          border: 1px solid #d6cebf;
          padding: 0.5rem 0;
          border-radius: 6px;
          font-weight: 700;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.1s;
        }
        .key-pad:hover:not(:disabled) {
          background: #e7e0d3;
          border-color: #881337;
        }
        .key-pad:disabled {
          opacity: 0.3;
          cursor: not-allowed;
          background: #f0ebe1;
        }
        .alert-box {
          margin-top: 1.25rem;
          padding: 1.25rem;
          border-radius: 12px;
          text-align: center;
        }
        .alert-box.error { background: #fef2f2; border: 1px solid #fecaca; }
        .alert-box.success { background: #f0fdf4; border: 1px solid #bbf7d0; }
        .mt-2 { margin-top: 0.75rem; }
        .mt-3 { margin-top: 1rem; }

        /* Estilo de la Carta y Galería Polaroid */
        .letter-screen-container {
          max-width: 760px;
          padding: 2rem 1rem;
        }
        .letter-paper {
          background: #ffffff;
          border: 1px solid #e7e0d3;
          border-radius: 20px;
          padding: 2.5rem 2rem;
          box-shadow: 0 15px 40px rgba(0,0,0,0.04);
        }
        @media(max-width: 600px) {
          .letter-paper { padding: 1.5rem 1rem; }
        }
        .letter-header-tag {
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: #881337;
          text-align: center;
          margin-bottom: 0.5rem;
        }
        .letter-main-title {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid #f0ebe1;
          padding-bottom: 1rem;
        }
        .letter-main-title span {
          color: #881337;
        }
        .letter-content-box {
          font-size: 1rem;
          line-height: 1.8;
          color: #44403c;
          min-height: 180px;
        }
        .typing-area {
          white-space: pre-wrap;
          word-break: break-word;
          font-family: inherit;
          margin: 0;
        }
        .cursor-blink {
          font-weight: 700;
          color: #881337;
          animation: blink 0.8s infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        /* Galería Polaroid al fondo */
        .polaroid-section {
          margin-top: 3.5rem;
          padding-top: 2rem;
          border-top: 1px dashed #d6cebf;
        }
        .polaroid-divider {
          text-align: center;
          margin-bottom: 2rem;
        }
        .polaroid-divider span {
          font-size: 0.9rem;
          font-weight: 700;
          color: #78716c;
          background: #faf8f5;
          padding: 0.4rem 1rem;
          border-radius: 99px;
          border: 1px solid #e7e0d3;
        }
        .polaroids-flex {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.75rem;
        }
        .polaroid-card {
          background: #ffffff;
          padding: 10px 10px 22px 10px;
          width: 200px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08), 0 2px 5px rgba(0,0,0,0.04);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 2px;
        }
        .polaroid-card:hover {
          transform: rotate(0deg) scale(1.06) !important;
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
          z-index: 10;
        }
        .polaroid-image-wrapper {
          width: 100%;
          height: 165px;
          background: #f0ebe1;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .polaroid-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .polaroid-fallback {
          font-size: 0.75rem;
          color: #78716c;
          font-family: monospace;
          text-align: center;
          padding: 1rem;
        }
        .polaroid-caption {
          text-align: center;
          font-family: 'Caveat', cursive, sans-serif;
          font-size: 1.1rem;
          color: #44403c;
          margin: 10px 0 0 0;
        }
        .letter-ending {
          margin-top: 3rem;
          text-align: center;
          font-size: 1.15rem;
          font-weight: 700;
          color: #881337;
        }
      `}</style>
    </main>
  );
}

export default App;