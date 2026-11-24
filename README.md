<div align="center">

  <!-- Banner / Título Estilizado -->
  <img src="https://readme-typing-svg.demolab.com?font=Orbitron&weight=800&size=32&duration=3000&pause=1000&color=FF2A2A&center=true&vCenter=true&width=650&lines=S%C3%8DMBOLO+DO+SUPERMAN+LED;NEON+INTERATIVO+EM+SVG;HTML5+%E2%80%A2+CSS3+%E2%80%A2+JAVASCRIPT" alt="Typing SVG" />

  <p align="center">
    <strong>Um letreiro neon digital do Homem de Aço construído com vetores SVG, brilho CSS realista e interruptor funcional.</strong>
  </p>

  <!-- Badges Coloridas -->
  <p align="center">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
    <img src="https://img.shields.io/badge/SVG-FFB13B?style=for-the-badge&logo=svg&logoColor=black" alt="SVG" />
    <img src="https://img.shields.io/badge/Status-Energizado_%E2%9A%A1-00F0FF?style=for-the-badge" alt="Status" />
  </p>

  <br />

  <!-- Preview da Imagem (Substitua o caminho se salvar a imagem localmente como preview.png) -->
  <img src="./preview.png" alt="Demonstração do Letreiro LED Superman" width="750" style="border-radius: 12px; box-shadow: 0 0 25px rgba(255, 0, 0, 0.5);" />
  <br />
  <sub><i>💡 Dica: Salve a captura de tela do seu projeto como <code>preview.png</code> na mesma pasta para exibi-la acima.</i></sub>

</div>

---

## ⚡ Sobre o Projeto

Este projeto transforma o emblema clássico do **Superman** em uma luminária de **fitas de LED Neon** diretamente no navegador. Utilizando caminhos vetoriais (`<svg>`) combinados com múltiplas camadas de sombra (`drop-shadow`) e animações de oscilação elétrica, a página simula o comportamento real de tubos de neon sendo energizados.

### ✨ Destaques Visuais
* 🔴 **Contorno Externo:** Fita LED em vermelho intenso com difusão de luz na parede de tijolos escuros.
* 🟡 **Cavidades Internas:** 6 segmentos independentes em amarelo vibrante formando o clássico "S".
* 🔌 **Interruptor Interativo:** Botão estilizado que alterna estados físicos (apagado/aceso) e altera a interface em tempo real.
* ⚡ **Oscilação Realista:** Micro-variações de opacidade via `@keyframes` simulando corrente elétrica contínua.

---

## 🎨 Paleta de Cores & Neon

| Elemento | Estado Desligado | Estado Energizado (LED ON) | Preview |
| :--- | :---: | :---: | :---: |
| **Contorno Diamante** | `#3A1010` | `#FF3B3B` | ![Red](https://img.shields.io/badge/-%23FF3B3B-FF3B3B?style=flat-square) |
| **Cavidades do "S"** | `#3D330E` | `#FFF04D` | ![Yellow](https://img.shields.io/badge/-%23FFF04D-FFF04D?style=flat-square) |
| **Botão Ativo** | `#1E2D45` | `#00F0FF` | ![Cyan](https://img.shields.io/badge/-%2300F0FF-00F0FF?style=flat-square) |
| **Parede de Fundo** | `#070B14` | `#0D1B33` | ![DarkBlue](https://img.shields.io/badge/-%23070B14-070B14?style=flat-square) |

---

## 🕹️ Guia Interativo (Clique para expandir)

<details>
  <summary><b>📂 1. Estrutura de Arquivos</b></summary>
  <br />

```text
superman-led-neon/
│
├── index.html      # Estrutura vetorial SVG do emblema e botão
├── estilo.css      # Fundo texturizado, tubos apagados e brilho neon
├── script.js       # Lógica do interruptor (Liga / Desliga)
├── preview.png     # Imagem de demonstração do projeto
└── README.md       # Documentação do repositório
