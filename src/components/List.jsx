import Animes from '../services/Animes';

const List = () =>{
    return (
        <>
            {Animes.map(Animes =>
                <div chave={Animes.id}>

                    <h2>{Animes.nome}</h2>
                    <p>{Animes.descricao}</p>
                    <img src={Animes.imagem} width="200px" height="200px"/>
                </div>

            )}
        </>
    )
};

export default List;