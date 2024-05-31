import { useEffect, useState } from "react";
import Instrumento from "../../entities/Instrumento";
import InstrumentoService from "../../services/InstrumentoService";
import Categoria from "../../entities/Categoria";
import CategoriaService from "../../services/CategoriaService";
import { Link } from "react-router-dom";
import Usuario from "../../entities/Usuario";
import { Roles } from "../../entities/Roles";


const GrillaInstrumentos = () => {
    const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);
    const instrumentoService = new InstrumentoService();
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<number | null>(null);
    const categoriaService = new CategoriaService();
    const [jsonUsuario] = useState<string | null>(localStorage.getItem('usuario'));
    const usuarioLogueado: Usuario | null = jsonUsuario ? JSON.parse(jsonUsuario) : null;

    const url = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchData = async () => {
            const instrumentosData = await instrumentoService.getAll(url + 'instrumentos');
            setInstrumentos(instrumentosData);
            console.log(instrumentosData);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchCategorias = async () => {
            const categoriasData = await categoriaService.getAll(url + 'categoria');
            setCategorias(categoriasData);
            console.log(categoriasData);
        };
        fetchCategorias();
    }, []);

    const filtrarPorCategoria = (instrumento: Instrumento) => {
        if (!categoriaSeleccionada) {
            return true; // Mostrar todos los instrumentos si no hay categoría seleccionada
        }
        return instrumento.categoria?.id === categoriaSeleccionada;
    };


    const deleteInstrumentos = async (idInstrumento: number) => {
        await instrumentoService.delete(url + 'instrumentos', idInstrumento);
        window.location.reload();
    };

    return (
        <div className="container-xxl text-center">
            <br />
            <select className="form-select mb-3" onChange={(e) => setCategoriaSeleccionada(Number(e.target.value))}>
                <option value="">Mostrar Todos</option>
                {categorias.map((categoria) => (
                    <option key={categoria.id} value={categoria.id}>{categoria.denominacion}</option>
                ))}
            </select>
            {usuarioLogueado?.rol === Roles.ADMIN && (
                <Link className="btn btn-primary" to={`/formulario/0`}>Nuevo Instrumento</Link>
            )}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th className="col-2">Instrumento</th>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Imagen</th>
                        <th className="col-3">Descripcion</th>
                        <th>Categoria</th>
                        <th>Costo de Envío</th>
                        <th>Cantidad Vendida</th>
                        {usuarioLogueado?.rol === Roles.ADMIN && <th></th>}
                        {usuarioLogueado?.rol === Roles.ADMIN && <th></th>}
                    </tr>
                </thead>
                <tbody>
                    {instrumentos.filter(filtrarPorCategoria).map((instrumento: Instrumento, index) => (
                        <tr key={index}>
                            <td>{instrumento.id}</td>
                            <td>{instrumento.instrumento}</td>
                            <td>{instrumento.marca}</td>
                            <td>{instrumento.modelo}</td>
                            <td><img src={`./images/${instrumento.imagen}`} style={{ width: '100px', height: '100px' }} /></td>
                            <td>{instrumento.descripcion}</td>
                            <td>{instrumento.categoria ? instrumento.categoria.denominacion : "Sin Categoria"}</td>
                            <td>{instrumento.costoEnvio === "G" ? "Envío gratis" : "$" + instrumento.costoEnvio}</td>
                            <td>{instrumento.cantidadVendida}</td>
                            {usuarioLogueado?.rol === Roles.ADMIN && (
                                <>
                                    <td>
                                        <Link to={`/formulario/${instrumento.id}`}>
                                            <i className="bi bi-pencil"></i>
                                        </Link>
                                    </td>
                                    <td>
                                        <i
                                            className="bi bi-trash"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => deleteInstrumentos(instrumento.id)}
                                        ></i>
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GrillaInstrumentos;
