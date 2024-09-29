import './Titulo.css'

const Titulo = ({ esconderFormulario }) => {
    return (
        <div className='titulo-container'>
            <h3 className='titulo'>Minha Organização:</h3>
            <img onClick={esconderFormulario} src='./images/botao-add01.png' alt='Botão para esconder formulários' />
        </div>
    );
}

export default Titulo;