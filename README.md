# 🧑‍💻 Meu Portfólio Estático

Este site foi originalmente idealizado em **Next.js com Node.js**, mas para publicação via **GitHub Pages**, foi convertido para um modelo estático mais simples usando ferramentas de IA e exportação com `output: 'export'`.

---

## 📄 Visão Geral

- Projeto inicial em **Next.js** com rotas dinâmicas e renderização no servidor.
- Como o **GitHub Pages só suporta sites estáticos**, mantive o projeto original intacto para deploy futuro em servidor próprio.
- A partir do código original, foi gerado um site estático simples, compatível com caminhos relativos corretos para rodar via **GitHub Pages**.

---

## ⚙️ Tecnologias Utilizadas

| Camada              | Ferramentas / Tecnologias                             |
| ------------------- | ----------------------------------------------------- |
| Front‑end           | Next.js (v15), React, Tailwind CSS                    |
| Exportação estática | `output: 'export'`, pasta `out/`                      |
| Deploy              | GitHub Pages via `gh-pages`                           |
| Otimização          | IA para simplificar estrutura e gerar versão estática |

---

## 🚀 Scripts Disponíveis

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "export": "next build && next export",
    "deploy": "gh-pages -d out"
  }
}
```
