# Quiz & Roleta de Prêmios — SBSI 2026

Um web app interativo e gamificado desenvolvido para o **Simpósio Brasileiro de Sistemas de Informação (SBSI) 2026**. O projeto combina um quiz de conhecimentos sobre a iSys (Journal of Information Systems) e a CESI com uma roleta de prêmios animada para engajar os participantes do evento.

## Funcionalidades

* **Quiz Dinâmico:** Banco de 20 perguntas de múltipla escolha que são carregadas aleatoriamente.
* **Validação em Tempo Real:** Feedback imediato caso o participante acerte ou erre a pergunta.
* **Roleta Gamificada:** Ao acertar a resposta, o usuário ganha o direito de girar uma roleta renderizada em `<canvas>`, que sorteia prêmios aleatoriamente com animações fluidas.
* **UI/UX Moderna:** Interface responsiva focada em legibilidade e acessibilidade, utilizando design *glassmorphism* e fundos animados de forma leve.
* **Código Limpo:** Separação clara de responsabilidades (HTML, CSS e JS) visando a fácil manutenção e escalabilidade.

## Tecnologias Utilizadas

* **HTML5:** Estruturação semântica.
* **CSS3:** Estilização com variáveis, flexbox/grid, animações *keyframes* e transições nativas.
* **JavaScript (Vanilla):** Lógica de renderização das perguntas, validação de inputs e desenho da roleta utilizando a **Canvas API**.

## Como executar o projeto

Como o projeto é estático (apenas front-end), não é necessário instalar dependências ou configurar um servidor complexo.

1. Clone este repositório:
   ```bash
   git clone [https://github.com/AnyssaAndrade/quiz-isys.git](https://github.com/AnyssaAndrade/quiz-isys.git)
