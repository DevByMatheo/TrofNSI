document.querySelector(".uploadForm").addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const image = document.querySelector('#image').files[0]; // Récupère le fichier sélectionné
    formData.append('image', image);

    try {
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('La réponse du serveur n\'est pas correcte');
        }

        const data = await response.json(); 

        if (data.success) {
            document.querySelector(".results").innerHTML =
            `   <h2>Résultats :</h2>
                <p><strong>Artiste :</strong> ${data.artist}</p>
                <p><strong>Œuvre :</strong> ${data.title}</p>
                <p><strong>Date :</strong> ${data.date}</p>`;
        } else {
            document.querySelector(".results").textContent = 'Aucune correspondance trouvée.';
        }
    } catch (error) {
        console.error('Erreur :', error);
        document.querySelector(".results").textContent = 'Une erreur est survenue.';
    }
});
