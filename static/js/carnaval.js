window.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("state").addEventListener("change", function () {
        let estadoSigla = this.value;
        let municipioSelect = document.getElementById("city");

        // Limpa os municípios atuais
        municipioSelect.innerHTML = '<option selected>Selecione Município </option>';

        if (estadoSigla) {
            var url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + estadoSigla + "/distritos"
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    // Ordena os municípios alfabeticamente
                    data.sort((a, b) => {
                        return a.nome.localeCompare(
                            b.nome,
                            'pt-BR',
                            { sensitivity: 'base' }
                        );
                    });
                    data.forEach(municipio => {
                        let option = document.createElement("option");
                        option.value = municipio.id;
                        option.textContent = municipio.nome;
                        municipioSelect.appendChild(option);
                    });
                })
                .catch(error => console.error("Erro ao buscar municípios:", error));
        }
    });

    document.getElementById("formState").addEventListener("change", function () {
        let estadoSigla = this.value;
        let municipioSelect = document.getElementById("formCity");

        // Limpa os municípios atuais
        municipioSelect.innerHTML = '<option selected>Selecione Município </option>';

        if (estadoSigla) {
            var url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + estadoSigla + "/distritos"
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    // Ordena os municípios alfabeticamente
                    data.sort((a, b) => {
                        return a.nome.localeCompare(
                            b.nome,
                            'pt-BR',
                            { sensitivity: 'base' }
                        );
                    });
                    data.forEach(municipio => {
                        let option = document.createElement("option");
                        option.value = municipio.id;
                        option.textContent = municipio.nome;
                        municipioSelect.appendChild(option);
                    });
                })
                .catch(error => console.error("Erro ao buscar municípios:", error));
        }
    });
});