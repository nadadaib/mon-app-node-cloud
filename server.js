const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.send(`
    <h1>version2: application mise à jour sur le cloud </h1>
    <p>Nom : Nada</p>
    <p>Déploiement réalisé avec GitHub et Render</p>
  `);
});
app.listen(port, '0.0.0.0', () => {
  console.log(`Application démarrée sur le port ${port}`);
});