const emptyTable = () => {
    return {
        totalResults: 0,
        totalPages: 0,
        currentPage: 0,
        pageSize: 0,
        products: [],
        message: `No se ha encontrado ningún Producto registrado en la base de datos`,
    }

};

module.exports = emptyTable;