const emptyTable = () => {
    return {
        totalResults: 0,
        totalPages: 0,
        currentPage: 0,
        pageSize: 0,
        subcategories: [],
        message: `No se ha encontrado ninguna Subcategoría registrada en la base de datos`,
    }

};

module.exports = emptyTable;