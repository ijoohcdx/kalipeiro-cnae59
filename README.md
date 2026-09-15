# Kalipeiro — Suíte CNAE 59

Landing page B2B para a **Suíte CNAE 59 — Temporada 1 Completa**, uma biblioteca de documentação operacional para empresas e profissionais do ecossistema audiovisual.

## Desenvolvimento local

```bash
pnpm install
pnpm dev
```

Para gerar a versão de produção:

```bash
pnpm run build
```

## Publicação no GitHub Pages

O arquivo `.github/workflows/deploy-pages.yml` publica automaticamente a aplicação após um push na branch `main`.

1. Crie um repositório no GitHub.
2. Adicione o conteúdo deste projeto e faça push para `main`.
3. Em **Settings → Pages**, selecione **GitHub Actions** como fonte.
4. O workflow fará o build e a publicação do site.

O CTA da landing page está preparado com a âncora `#checkout`. Substitua a constante `checkoutUrl` em `client/src/pages/Home.tsx` pelo endereço real do checkout quando ele estiver definido.

## Conteúdo

A oferta e os textos foram estruturados conforme o briefing recebido. A página evita claims jurídicos absolutos, provas sociais não verificadas, urgência artificial e informações fiscais não confirmadas.
