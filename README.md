# 🌌 NASA Astronomy Picture of the Day (APOD) – API Project

Ce projet utilise l’API officielle de la **NASA APOD (Astronomy Picture of the Day)** pour afficher quotidiennement des images ou vidéos spectaculaires de l’univers, accompagnées d’explications rédigées par des astronomes professionnels.

🔗 **Lien de l’application** : [https://nasa-apod-api-project.netlify.app/](https://nasa-apod-api-project.netlify.app/)

---

## 🚀 Fonctionnalités

- 📅 Affichage automatique de l’image du jour depuis l’API APOD
- 🔍 Rechercher une image par date spécifique
- 🎲 Affichage d’une image ou vidéo aléatoire de la collection APOD
- 🖼️ Support des images HD et miniatures de vidéos YouTube
- 💡 Explications scientifiques pour chaque image

---

## 🧪 Technologies utilisées

- **Front-end** : HTML, CSS, JavaScript (Fetch API)
- **API** : [NASA APOD API](https://api.nasa.gov/)
- **Déploiement** : Netlify

---

## 🔑 Obtenir une clé API NASA

1. Visitez [https://api.nasa.gov/](https://api.nasa.gov/)
2. Remplissez le formulaire pour obtenir votre clé API gratuite.
3. Vous recevrez un e-mail contenant une clé personnelle.
4. Utilisez-la dans vos requêtes à l'API :

```javascript
const API_KEY = "VOTRE_CLE_API";
const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
