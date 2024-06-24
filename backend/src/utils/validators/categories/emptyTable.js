const emptyTable = () => {
    return {
        totalResults: 0,
        totalPages: 0,
        currentPage: 0,
        pageSize: 0,
        categories: [],
        message: `No se ha encontrado ninguna Categoría registrada en la base de datos`,
    }

};

module.exports = emptyTable;