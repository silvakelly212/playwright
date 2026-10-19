
# Automação de testes com Playwright e Type Script 

# 📘 Pré - requisitos 
# 📥 Instalação dos Softwares utilizados
Instale cada um dos seguintes softwares para prosseguir
- 🔗 https://code.visualstudio.com/download

# PlaywrightLab Automation

Projeto de automação E2E utilizando Playwright para validação do site:

https://playwrightlab.github.io

## Objetivo

Este projeto foi desenvolvido para validar os principais fluxos da aplicação PlayLab cobrindo:

- Jornada principal da tabela de usuários
- Formulários
- Componentes assíncronos
- Cenários negativos
- Acessibilidade
- Responsividade Mobile
- Integração Contínua (CI/CD)
- Evidências de execução

---

# Tecnologias

- Playwright
- TypeScript
- Axe Core
- GitHub Actions

---

# Estrutura do Projeto

```text
playwrightlab-automation
│
├── tests
│   ├── users-table.spec.ts
│   ├── forms.spec.ts
│   ├── async-components.spec.ts
│   ├── negative.spec.ts
│   ├── accessibility.spec.ts
│   └── mobile.spec.ts
│
├── playwright.config.ts
│
├── package.json
│
├── README.md
│
└── .github
    └── workflows
        └── playwright.yml
```

---

# Pré-requisitos

- Node.js 20+
- NPM 10+

Verificar versões:

```bash
node -v
npm -v
```

---

# Instalação

Clone o repositório:

```bash
git clone <repositorio>
```

Instale as dependências:

```bash
npm install
```

Instale os navegadores utilizados pelo Playwright:

```bash
npx playwright install --with-deps
```

---

# Configuração

Arquivo principal:

```text
playwright.config.ts
```

Configurações recomendadas:

- screenshots automáticos
- gravação 




