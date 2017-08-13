export default class FotoService {

    constructor(resource) {

        this._resource = resource('v1/fotos{/id}');

    }

    lista() {

        return this._resource
            .query() // query == GET
            .then(res => res.json()); // Pegando a promisse e convertendo para json

    }

    cadastra(foto) {

        if (foto._id) {

            return this._resource
                .update({ id: foto._id }, foto)

        } else {

            return this._resource
                .save(this.foto); // o método save realiza um POST por debaixo dos panos enviado os dados passado como parâmetro
        }


    }

    apaga(id) {

        return this._resource.delete({ id });
    }

    busca(id) {
        return this._resource
            .get({ id })
            .then(res => res.json());
    }

}